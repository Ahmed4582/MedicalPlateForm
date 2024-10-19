import Title from "../title"
import {t} from "i18next";
import DocImg from "../../assets/doctorExample.png";
import { GeneralTextWithImage } from "../TextWithImage/TextWithImage";
import { Button } from "@headlessui/react";
import MainButton from "../button/MainButton";
const Doctors = [
    {
        id:1,
        name : " دكتور محمد ",
        Specialization : "مختص في الخدمة العامة والتجميلية",
        details : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من  النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص",
        contact : "bla bla",
        docImg : DocImg

    },
    {
        id:2,
        name : "دكتور محمد ",
        Specialization : "مختص في الخدمة العامة والتجميلية",
        details : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من  النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص",
        contact : "bla bla",
        docImg : DocImg

    },
    {
        id:3,
        name : "دكتور محمد ",
        Specialization : "مختص في الخدمة العامة والتجميلية",
        details : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من  النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص",
        contact : "bla bla",
        docImg : DocImg

    },
]
function SpecializedDoctors() {
    const storedLanguage = JSON.parse(localStorage.getItem("lang")) || "en";
  return (
    <div className="SpecializedDoctors lg:px-32 my-16">
      <Title mainTitle={
      t("about.know_specialists")}
       subTitle={t("about.best_quality")}
      StyleText={"text-center "}
      StyleHr={"justify-center"}
      sizeHr={"w-[250px]"}
      />
        <div className="">
        {Doctors.map((doc =>
         <GeneralTextWithImage key={doc.id} className="border-b" imageSrc={doc.docImg}>
            <div className="font-[Almarai] md:mt-7">
                <h1 className="text-[#011632] text-2xl font-semibold mb-5 text-center md:text-start"> {doc.name} <span className="text-base font-normal">({doc.Specialization})</span></h1>
                <p className="text-[#3C4959] mb-4 lg:mb-9 text-sm lg:text-lg font-normal leading-8 text-center md:text-start">{doc.details}</p>
                <div className="text-center md:text-start">
                <MainButton text={t("buttons.contact")}/>
                </div>
            </div>
         </GeneralTextWithImage>))}
        </div>
    </div>
  )
}

export default SpecializedDoctors
