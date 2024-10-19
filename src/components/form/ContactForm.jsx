import MainButton from '../button/MainButton';
import { useFormik } from "formik";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {t} from "i18next";
import * as Yup from "yup";
function ContactForm() {
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
          date: Yup.date().required("Date is required"),
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
          date: new Date(),
          message: "",
        },
        validationSchema,
        onSubmit: (values) => {
          console.log("Form data", values);
          // Handle form submission, e.g., send data to API
        },
      });
  return (
    <form onSubmit={formik.handleSubmit} className="bg-[#f1fafe]  shadow-md border border-blue-400 rounded px-10 md:px-14 pt-6 pb-24 mb-4 w-full font-[Almarai]">
    <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-10'>
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
      <div className="mb-4 w-full">
        <label className="block text-[#3C4959] mb-2" htmlFor="date">
          {t("form.select_date")}
        </label>
        <DatePicker

          selected={formik.values.date}
          onChange={(date) => formik.setFieldValue("date", date)}
          className="shadow border rounded w-[100%] p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholderText="Select a date"
          dateFormat="dd/MM/yyyy"
        />
        {formik.touched.date && formik.errors.date ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.date}</div>
        ) : null}
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
  )
}

export default ContactForm
