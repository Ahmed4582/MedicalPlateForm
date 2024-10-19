import { Link } from "react-router-dom";
import imgFooter from "../../assets/cartfooter.png";
import { t } from "i18next";
export const CardFooter = () => {
  localStorage.getItem("lang");
  console.log(localStorage.getItem("lang")== "en");
  const storedLanguage = localStorage.getItem("lang")
  return (
    <div className="container mx-auto px-4 lg:mt-[-150px] md:mt-[-80px] sm:mt-[-60px] mt-[-60px]">
      <div className="flex justify-center relative">
        <img
          src={imgFooter}
          className="w-full h-auto imgFooter lg:mb-[-70px] md:mb-[-70px] sm:mb-[-50px] mb-[-30px] "
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white text-center">
          <h2 className={`lg:mb-5 md:mb-2 sm:mb-1 md:leading-normal lg:text-[25px] md:text-[20px] sm:text-[15px]  font-bold  mb-1 text-sm`}>
            {t("contact_title")}
          </h2>
          <Link
            to="/contact"
            className="rounded-md bg-transparent border border-white lg:px-6 lg:py-2 md:px-6 md:py-2 sm:px-4 sm:py-2 py-1 px-1  sm:text-base text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-800"
          >
{t("contact")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
