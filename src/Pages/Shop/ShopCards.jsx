const ShopCards = ({ item }) => {
  const { name, recipe, image } = item;
  return (
    <div className="text-center  ">
      <img className="w-full object-cover h-[300px]" src={image} alt="" />
      <div className="bg-gray-200 pb-5">
        <h1 className="text-[24px] pt-8 ">{name}</h1>
        <p className="mt-2">{recipe}</p>
        <button className=" hover:bg-black text-xl font-medium mt-6 rounded-md uppercase border-b-4 px-4 py-2 bg-gray-300 text-[#BB8506] border-[#BB8506]">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ShopCards;
