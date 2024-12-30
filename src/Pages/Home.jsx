import Call from "../Components/Call";
import Banner from "./Banner";
import BannerTwo from "./BannerTwo";
import Featured from "./Featured";
import Popular from "./Popular";
import Recommends from "./Recommends";
import Review from "./Review";
import SectionThree from "./SectionThree";
import img from "../assets/home/chef-service.jpg";
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="p-6">
        <BannerTwo />
        <SectionThree
          title={"Bistro Boss"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
          }
          img={img}
        />
        <Popular />
        <Call />
        <Recommends />
        <Featured />
        <Review />
      </div>
    </div>
  );
};

export default Home;
