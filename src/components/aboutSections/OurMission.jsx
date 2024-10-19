import { GeneralTextWithImage } from "../TextWithImage/TextWithImage"
import { t } from "i18next";
import ourMissionImg from "../../assets/ourMission.png"
function OurMission() {
  return (
    <GeneralTextWithImage imageSrc={ourMissionImg} altText="our mission" isImageLeft={true}>
            <div className="px-5 mt-8 font-[Almarai]"> 
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-9">{t("about.Our_mission")}</h1>
            <p className="text-[#3C4959] mb-4 lg:mb-9 text-sm lg:text-lg	font-normal leading-8">هذا النص هو مثال لنص يمكن 
            أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث
             يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
             الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح
             لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما
             ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص
             </p>

             <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-9">{t("about.love")}</h3>

             <p className="text-[#3C4959]mb-4 lg:mb-9 text-sm lg:text-lg font-normal leading-8">هذا النص هو مثال لنص يمكن 
            أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث
             يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
             الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح
             لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما
             ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص
             </p>
             </div>
    </GeneralTextWithImage>
  )
}

export default OurMission
