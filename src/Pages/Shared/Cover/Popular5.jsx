import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../Hooks/useMenu";
const Popular5 = () => {
  const [menu] = useMenu();
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <>
      <section className="grid sm:grid-cols-2 gap-6 mt-10 ">
        {soup.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </section>
    </>
  );
};

export default Popular5;
