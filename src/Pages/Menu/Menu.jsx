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
import Title from "../../Components/Title";
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
          <div className="mt-20">
            <Title subtitle={"---Don't miss---"} title={"TODAY'S OFFER"} />
          </div>
          <SectionThree
            img={dimg}
            title={"DESSERTS"}
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
          <Popular2 title={"DESSERTS"} />
          {/* desert end */}

          <SectionThree
            img={pimg}
            title={"PIZZA"}
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
          <Popular3 title={"PIZZA"} />
          {/* Pizza end */}

          <SectionThree
            img={mimg}
            title={"SALAD"}
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
          <Popular4 title={"SALAD"} />
          {/* SALADS end */}

          <SectionThree
            img={mimg}
            title={"SOUP"}
            subtitle={
              "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
          <Popular5 title={"SOUP"} />
          {/* SOUPS end */}
          <Popular6 title={"DRINKS"} />
        </div>
      </div>
    </>
  );
};

export default Menu;
