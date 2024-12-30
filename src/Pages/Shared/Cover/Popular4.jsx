import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../Hooks/useMenu";
const Popular4 = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <>
      <section className="grid sm:grid-cols-2 gap-6 mt-10 ">
        {salad.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </section>
    </>
  );
};

export default Popular4;
