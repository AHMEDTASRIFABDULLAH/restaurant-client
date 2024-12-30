import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../Hooks/useMenu";
const Popular3 = () => {
  const [menu] = useMenu();
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <>
      <section className="grid sm:grid-cols-2 gap-6 mt-10 ">
        {pizza.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </section>
    </>
  );
};

export default Popular3;
