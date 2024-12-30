import Call from "../Components/Call";
import Banner from "./Banner";
import BannerTwo from "./BannerTwo";
import Featured from "./Featured";
import Popular from "./Popular";
import Recommends from "./Recommends";
import Review from "./Review";
import SectionThree from "./SectionThree";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="p-6">
        <BannerTwo />
        <SectionThree />
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
