import useCarts from "../../../Hooks/useCarts";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { axiosSec } from "../../../Hooks/useAxiosSec";

const Oders = () => {
  const [cart, refetch] = useCarts();
  const totalPrice = cart.reduce((sum, cart) => sum + cart.price, 0);
  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSec.delete(`/my-card/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="p-6">
      <div className="flex justify-evenly mb-6 items-center ">
        <h1 className="text-4xl">Total Oders : {cart.length}</h1>
        <h1 className="text-4xl">total price: {totalPrice}</h1>
        <button className="btn btn-primary">Play</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Name</th>
              <th>PRICE</th>
              <th>ACTION</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td>{item?.price}</td>
                <th>
                  <button
                    onClick={() => handelDelete(item._id)}
                    className="p-2 hover:bg-red-800 rounded-md text-white text-xl bg-red-600"
                  >
                    <RiDeleteBin5Line className="hover:scale-105" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Oders;
