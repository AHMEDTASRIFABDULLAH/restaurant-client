import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";
const Popular2 = ({ title }) => {
  const lowcaseTitle = title.toLowerCase();
  console.log(lowcaseTitle);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  return (
    <>
      <section className="grid sm:grid-cols-2 gap-6 mt-10 ">
        {dessert.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </section>
      <Link to={`/shop/${lowcaseTitle}`}>
        <div className="text-center mt-14 sm:mt-20">
          <button className=" font-medium btn btn-outline border-0 border-b-4 rounded-br-xl rounded-bl-xl px-4 py-2 border-black ">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </Link>
    </>
  );
};

export default Popular2;
