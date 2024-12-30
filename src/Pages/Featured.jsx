import Title from "../Components/Title";
import featured from "../assets/home/featured.jpg";
import bg from "../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: `center`,
      }}
      className="object-cover mt-20  text-white bg-fixed"
    >
      <div className="bg-[#2e2d2d9c] py-10">
        <Title subtitle={"---Check it out---"} title={"FROM OUR MENU"} />
        <div className="md:flex items-center justify-center py-8 px-16 ">
          <div>
            <img src={featured} alt="" />
          </div>
          <div className="space-y-2 mt-6 sm:mt-0 md:ml-10 ">
            <p className="text-xl">March 20, 2023</p>
            <p className="text-xl">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className=" btn btn-outline border-0 border-b-4 rounded-br-xl rounded-bl-xl px-4 py-2 border-white text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
