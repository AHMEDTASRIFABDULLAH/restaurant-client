import Title from "../../../Components/Title";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../Hooks/useMenu";
const Popular2 = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  return (
    <>
      <div className="mt-20">
        <Title subtitle={"---Don't miss---"} title={"TODAY'S OFFER"} />
      </div>
      <section className="grid sm:grid-cols-2 gap-6 mt-10 ">
        {dessert.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </section>
    </>
  );
};

export default Popular2;
