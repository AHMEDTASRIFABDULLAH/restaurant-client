import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Title from "../Components/Title";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa6";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mt-10">
      <Title subtitle={"---What Our Clients Say---"} title={"TESTIMONIALS"} />
      <section>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]} // Ensure Navigation is included in modules
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="p-6 m-8 space-y-3">
                <div className="flex justify-center items-center">
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={review.rating}
                    readOnly
                  />
                </div>
                <div className="flex justify-center items-center">
                  <FaQuoteLeft className="text-6xl sm:my-6" />
                </div>
                <p className="text-center">{review.details}</p>
                <p className="text-center text-2xl font-medium text-[#D99904]">
                  {review.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Review;
