import Title from "../Components/Title";
import MenuItem from "./Shared/MenuItem";
import useMenu from "../Hooks/useMenu";

const Popular = () => {
  const [menu] = useMenu();
  const popularItem = menu.filter((item) => item.category === "popular");
  return (
    <>
      <div className="mt-20">
        <Title subtitle={"---Check it out---"} title={"FROM OUR MENU"} />
      </div>
      <section className="grid sm:grid-cols-2 gap-6 mt-10 ">
        {popularItem.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </section>
    </>
  );
};

export default Popular;
