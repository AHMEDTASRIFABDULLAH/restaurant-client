import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import img from "../../assets/menu/banner3.jpg";
import Popular2 from "../Shared/Cover/Popular2";
import SectionThree from "../SectionThree";
import mimg from "../../assets/home/chef-service.jpg";
import dimg from "../../assets/home/DESSERTS.jpg";
import pimg from "../../assets/home/PIZZA.jpg";
import Popular3 from "../Shared/Cover/Popular3";
import Popular4 from "../Shared/Cover/Popular4";
import Popular5 from "../Shared/Cover/Popular5";
import Popular6 from "../Shared/Cover/Popular6";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Our Menu</title>
      </Helmet>
      <div>
        <Cover
          title={"OUR MENU"}
          subtitle={"Would you like to try a dish?"}
          img={img}
        />
        <div className="px-6">
          <Popular2 />
          <SectionThree
            img={dimg}
            title={"DESSERTS"}
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
          {/* desert end */}
          <Popular3 />
          <SectionThree
            img={pimg}
            title={"PIZZA"}
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
          {/* Pizza end */}
          <Popular4 />
          <SectionThree
            img={mimg}
            title={"SALAD"}
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
          {/* SALADS end */}
          <Popular5 />
          <SectionThree
            img={mimg}
            title={"SOUP"}
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
          {/* SOUPS end */}
          <Popular6 />
          <div className="text-center mt-14 mb-6">
            <button className=" font-medium btn btn-outline border-0 border-b-4 rounded-br-xl rounded-bl-xl px-4 py-2 border-black ">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
