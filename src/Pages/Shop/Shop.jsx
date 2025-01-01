import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import img from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import CardsTabs from "./CardsTabs";
import { useParams } from "react-router-dom";
const Shop = () => {
  const { category } = useParams();
  const categories = ["salad", "pizza", "soup", "desserts", "drinks"];
  const newCaregories = categories.indexOf(category);
  console.log(newCaregories);
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(newCaregories);
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <>
      <Helmet>
        <title>Our Shop</title>
      </Helmet>
      <div>
        <Cover
          title={"OUR SHOP"}
          subtitle={"Would you like to try a dish?"}
          img={img}
        />
        <div className="p-6 mt-8">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <div className="flex justify-center items-center ">
              <TabList className={` border-none  mb-8`}>
                <Tab>Salad</Tab>
                <Tab>pizza</Tab>
                <Tab>soup</Tab>
                <Tab>desserts</Tab>
                <Tab>drinks</Tab>
              </TabList>
            </div>
            <TabPanel>
              <CardsTabs items={salad} />
            </TabPanel>
            <TabPanel>
              <CardsTabs items={pizza} />
            </TabPanel>
            <TabPanel>
              <CardsTabs items={soup} />
            </TabPanel>
            <TabPanel>
              <CardsTabs items={dessert} />
            </TabPanel>
            <TabPanel>
              <CardsTabs items={drinks} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Shop;
