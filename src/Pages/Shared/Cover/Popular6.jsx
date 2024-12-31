import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../Hooks/useMenu";
const Popular6 = () => {
  const [menu] = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <>
      <section className="grid sm:grid-cols-2 gap-6 mt-10 ">
        {drinks.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </section>
    </>
  );
};

export default Popular6;
