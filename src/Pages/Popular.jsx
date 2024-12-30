import { useEffect, useState } from "react";
import Title from "../Components/Title";
import MenuItem from "./Shared/MenuItem";

const Popular = () => {
  const [menu, setMenu] = useState([]);
  console.log(menu);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <>
      <div className="mt-20">
        <Title subtitle={"---Check it out---"} title={"FROM OUR MENU"} />
      </div>
      <section className="grid sm:grid-cols-2 gap-6 mt-10 ">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </section>
    </>
  );
};

export default Popular;
