import TextParagraph from "../components/textParagraph/TextParagraph";
import { useTranslation } from "react-i18next";

// import img
import imgBg from "../assets/Img/Group 1261152733.png";
import favorite from "../assets/svg/fav.svg";
import eye from "../assets/svg/eye.svg";
import coment from "../assets/svg/coment.svg";

const BlogsDetails = () => {
  const { t } = useTranslation();
  const lang = window.localStorage.getItem("lang");
  return (
    <>
      {/* start VedioComponent */}
      <div className="mb-32">
        <img src={imgBg} className="w-full" alt="" />
        <div className="flex flex-col items-center justify-between space-y-4 border-b border-gray-200 p-4 lg:flex-row lg:space-y-0">
          <div className="flex flex-wrap justify-center space-x-2 lg:justify-start lg:space-x-4">
            <button className="mx-1 flex items-center space-x-1 rounded-full bg-blue-100 px-2 py-1 text-blue-500 lg:mx-2">
              <span className="mx-1 text-black">24.5k</span>
              <img src={coment} alt="" />
            </button>
            <button className="mx-1 flex items-center space-x-1 rounded-full bg-blue-100 px-2 py-1 text-blue-500 lg:mx-2">
              <span className="mx-1 text-black">50k</span>
              <img src={eye} alt="" />
            </button>
            <button className="mx-1 flex items-center space-x-1 rounded-full bg-blue-100 px-2 py-1 text-blue-500 lg:mx-2">
              <span className="mx-1 text-black">24.5k</span>
              <img src={favorite} alt="" />
            </button>
          </div>
          <div className="flex flex-wrap justify-center space-x-2 text-gray-500 lg:justify-end lg:space-x-8">
            <div className="mx-2 flex flex-col items-center font-[Almarai] text-sm font-medium max-sm:mb-5 max-sm:w-1/2 md:text-base lg:mx-10">
              <span className="mb-1 text-[#909090] md:mb-2">
                {t("timeText")}
              </span>
              <span className="text-[#252C32]">{t("timeP")} </span>
            </div>
            <div className="mx-2 flex flex-col items-center font-[Almarai] text-sm font-medium max-sm:mb-5 max-sm:w-1/2 md:text-base lg:mx-10">
              <span className="mb-1 text-[#909090] md:mb-2">
                {t("videoName")}
              </span>
              <span className="text-[#252C32]">{t("videoPName")} </span>
            </div>
            <div className="mx-2 flex flex-col items-center font-[Almarai] text-sm font-medium max-sm:mb-5 max-sm:w-1/2 md:text-base lg:mx-10">
              <span className="mb-1 text-[#909090] md:mb-2">
                {t("hestoryText")}
              </span>
              <span className="text-[#252C32]">{t("hestoryP")} </span>
            </div>
            <div className="mx-2 flex flex-col items-center font-[Almarai] text-sm font-medium max-sm:mb-5 max-sm:w-1/2 md:text-base lg:mx-10">
              <span className="mb-1 text-[#909090] md:mb-2">
                {t("videoText")}
              </span>
              <span className="text-[#252C32]">{t("videoP")} </span>
            </div>
          </div>
        </div>
      </div>
      {/* end VedioComponent */}
      <div className="container">
        {[...Array(5)].map((_, index) => (
          <TextParagraph
            key={index}
            classText={`${lang === "en" ? "text-end" : "text-start"} container mx-10`}
            title={t("titleDetails")}
            classTitle={"font-[Almarai] text-4xl my-10 font-bold	"}
            p={t("pDetails")}
            classP={"font-[inter] text-lg my-10 font-normal"}
          />
        ))}
      </div>
    </>
  );
};

export default BlogsDetails;
