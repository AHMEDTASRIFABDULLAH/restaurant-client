const Cover = ({ img, title, subtitle }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="flex justify-center items-center">
        <div className=" px-20 md:px-40 lg:px-80 sm:py-20 py-10 bg-[#242323c2]">
          <h1 className="mb-5 text-center  text-white text-5xl font-bold">
            {title}
          </h1>
          <p className="mb-5 text-white text-center ">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
