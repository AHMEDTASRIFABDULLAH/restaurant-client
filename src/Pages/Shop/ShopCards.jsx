import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSec from "../../Hooks/useAxiosSec";
import useCarts from "../../Hooks/useCarts";
import toast from "react-hot-toast";

const ShopCards = ({ item }) => {
  const axiosSec = useAxiosSec();
  const { name, recipe, image, _id, price } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCarts();
  const handelAddcards = (item) => {
    if (user && user.email) {
      const cartitem = {
        menuId: _id,
        email: user?.email,
        name,
        price,
        image,
      };
      axiosSec
        .post("/carts", cartitem)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success(" Food added Successfully ");
            refetch();
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(item);
    } else {
      Swal.fire({
        title: " you are not  logged ",
        text: "please login to add to the card",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="text-center  ">
      <img className="w-full object-cover h-[300px]" src={image} alt="" />
      <div className="bg-gray-200 pb-5">
        <h1 className="text-[24px] pt-8 ">{name}</h1>
        <p className="mt-2">{recipe}</p>
        <button
          onClick={() => handelAddcards(item)}
          className=" hover:bg-black text-xl font-medium mt-6 rounded-md uppercase border-b-4 px-4 py-2 bg-gray-300 text-[#BB8506] border-[#BB8506]"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ShopCards;
