import ShopCards from "./ShopCards";

const CardsTabs = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {items.map((item) => (
        <ShopCards item={item} key={item._id} />
      ))}
    </div>
  );
};

export default CardsTabs;
