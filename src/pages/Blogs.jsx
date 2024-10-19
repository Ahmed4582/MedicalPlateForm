import { NewsCard } from "../components/card/Card";
import img1 from "../assets/flags/image 7.png";
import Title from "../components/title";
import CardSwiper from "../components/swiper/Swiper";
import { useTranslation } from "react-i18next";
import SearchNews from "../components/search/SearchNews";
import MainButton from "../components/button/MainButton";
import Dropdown from "../components/DropDone/DropDone";

const Blogs = () => {
  const { t } = useTranslation();
  const lang = window.localStorage.getItem("lang");
  return (
    <>
      <div className="bg-sky-50 py-5 pb-28">
        <Title
          mainTitle={t("news_and_blogs")}
          subTitle={t("replaceable_text_in_this_space")}
          StyleText={"text-center "}
          StyleHr={"justify-center"}
          sizeHr={"w-[250px]"}
        />

        <SearchNews />
      </div>
      <div className="container mx-auto my-20">
        <Title
          mainTitle={t("blogs")}
          StyleText={`${lang === "en" ? "text-end" : "text-start"} mx-10`}
          StyleHr={`${lang === "en" ? "text-end" : "text-start"} `}
          sizeHr={"w-[150px]"}
        />
        <CardSwiper>
          {[...Array(1)].map((_, index) => (
            <NewsCard
              key={index}
              cardBody={`${lang === "en" ? "text-end" : "text-start"} mx-10`}
              img={img1}
              btnText={t("self_care")}
              title={t("dental_care")}
              p={t("replaceable_text")}
              name={t("author_name", { name: "رانيا جمال" })}
            />
          ))}
        </CardSwiper>
      </div>
      <div className="container mx-auto pb-10 pt-28">
        <div className="flex items-center justify-between">
          <Title
            mainTitle={t("news")}
            StyleText={`${lang === "en" ? "text-end" : "text-start"} mx-10`}
            StyleHr={`${lang === "en" ? "justify-end" : "justify-start"} `}
            sizeHr={"w-[120px]"}
          />
          <Dropdown />
        </div>

        <div className="grid gap-5 max-[640px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <NewsCard
              key={index}
              MainCard={""}
              cardBody={`${lang === "en" ? "text-end" : "text-start"} mx-10`}
              img={img1}
              btnText={t("self_care")}
              title={t("dental_care")}
              p={t("replaceable_text")}
              name={t("author_name", { name: "رانيا جمال" })}
            />
          ))}
        </div>
        <div className="mb-24 block text-center">
          <MainButton text={t("View All")} buttonClass={"h-12 mt-20   "} />
        </div>
      </div>
    </>
  );
};

export default Blogs;
