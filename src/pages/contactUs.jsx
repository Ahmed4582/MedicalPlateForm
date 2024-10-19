
import ContactForm from "../components/form/ContactForm";
import MapContact from "../components/mapContact/MapContact";
import Title from "../components/title";
import { CiClock2 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { t } from "i18next";
export default function ContactUs() {
  
     const storedLanguage = JSON.parse(localStorage.getItem("lang")) || "en";
 
     console.log("ccccccccccc: ", storedLanguage);
     
 
    console.log(storedLanguage === "en" ? "ltr" : "rtl");
    
    

    return (
        <>
        <div className="ContactUs py-10">
        <div className="container mx-auto max-w-[90rem] px-6 sm:px-5 lg:px-7">

      <Title mainTitle={t("Contact Us")} subTitle={t("Don't hesitate and contact us")} showHr={true} sizeHr="w-[200px]" />
            
            <div className="flex flex-col md:grid md:grid-cols-12">
                <div className="col-span-12 md:col-span-6 mt-20 mx-2">
                   <div className="col-span-12 md:col-span-6 border-2  border-[#25B4F8] shadow-2xl">
                   <MapContact />
                   </div>
                   <div className="col-span-12 md:col-span-6 " dir={storedLanguage === "en" ? "ltr" : "rtl"}>
                   <div className="shadow-xl flex items-center justify-end p-8 mt-5">
                    <div className="text text-end mx-5  ">
                    <h5 className="text-[20px] font-bold ">{t("Working hours")}</h5>
                    <p>{t("Monday - Saturday (9:00am - 5pm) Sunday (Closed)")}</p>
                    </div>
                    <div className="icon">
                   <CiClock2 className="w-14 h-14 bg-[#1376F8] rounded-full p-2 text-white "/>
                    </div>
                   </div>
                   <div className="shadow-xl flex items-center justify-end p-8 mt-5">
                    <div className="text text-end mx-5 ">
                    <h5 className="text-[20px] font-bold ">{t("Email")}</h5>
                    <p>www.tebbi00@gmail.com</p>
                    </div>
                    <div className="icon">
                   <MdEmail className="w-14 h-14 bg-[#1376F8] rounded-full p-2 text-white "/>
                    </div>
                   </div>
                   <div className="shadow-xl flex items-center justify-end p-8 mt-5">
                    <div className="text text-end mx-5  ">
                    <h5 className="text-[20px] font-bold ">{t("Phone")}</h5>
                    <p>01012000000</p>
                    </div>
                    <div className="icon">
                   <FaPhoneAlt className="w-14 h-14 bg-[#1376F8] rounded-full p-2 text-white "/>
                    </div>
                   </div>
                   <div className="shadow-xl flex items-center justify-end p-8 mt-5">
                    <div className="text text-end mx-5  ">
                    <h5 className="text-[20px] font-bold ">{t("live chat")}</h5>
                   <p>+201022322222</p>
                    </div>
                    <div className="icon">
                   <IoIosChatbubbles className="w-14 h-14 bg-[#1376F8] rounded-full p-2 text-white "/>
                    </div>
                   </div>
                   </div>
                </div>
            <div className="col-span-12 md:col-span-6 flex flex-col mt-20">
                <ContactForm />

            </div>
            </div>
             </div>
        </div>
        </>
    );
  }
  