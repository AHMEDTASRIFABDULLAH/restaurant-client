import Title from "../Components/Title";
import c1 from "../assets/home/slide1.jpg";
const Recommends = () => {
  return (
    <div>
      <Title subtitle={"---Should Try---"} title={"CHEF RECOMMENDS"} />
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 ">
        <div className="text-center  ">
          <img className="w-full object-cover h-[300px]" src={c1} alt="" />
          <div className="bg-gray-200 pb-5">
            <h1 className="text-[24px] pt-8 ">Caeser Salad</h1>
            <p className="mt-2">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className=" text-xl font-medium mt-6 rounded-md uppercase border-b-4 px-4 py-2 bg-gray-300 text-[#BB8506] border-[#BB8506]">
              add to cart
            </button>
          </div>
        </div>
        <div className="text-center ">
          <img className="w-full object-cover h-[300px]" src={c1} alt="" />
          <div className="bg-gray-200 pb-5">
            <h1 className="text-[24px] pt-8 ">Caeser Salad</h1>
            <p className="mt-2">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className=" text-xl font-medium mt-6 rounded-md uppercase border-b-4 px-4 py-2 bg-black text-[#BB8506] border-[#BB8506]">
              add to cart
            </button>
          </div>
        </div>
        <div className="text-center  ">
          <img className="w-full object-cover h-[300px]" src={c1} alt="" />
          <div className="bg-gray-200 pb-5">
            <h1 className="text-[24px] pt-8 ">Caeser Salad</h1>
            <p className="mt-2">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <button className=" text-xl font-medium mt-6 rounded-md uppercase border-b-4 px-4 py-2 bg-gray-300 text-[#BB8506] border-[#BB8506]">
              add to cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recommends;
