import cheif from "../assets/home/chef-service.jpg";
const SectionThree = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${cheif})`,
        backgroundPosition: `center`,
      }}
      className="p-20  mt-14 sm:mt-20 bg-fixed"
    >
      <div className="text-center space-y-4 md:p-20 p-10 bg-white ">
        <h1 className=" text-4xl sm:text-5xl">Bistro Boss</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default SectionThree;
