import { useQuery } from "@tanstack/react-query";
import useAxiosSec from "../../../Hooks/useAxiosSec";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSec = useAxiosSec();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSec.get(`/users`);
      return res.data;
    },
  });
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
        axiosSec.delete(`/users/${id}`).then((res) => {
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
  const handelMakeAdmin = (id) => {
    axiosSec.patch(`/users/admin/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "",
          text: "admin set",
          icon: "success",
        });
        refetch();
      }
    });
  };
  return (
    <div>
      <h1>Total users : {users.length}</h1>
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>
                  {item.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handelMakeAdmin(item._id)}
                      className="p-2 hover:bg-green-800 rounded-md text-white text-xl bg-green-600"
                    >
                      <FaUser className="hover:scale-105" />
                    </button>
                  )}
                </td>
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

export default AllUsers;
