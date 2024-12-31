import { Link } from "react-router-dom";

const SectionThree = ({ img, title, subtitle }) => {
  const lowcaseTitle = title.toLowerCase();
  console.log(lowcaseTitle);
  return (
    <>
      <Link to={`/shop/${lowcaseTitle}`}>
        <div className="text-center mt-14 sm:mt-20">
          <button className=" font-medium btn btn-outline border-0 border-b-4 rounded-br-xl rounded-bl-xl px-4 py-2 border-black ">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </Link>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: `center`,
        }}
        className="p-10 bg-no sm:p-20 mt-14 sm:mt-20 bg-fixed"
      >
        <div className="text-center space-y-4 md:p-20 p-10 bg-white ">
          <h1 className=" text-4xl sm:text-5xl">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
