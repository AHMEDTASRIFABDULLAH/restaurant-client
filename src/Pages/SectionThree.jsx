const SectionThree = ({ img, title, subtitle }) => {
  return (
    <>
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
