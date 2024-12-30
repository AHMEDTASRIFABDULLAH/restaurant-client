const Title = ({ subtitle, title }) => {
  return (
    <div>
      <p className="text-center text-[#D99904] mb-4">{subtitle}</p>
      <div className="flex justify-center items-center">
        <h3 className=" inline-block uppercase p-3 text-3xl border-y-2 border-gray-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Title;
