const MenuItem = ({ item }) => {
  const { recipe, image, price, name } = item;
  return (
    <div className="flex gap-4">
      <img
        className="w-[118px] object-cover rounded-b-full rounded-tr-full"
        src={image}
        alt=""
      />
      <div>
        <div className="flex justify-between items-center">
          <h2 className="uppercase text-xl">{name} ------------------</h2>
          <p className="text-[#BB8506] text-xl">${price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
