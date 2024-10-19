import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import lang from "../../assets/flags/laung.png";
import logo from "../../assets/flags/logo.png";
import Search from "../search/Search";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en"); // Default language

  // Load language from localStorage on component mount
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      try {
        const parsedLang = JSON.parse(savedLang);
        setCurrentLanguage(parsedLang);
        i18n.changeLanguage(parsedLang);
      } catch (error) {
        console.error("Failed to parse language from localStorage", error);
      }
    } else {
      setCurrentLanguage(i18n.language);
    }
  }, [i18n]);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", JSON.stringify(lng));
    setCurrentLanguage(lng);
  };

  return (
    <>
      <nav className="hidden border-b-[1px] border-[#eeeeee33] py-3 font-[Almarai] sm:flex sm:justify-center">
        <div className="container flex flex-wrap items-center justify-between pl-4 pr-4">
          <div className="logo flex items-center space-x-6 rtl:space-x-reverse">
            <img src={logo} alt="Logo" />
          </div>
          <div className="search flex w-full items-center space-x-6 sm:w-[20rem] md:w-[30rem] rtl:space-x-reverse">
            <div className="w-full">
              <Search />
            </div>
          </div>

          <div className="me-6 flex flex-shrink-0 items-center text-[10px]">
            <Link
              to="/Login"
              type="button"
              className="rounded-lg border-2 border-[#DDE2E4] bg-transparent px-6 py-3 text-[14px] transition-all duration-300 hover:bg-[#0088dd] hover:text-[#fff]"
            >
              {t("login")}
            </Link>
          </div>
        </div>
      </nav>

      <nav className="hidden border-b-[1px] py-3 font-[Almarai] shadow-lg sm:flex sm:justify-center">
        <div className="container flex flex-wrap items-center justify-center">
          <ul
            className={`flex items-center justify-center ${currentLanguage === "en" ? "gap-3 space-x-3" : "gap-6 space-x-6"} `}
          >
            <li>
              <Link
                to="/"
                className={`mb-2 font-bold ${currentLanguage === "en" ? "text-[15px]" : "text-1xl"} transition-all duration-300 hover:text-[#0D6EFD]`}
              >
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`mb-2 font-bold ${currentLanguage === "en" ? "text-[15px]" : "text-1xl"} transition-all duration-300 hover:text-[#0D6EFD]`}
              >
                {t("aboutus")}
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className={`mb-2 font-bold ${currentLanguage === "en" ? "text-[15px]" : "text-1xl"} transition-all duration-300 hover:text-[#0D6EFD]`}
              >
                {t("news")}
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`mb-2 font-bold ${currentLanguage === "en" ? "text-[15px]" : "text-1xl"} transition-all duration-300 hover:text-[#0D6EFD]`}
              >
                {t("services")}
              </Link>
            </li>
            <li>
              <Link
                to="/AdvertiseWithUs"
                className={`mb-2 font-bold ${currentLanguage === "en" ? "text-[15px]" : "text-1xl"} transition-all duration-300 hover:text-[#0D6EFD]`}
              >
                {t("advertise")}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`mb-2 font-bold ${currentLanguage === "en" ? "text-[15px]" : "text-1xl"} transition-all duration-300 hover:text-[#0D6EFD]`}
              >
                {t("contact")}
              </Link>
            </li>
            <li
              className="flex cursor-pointer justify-center align-super"
              onClick={() =>
                handleLanguageChange(currentLanguage === "ar" ? "en" : "ar")
              }
            >
              <span className="ml-2 mr-2">
                {currentLanguage === "ar" ? "AR" : "EN"}
              </span>
              <img src={lang} className="w-[25px]" alt="Language" />
            </li>
          </ul>
        </div>
      </nav>

      <nav className="block p-4 font-[Almarai] text-gray-200 sm:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center pl-8">
            <div className="logo flex items-center space-x-6 rtl:space-x-reverse">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="block md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        {isOpen && (
          <div id="mobileMenu" className="mx-auto flex w-full py-8 text-center">
            <div className="flex w-full flex-col items-center justify-center">
              <Search />
              <ul className="mt-5 block rtl:space-x-reverse">
                <li className="mb-4">
                  <Link
                    to="/"
                    className="text-1xl mb-7 font-bold transition-all duration-300 hover:text-[#0D6EFD]"
                  >
                    {t("home")}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/about"
                    className="text-1xl mb-7 font-bold transition-all duration-300 hover:text-[#0D6EFD]"
                  >
                    {t("aboutus")}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/news"
                    className="text-1xl mb-7 font-bold transition-all duration-300 hover:text-[#0D6EFD]"
                  >
                    {t("news")}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/services"
                    className="text-1xl mb-7 font-bold transition-all duration-300 hover:text-[#0D6EFD]"
                  >
                    {t("services")}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/AdvertiseWithUs"
                    className="text-1xl mb-7 font-bold transition-all duration-300 hover:text-[#0D6EFD]"
                  >
                    {t("advertise")}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/contact"
                    className="text-1xl mb-7 font-bold transition-all duration-300 hover:text-[#0D6EFD]"
                  >
                    {t("contact")}
                  </Link>
                </li>
                <li
                  className="mb-4 flex cursor-pointer justify-center"
                  onClick={() =>
                    handleLanguageChange(currentLanguage === "ar" ? "en" : "ar")
                  }
                >
                  <span className="ml-3 mr-2 text-black">
                    {currentLanguage === "ar" ? "AR" : "EN"}
                  </span>
                  <img src={lang} className="w-[25px]" alt="Language" />
                </li>
              </ul>

              <div className="me-6 flex flex-shrink-0 items-center text-[10px]">
                <Link
                  to="/Login"
                  type="button"
                  className="rounded-lg border-2 border-[#DDE2E4] bg-transparent px-10 py-3 text-[14px] text-black transition-all duration-300 hover:bg-[#0088dd] hover:text-[#fff]"
                >
                  {t("login")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
