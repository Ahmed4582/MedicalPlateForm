import PropTypes from "prop-types";
import { FiPhone } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { t } from "i18next";
import MainButton from "../button/MainButton";
import { FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
const storedLanguage = JSON.parse(localStorage.getItem("lang")) || "en";

export function GeneralTextWithImage({
  imageSrc,
  altText,
  imgWidth,
  isImageLeft,
  className,
  children,
}) {
  return (
    <div
      className={`flex flex-col md:flex-row ${isImageLeft ? "md:flex-row-reverse" : "md:flex-row"} p-4 ${className}`}
    >
      <div className="flex w-full items-center justify-center p-4 md:w-1/2">
        <div className={`w-[${imgWidth}]`}>
          <img
            src={imageSrc}
            alt={altText}
            className="h-full w-full rounded-lg"
          />
        </div>
      </div>
      <div className="w-full p-4 md:w-1/2">{children}</div>
    </div>
  );
}

GeneralTextWithImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  imgWidth: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isImageLeft: PropTypes.bool,
};

// Hero

export function Hero({ firstImg, SecondImg, title, p, isImageLeft, Doctor }) {
  return (
    <div
      className={`flex flex-col md:flex-row ${isImageLeft ? "md:flex-row-reverse" : "md:flex-row"} p-1 md:p-4 font-[Almarai]`}
    >
      <div className="flex w-full items-center justify-center p-4 md:w-1/2">
        <div className={`relative flex items-center justify-center`}>
          <img
            src={firstImg}
            alt="hero"
            className="h-full w-3/4 rounded-lg md:w-full"
          />
          <img
            src={SecondImg}
            alt="hero2"
            className="absolute left-[-20px] top-0 md:h-[500px] md:w-[603px]"
          />
        </div>
      </div>
      <div className="w-full p-0 md:p-4 md:w-1/2">
        <h1 className="mb-10 mt-10 text-center text-3xl font-bold md:mt-20 md:text-start md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mb-12 text-center text-lg text-[#3C4959] md:text-start md:text-xl">
          {p}
        </p>
        <div className="flex items-center justify-center gap-5  md:justify-start md:gap-20">
          <MainButton
            text={t("Contact Us")}
            to="/contact"
            size="medium"
            type="dark"
          />
          <div className="flex gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-blue-600 bg-[#E6F6FE] text-lg text-blue-600">
              <LuPhoneCall />
            </div>
            <div>
              <p className="text-sm font-extrabold text-[#1376F8]">
                {t("Available24")}
              </p>
              <p className="text-sm font-bold">01012000000</p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-8 flex w-full max-w-md flex-col overflow-hidden rounded-lg bg-white p-6 shadow-md md:mx-0">
          {/* LinkedIn Icon */}
          <div
            className={`absolute top-4 bg-white p-2 ${storedLanguage === "en" ? "right-4" : "left-4"} `}
          >
            <a href={Doctor.linkedinUrl}>
              <FaLinkedin className="h-6 w-6 text-blue-600" />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0">
              <img
                src={Doctor.DoctorImg}
                alt="Profile"
                className="h-16 w-16 rounded-full"
              />
            </div>

            <div
              className={`ml-4 ${storedLanguage === "en" ? "text-start" : "text-end"}`}
            >
              <p className="text-xl font-semibold text-gray-900">
                {Doctor.name}
              </p>
              <p className="text-sm text-gray-500">{Doctor?.jobTitle}</p>
            </div>
          </div>
          {/* Description */}
          <p className={`mt-4 text-start text-gray-700`}>{Doctor.info}</p>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  firstImg: PropTypes.string.isRequired,
  SecondImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  Doctor: PropTypes.object.isRequired,
  isImageLeft: PropTypes.bool,
};

export function WelcomePatient({ imageSrc, isImageLeft, title, p }) {
const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');

  useEffect(() => {
    // Function to update the language state
    const updateLanguage = () => {
      const storedLanguage = localStorage.getItem('lang') || 'en';
      setLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    };

    // Call updateLanguage when the component mounts
    updateLanguage();

    // Listen to the 'storage' event to detect changes to the language in other tabs
    window.addEventListener('storage', updateLanguage);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', updateLanguage);
    };
  }, [i18n]);
  return (
    <div
      className={`flex flex-col md:flex-row ${isImageLeft ? "md:flex-row-reverse" : "md:flex-row"} p-4 font-[Almarai]`}
    >
      <div className="flex w-full items-center justify-center p-4 md:w-1/2">
        <div>
          <img src={imageSrc} className="h-full w-full rounded-lg" />
        </div>
      </div>
      <div className="w-full p-4 md:w-1/2">
        <h1 className="mb-10 mt-7 text-center text-2xl md:text-start md:text-3xl lg:text-6xl">
          {title}
        </h1>
        <p className="mb-8 text-center text-sm leading-7 text-[#3C4959] md:text-start md:text-lg">
          {p}
        </p>
        <div
          className={`mx-auto flex w-full items-center rounded-lg border border-gray-300 shadow-sm sm:mr-0 md:mx-0 md:overflow-hidden lg:w-[90%]`}
        >
          <div className="relative w-full">
            <span className={`pointer-events-none absolute inset-y-0 flex items-center text-gray-400 right-3`}>
              <FiPhone className="w-6 h-6" />
            </span>
            <input
              type="tel"
              placeholder={t("form.enter_phone")}
              className={`w-full px-9 py-4 text-gray-500 placeholder-[#CFCFCF] focus:outline-none text-center`}
              style={{ direction: language === "en" ? "ltr" : "rtl" }}
            />
          </div>
          <button className="bg-blue-500 px-6 py-4 text-white hover:bg-blue-600 focus:outline-none">
            {t("form.send")}
          </button>
        </div>
      </div>
    </div>
  );
}

WelcomePatient.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  isImageLeft: PropTypes.bool,
};

export function ChooseTebbi({
  imageSrc = "",
  title = "",
  p = "",
  isImageLeft = false,
  TextList,
  iconList,
}) {
  return (
    <div
      className={`flex flex-col bg-[#E6F6FE] md:flex-row ${isImageLeft ? "md:flex-row-reverse" : "md:flex-row"} my-10 p-4 pt-7 font-[Almarai]`}
    >
      <div className="flex w-full items-center justify-center p-4 md:w-1/2">
        <div>
          <img
            src={imageSrc}
            alt="choose Tebbi"
            className="h-full w-full rounded-lg"
          />
        </div>
      </div>
      <div className="w-full p-4 md:w-1/2">
        <h1 className="mb-10 mt-7 text-center text-2xl md:mb-5 md:text-start md:text-3xl lg:text-5xl">
          {title}
        </h1>
        <p className="mb-8 text-center text-lg text-[#3C4959] md:text-start md:text-xl">
          {p}
        </p>
        <ul className="flex flex-col gap-4 pr-0 text-center text-lg text-[#3C4959] md:pr-12 md:text-end md:text-xl">
          {TextList?.map((text, index) => (
            <li
              key={index}
              className="flex items-center justify-center gap-3 text-center text-lg md:justify-start md:text-start"
            >
              <div>
                {" "}
                <img src={iconList} alt="" />{" "}
              </div>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ChooseTebbi.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  iconList: PropTypes.string.isRequired,
  isImageLeft: PropTypes.bool,
  TextList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
