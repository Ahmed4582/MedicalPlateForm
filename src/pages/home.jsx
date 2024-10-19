// import Component
import { NewsCard, ReviewCard, ServiceCard } from "../components/card/Card";
import { DoctorsCard } from "../components/card/Card";
import CardSwiper from "../components/swiper/Swiper";
import ShieldDone from "../assets/Shield Done.png";
import {
  ChooseTebbi,
  Hero,
  WelcomePatient,
} from "../components/TextWithImage/TextWithImage";

// import icon
import icon1 from "../assets/svg/serviceImage.svg";
import icon2 from "../assets/svg/linkedin.svg";
import icon3 from "../assets/svg/rate.svg";
// import img
import img1 from "../assets/Img/FF-removebg-preview 1.png";
import img2 from "../assets/Img/Group 1000001099.png";
import doctorImg from "../assets/Img/carousel-3.jpg";
import img3 from "../assets/Img/newImg.png";
import img4 from "../assets/Img/Rectangle 631.png";
import img5 from "../assets/Img/Group 1000001015.png";
import img6 from "../assets/Img/Mask group.png";
import img7 from "../assets/Img/Ellipse 4.png";
import img8 from "../assets/Img/Rectangle 652 (1).png";

// translation
import { useTranslation } from "react-i18next";
import Title from "../components/title";
import MainButton from "../components/button/MainButton";

export default function Home() {
  const { t } = useTranslation();
  const lang = window.localStorage.getItem("lang");
  return (
    <>
      <div className="container mx-auto">
        <Hero
          isImageLeft
          firstImg={img1}
          SecondImg={img2}
          title={t("title_hero")}
          p={t("p_hero")}
          Doctor={{
            name: "ahmed",
            DoctorImg: doctorImg,
            jobTitle: "طبيب مختص",
            info: t("p_cardHero"),
          }}
        />
        <div className="mb-24 mt-24 w-full rounded-lg bg-sky-100 p-10">
          <CardSwiper>
            {[...Array(1)].map((_, index) => (
              <ServiceCard
                key={index}
                cardBody={`${lang === "en" ? "text-end" : "text-start"} mx-10`}
                icon={icon1}
                title={t("service_name")}
                p={t("p_text")}
                btnText={t("btn_Teaxt")}
              />
            ))}
          </CardSwiper>
        </div>
        <WelcomePatient
          isImageLeft
          imageSrc={img3}
          title={t("titlePatain")}
          p={t("pPatain")}
        />
        <ChooseTebbi
          imageSrc={img4}
          title={t("titleChoose")}
          p={t("pChoose")}
          TextList={[
            t("medical_team_level"),
            t("latest_medical_services"),
            t("Registration_easy"),
          ]}
          iconList={ShieldDone}
        />
        <Title
          mainTitle={t("homeTitle")}
          subTitle={t("homeP")}
          StyleText="text-center"
        />
        <div className="my-10 flex w-full justify-center">
          <img src={img5} alt="" />
        </div>
        <div className="block text-center">
          <MainButton text={t("Watch")} buttonClass="mb-10 " />
        </div>
        <div />
      </div>
      <div className="mb-24 bg-sky-200 pb-24">
        <Title
          mainTitle={t("docTitle")}
          subTitle={t("docP")}
          StyleText="text-center"
        />
        <div className="mx-10">
          <CardSwiper>
            {[...Array(1)].map((_, index) => (
              <DoctorsCard
                key={index}
                imageSrc={img6}
                iconDoctor={icon2}
                nameDoctor={t("nameDoctor")}
                job={t("jobDoc")}
              />
            ))}
          </CardSwiper>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="mb-24 pb-24">
          <Title
            mainTitle={t("reviewTitle")}
            subTitle={t("reviewP")}
            showHr
            StyleText={"text-center "}
            StyleHr={"justify-center"}
            sizeHr={"w-[250px]"}
          />
          <CardSwiper>
            {[...Array(1)].map((_, index) => (
              <ReviewCard
                key={index}
                imgReview={img7}
                iconReview={icon3}
                name={"احمد ناصر متولي"}
                p={t("reviewCardP")}
              />
            ))}
          </CardSwiper>
        </div>
        <div className="flex flex-col items-center justify-between sm:flex-row sm:items-start sm:justify-between">
          <Title
            mainTitle={t("newsTitle")}
            StyleH1={"text-center lg:text-start"}
            subTitle={t("reviewP")}
            showHr
            StyleText={"text-end sm:text-start"}
            StyleHr={"justify-center sm:justify-start"}
            sizeHr={"w-[250px]"}
          />
          <MainButton
            text={t("View All")}
            buttonClass={"h-12 mt-5 sm:mt-10 text-center"}
          />
        </div>

        <div className="mb-10 mt-10 grid gap-5 max-[640px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <NewsCard
              key={index}
              MainCard={""}
              cardBody={`${lang === "en" ? "text-end" : "text-start"} mx-10`}
              img={img8}
              btnText={t("self_care")}
              title={t("dental_care")}
              p={t("replaceable_text")}
              name={t("author_name", { name: "رانيا جمال" })}
            />
          ))}
        </div>
        <div className="block text-center">
          <MainButton text={t("View All")} buttonClass={"h-12 mt-20 mb-52  "} />
        </div>
      </div>
    </>
  );
}
