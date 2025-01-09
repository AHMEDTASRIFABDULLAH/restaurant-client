import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSec from "../../Hooks/useAxiosSec";
const imageApi = import.meta.env.VITE_IMAGE_API;
const imageUrl = `https://api.imgbb.com/1/upload?key=${imageApi}`;
// display_url
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSec = useAxiosSec();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageUrl, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.recipe,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.details,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSec.post(`/menu`, menuItem);
      console.log(menuItem.data);
      reset();
      //   if (menuItem.data.insertedId) {
      //     alert("data in mongodb");
      //   }
    }
    console.log(res.data);
  };
  //   Salad pizza soupdes sertsd rinks
  return (
    <div className="bg-gray-400 p-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <div className="label">
            <span className="label-text">recipe name : </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            {...register("recipe", { required: true })}
          />
        </div>
        <div className="flex gap-6">
          <div>
            <div className="label">
              <span className="label-text">category : </span>
            </div>
            <select
              className="select select-primary w-full "
              {...register("category", { required: true })}
            >
              <option value="salad">salad</option>
              <option value="pizza">pizza</option>
              <option value="soup">soup</option>
              <option value="desserts">desserts</option>
              <option value="drinks">drinks</option>
            </select>
          </div>
          <div>
            <div className="label">
              <span className="label-text">Price : </span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <div>
          <div className="label">
            <span className="label-text"> Recipe Details : </span>
          </div>
          <textarea
            {...register("details", { required: true })}
            className="textarea textarea-primary w-full"
            placeholder="Recipe Details"
          ></textarea>
        </div>
        <div>
          <div className="label">
            <span className="label-text">image : </span>
          </div>
          <input
            {...register("image", { required: true })}
            type="file"
            required
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <input className="btn btn-primary mt-6" type="submit" />
      </form>
    </div>
  );
};

export default AddItems;
