import { useState } from "react";
import { Link } from "react-router-dom";
import imgOne from "../assets/Img/Rectangle8687.png";
import imgTwo from "../assets/Img/about-1.jpg";
import imgThree from "../assets/Img/carousel-3.jpg";
import { SlArrowRight } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import MainButton from "../components/button/MainButton";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { t } from "i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      Email: Yup.string()
        .email("Invalid email address")
        .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          "Please enter a valid email address",
        )
        .required("Email is required"),
      Password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div
      className="register flex h-full max-h-screen  flex-col overflow-hidden bg-gray-100 md:grid md:grid-cols-12"
      dir="ltr"
    >
      <div className="col-span-12 flex flex-col p-6 md:col-span-6 md:pl-12 md:pr-12">
        <div className="mb-5 flex items-center justify-end pt-10">
          <Link to="/" className="mr-2 mt-1 text-[21px] text-black">
          {t("back")}
          </Link>
          <SlArrowRight className="text-[13px]" />
        </div>

        <div className="">
          <h2 className="mb-1 mt-4 text-center text-3xl font-bold text-black">
            {t("create account")}
          </h2>
          <p className="mb-4 text-center text-xl text-gray-600">
          {t("A medical platform to help you for better health")}
          </p>
        </div>
        <a
          href="#"
          className="mb-5 mt-4 flex w-full items-center justify-center rounded-lg bg-white text-white shadow-md hover:bg-gray-100"
        >
          <div className="px-4 py-3">
            <svg className="h-6 w-6" viewBox="0 0 40 40">
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#FFC107"
              />
              <path
                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                fill="#FF3D00"
              />
              <path
                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                fill="#4CAF50"
              />
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#1976D2"
              />
            </svg>
          </div>
          <h1 className="w-5/6 px-4 py-3 text-center font-bold text-gray-600">
            Sign in with Google
          </h1>
        </a>

        <div className="mt-4 flex items-center justify-between">
          <span className="h-px w-[45%] bg-gray-400 lg:w-[45%]"></span>
          <span className="text-center text-2xl  text-black">{t("Or")}</span>
          <span className="h-px w-[45%] bg-gray-400 lg:w-[45%]"></span>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="mt-5 text-xs" dir="rtl">
            <div className="relative mb-4 w-full space-y-2 text-xs">
              <input
                placeholder={t("input your Name")}
                className="bg-grey-lighter text-grey-darker border-grey-lighter block h-10 w-full appearance-none rounded-lg border px-4 py-6 pr-10"
                type="text"
                {...formik.getFieldProps("Name")}
              />
              <CiUser className="absolute right-2 top-1 text-[24px] text-gray-400" />
              {formik.touched.Email && formik.errors.Email ? (
                <span className="error text-red-600">{formik.errors.Name}</span>
              ) : null}
            </div>

            <div className="relative mb-4 w-full space-y-2 text-xs">
              <input
                placeholder={t("input your email")}
                className="bg-grey-lighter text-grey-darker border-grey-lighter block h-10 w-full appearance-none rounded-lg border px-4 py-6 pr-10"
                type="email"
                {...formik.getFieldProps("Email")}
              />
              <MdOutlineMail className="absolute right-2 top-1 text-[24px] text-gray-400" />
              {formik.touched.Email && formik.errors.Email ? (
                <span className="error text-red-600">
                  {formik.errors.Email}
                </span>
              ) : null}
            </div>
            <div className="relative mb-4 w-full space-y-2 text-xs">
              <input
                placeholder={t("input your password")}
                className="bg-grey-lighter text-grey-darker border-grey-lighter block h-10 w-full appearance-none rounded-lg border px-4 py-6 pr-10"
                type={showPassword ? "text" : "password"}
                {...formik.getFieldProps("Password")}
              />
              <RiLockPasswordFill className="absolute right-2 top-1 text-[24px] text-gray-400" />
              <button
                type="button"
                onClick={handlePasswordToggle}
                className="absolute left-3 top-1"
              >
                {showPassword ? (
                  <RiEyeOffLine className="text-[24px] text-gray-400" />
                ) : (
                  <RiEyeLine className="text-[24px] text-gray-400" />
                )}
              </button>
              {formik.touched.Password && formik.errors.Password ? (
                <span className="error text-red-600">
                  {formik.errors.Password}
                </span>
              ) : null}
            </div>
            <div className="mb-5 flex w-full items-center justify-center space-y-2 text-xs">
              <div className="flex items-center">
                <input type="checkbox" name="remember" id="remember" />
                <label
                  htmlFor="remember"
                  className="mr-2 text-[16px] text-black"
                >
                  {t("I agree to the terms and privacy")}
                </label>
              </div>
            </div>
            <div className="btn flex justify-center">
              <MainButton
                className="w-[70%]"
                text={t("Register")}
                type="dark"
                size="medium"
              />
            </div>
          </div>
        </form>

        <div className="mt-3 flex items-center justify-center">
          <span className="text-[20px]  text-black">
           {t("Already have an account?")}
            <Link to="/Login" className="text-[20px]  text-[#1976D2]">
             
              {t("login")}
            </Link>
          </span>
        </div>
      </div>

      <div className="col-span-12 hidden h-[100vh] md:col-span-6 md:block">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={imgOne}
              alt="Slide 1"
              className="h-[100vh] w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgTwo}
              alt="Slide 2"
              className="h-[100vh] w-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imgThree}
              alt="Slide 3"
              className="h-[100vh] w-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
