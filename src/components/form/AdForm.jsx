import MainButton from '../button/MainButton';
import { useFormik } from "formik";
import * as Yup from "yup";
import {t} from "i18next";
function AdForm() {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, "Name must be at least 2 characters")
          .max(50, "Name can't be longer than 50 characters")
          .required("Name is required"),
        familyName: Yup.string()
          .min(2, "Family Name must be at least 2 characters")
          .max(50, "Family Name can't be longer than 50 characters")
          .required("Family Name is required"),
        email: Yup.string()
          .email("Invalid email format")
          .required("Email is required"),
        phone: Yup.string()
          .matches(/^\+?\d{10,15}$/, "Phone number is not valid")
          .required("Phone number is required"),
        duration: Yup.string().required("Duration is required"),
        price: Yup.string().required("Price is required"),
        message: Yup.string()
          .min(10, "Message must be at least 10 characters")
          .required("Message is required"),
      });
    
      const formik = useFormik({
        initialValues: {
          name: "",
          familyName: "",
          email: "",
          phone: "",
          duration: "",
          price: "",
          message: "",
        },
        validationSchema,
        onSubmit: (values) => {
          console.log("Form data", values);
          // Handle form submission, e.g., send data to API
        },
      });
    return (
        <form onSubmit={formik.handleSubmit} className="bg-[#f1fafe]  shadow-md border border-blue-400 rounded px-10 md:px-20 pt-6 pb-8 mb-4 w-full font-[Almarai]">
        <div className='flex flex-col md:flex-row justify-between items-center md:gap-20'>
        <div className="mb-4 w-full">
        <label className="block text-[#3C4959]  mb-2" htmlFor="account-name">
          {t("form.name")}
        </label>
        <input
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="account-name"
          type="email"
          placeholder={t("form.enter_name")}
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
          ) : null}
        </div>

      <div className="mb-4 w-full">
        <label className="block text-[#3C4959] mb-2" htmlFor="family-name">
          {t("form.family_name")}
        </label>
        <input
          className="shadow appearance-none border rounded w-full  p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="family-name"
          type="text"
          placeholder={t("form.enter_family")}
          {...formik.getFieldProps("familyName")}
        />
        {formik.touched.familyName && formik.errors.familyName ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.familyName}</div>
          ) : null}
      </div>
        </div>
          
        <div className='flex flex-col md:flex-row justify-between items-center md:gap-20'>
          <div className="mb-4 w-full">
            <label className="block text-[#3C4959] mb-2" htmlFor="email">
              {t("form.email")}
            </label>
            <input
              className="shadow appearance-none border rounded w-full  p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder={t("form.enter_email")}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              ) : null}
          </div>
    
          <div className="mb-4 w-full">
            <label className="block text-[#3C4959] mb-2" htmlFor="phone">
                {t("form.phone")}
            </label>
            <input
              className="shadow appearance-none border rounded w-full  p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="+1000000000"
              {...formik.getFieldProps("phone")}
            />
            {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
              ) : null}
          </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center md:gap-20'>
          <div className="mb-4 w-full">
            <label className="block text-[#3C4959] mb-2" htmlFor="duration">
            {t("form.Ad_duration")}
            </label>
            <select
              className="shadow  border rounded w-full  p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="duration"
              type="text"
              placeholder={t("form.select")}
              {...formik.getFieldProps("duration")}
            >
            <option value="" label={t("form.select")} />
            <option value="duration1">duration1</option>
            <option value="duration2">duration2</option>
            <option value="duration3">duration3</option>
            </select>
            {formik.touched.duration && formik.errors.duration ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.duration}</div>
              ) : null}
          </div>
          <div className="mb-4 w-full">
            <label className="block text-[#3C4959] mb-2" htmlFor="price">
            {t("form.Ad_price")}
            </label>
            <select
              className="shadow  border rounded w-full  p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
              placeholder={t("form.select")}
              {...formik.getFieldProps("price")}
            >
            <option value="" label={t("form.select")} />
            <option value="price1">price1</option>
            <option value="price2">price2</option>
            <option value="price3">price3</option>
            
            </select>
            {formik.touched.price && formik.errors.price ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.price}</div>
              ) : null}
          </div>
          </div>
          <div className="mb-4 w-full">
            <label className="block text-[#3C4959] mb-2" htmlFor="Message">
            {t("form.Msg")}
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full h-[282px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Message"
              type="text"
              placeholder={t("form.enter_Msg")}
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
              ) : null}
          </div>
    
          <div className="flex items-center justify-center">
            <MainButton 
            text={t("form.send")}
             type="dark"
              size="medium"
              onClick={formik.handleSubmit}
            />

          </div>
        </form>
      );
}

export default AdForm
