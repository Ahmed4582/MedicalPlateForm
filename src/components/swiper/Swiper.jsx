// import { useEffect, useState } from "react";
// import { Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import PropTypes from "prop-types";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./style.css";

// export default function CardSwiper({ children }) {
//   CardSwiper.propTypes = {
//     children: PropTypes.node.isRequired,
//   };

//   const [widthStatus, setWidthStatus] = useState(() => {
//     if (window.innerWidth <= 767) return "sm";
//     if (window.innerWidth <= 992) return "md";
//     return "lg";
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 767) {
//         setWidthStatus("sm");
//       } else if (window.innerWidth <= 992) {
//         setWidthStatus("md");
//       } else {
//         setWidthStatus("lg");
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const [slides, setSlides] = useState(
//     Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`),
//   );

//   return (
//     <>
//       <Swiper
// slidesPerView={widthStatus === "lg" ? 4 : widthStatus === "md" ? 2 : 1}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
// navigation={widthStatus === "sm" ? false : true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
// {slides.map((slideContent, index) => (
//   <SwiperSlide
//     key={slideContent}
//     virtualIndex={index}
//     className="flex items-center justify-center rounded-2xl text-center"
//   >
//     <div className="w-full">{children}</div>
//   </SwiperSlide>
// ))}
//       </Swiper>
//     </>
//   );
// }
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

export default function CardSwiper({ children }) {
  CardSwiper.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [widthStatus, setWidthStatus] = useState(() => {
    if (window.innerWidth <= 767) return "sm";
    if (window.innerWidth <= 992) return "md";
    return "lg";
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setWidthStatus("sm");
      } else if (window.innerWidth <= 992) {
        setWidthStatus("md");
      } else {
        setWidthStatus("lg");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const numberOfSlides = 10; // Adjust this to the number of slides you

  return (
    <>
      <Swiper
        slidesPerView={widthStatus === "lg" ? 4 : widthStatus === "md" ? 2 : 1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={widthStatus === "sm" ? false : true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <Swiper>
          {Array.from({ length: numberOfSlides }).map((_, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center rounded-2xl text-center"
            >
              <div className="w-full">{children}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Swiper>
    </>
  );
}
