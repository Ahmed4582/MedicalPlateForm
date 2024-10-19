
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/flags/logo.png";
import CardFooter from '../cardFooter/cardFooter'
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <footer className="bg-[#F1F5F9] relative py-6 ">
      <div className="container mx-auto px-4">
      {location.pathname === "/contact" ?'' : <CardFooter />}
        <div className="md:flex items-center md:justify-center lg:justify-between">

       
          <div className="mt-8 sm:flex flex justify-center sm:justify-center lg:justify-start  ml-4">
            <img src={Logo} alt="" />
          </div>
          
          <div className="mt-8 sm:flex sm:justify-center lg:justify-start ">
            <ul className="flex justify-center flex-wrap gap-4" dir="rtl">
            <li className="mb-4">
                  <Link
                    to="/"
                    className="text-1xl mb-7 font-bold transition-all duration-300 hover:text-[#0D6EFD]"
                  >
                    {t('home')}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/about"
                    className="text-1xl mb-7 font-bold transition-all duration-300 hover:text-[#0D6EFD]"
                  >
                    {t('aboutus')}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/news"
                    className="text-1xl mb-7 font-bold transition-all duration-300 hover:text-[#0D6EFD]"
                  >
                    {t('news')}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/services"
                    className="text-1xl mb-7 font-bold transition-all duration-300 hover:text-[#0D6EFD]"
                  >
                    {t('services')}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/AdvertiseWithUs"
                    className="text-1xl mb-7 font-bold transition-all duration-300 hover:text-[#0D6EFD]"
                  >
                    {t('advertise')}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/contact"
                    className="text-1xl mb-7 font-bold transition-all duration-300 hover:text-[#0D6EFD]"
                  >
                    {t('contact')}
                  </Link>
                </li>

            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto h-1/3 dark:border-black lg:my-8" />
        <div
          className="sm:flex sm:items-center  sm:justify-center lg:justify-between flex-wrap text-center"
        
        >
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mb-4 sm:mb-0">
           {t("copy")}
            <a
              href="https://www.allsafeeg.com/ar"
              className="hover:underline mr-2 text-[#147ef9]"
            >
              All Safe
            </a>
          </span>
          <div className="flex flex-wrap justify-center mt-4 sm:mt-0 space-x-5 rtl:space-x-reverse mr-4">
            {/* Twitter Icon */}
            <a
              href="#"
              className="text-white bg-black p-3 rounded-3xl hover:bg-[#147ef9] duration-300 transition-all dark:hover:text-white mb-4 sm:mb-0"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            {/* LinkedIn Icon */}
            <a
              href="#"
              className="text-white bg-black p-3 rounded-3xl hover:bg-[#147ef9] duration-300 transition-all dark:hover:text-white mb-4 sm:mb-0"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.941 20V6.619H.367V20h4.574zm-2.287-15.93c1.609 0 2.688-1.102 2.688-2.482C5.342 1.099 4.263 0 2.654 0 1.047 0 0 1.1 0 2.588c0 1.38 1.047 2.482 2.611 2.482h.043zM20 20h-4.574v-7.198c0-1.809-.648-3.042-2.27-3.042-1.237 0-1.972.842-2.297 1.654-.118.282-.147.675-.147 1.07V20H6.148s.059-12.204 0-13.381h4.575v1.895c.607-.937 1.689-2.274 4.106-2.274 3 0 5.171 1.963 5.171 6.179V20z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
            {/* YouTube Icon */}
            <a
              href="#"
              className="text-white bg-black p-3 rounded-3xl hover:bg-[#147ef9] duration-300 transition-all dark:hover:text-white mb-4 sm:mb-0"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M19.615 3.184C17.932 3.016 12 3 12 3s-5.932.016-7.615.184c-2.152.246-3.3 1.414-3.568 3.598C.384 8.797.384 12 .384 12s0 3.203.433 5.218c.268 2.184 1.416 3.352 3.568 3.598C6.068 20.984 12 21 12 21s5.932-.016 7.615-.184c2.152-.246 3.3-1.414 3.568-3.598.433-2.015.433-5.218.433-5.218s0-3.203-.433-5.218c-.268-2.184-1.416-3.352-3.568-3.598zM9.75 14.75v-5.5l5 2.75-5 2.75z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">YouTube channel</span>
            </a>
            {/* Instagram Icon */}
            <a
              href="#"
              className="text-white bg-black p-3 rounded-3xl hover:bg-[#147ef9] duration-300 transition-all dark:hover:text-white mb-4 sm:mb-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 16 16"
                id="instagram"
              >
                <g fill="none" stroke="#fff" strokeMiterlimit="10">
                  <path d="M11.5 15.5h-7a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4z"></path>
                  <circle cx="8" cy="8" r="3.5"></circle>
                  <circle cx="12.5" cy="3.5" r=".5"></circle>
                </g>
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            {/* Facebook Icon */}
            <a
              href="#"
              className="text-white bg-black p-3 rounded-3xl hover:bg-[#147ef9] duration-300 transition-all dark:hover:text-white mb-4 sm:mb-0"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
