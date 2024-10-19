import { Link, useParams } from "react-router-dom"
import {t} from "i18next";
import serviceImg from "../assets/serviceDetailsImg.png";
import { GeneralTextWithImage } from "../components/TextWithImage/TextWithImage";
import socialImg from "../assets/socialImg.png";
import TextParagraph from "../components/textParagraph/TextParagraph";
import { useEffect } from "react";
function ServiceDetails() {
    const {id} = useParams();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="ServiceDetails pb-28 font-[Almarai]">
    <div className="container">
    <nav className="text-gray-500 py-5 px-2 my-4">
    <ol className="flex space-x-2">
      <li>
        <Link to="/" className="hover:text-blue-500">
          {t("home")}
        </Link>
      </li>
      <li>
        <span className="mx-2">{`>`}</span>
      </li>
      <li>
        <Link to="/services" className="hover:text-blue-500">
          {t("Services")}
        </Link>
      </li>
      <li>
        <span className="mx-2">{`>`}</span>
      </li>
      <li>
        <span className="text-blue-500">اسم الخدمة</span>
      </li>
    </ol>
  </nav>
            <GeneralTextWithImage imageSrc={serviceImg} isImageLeft={true} className="bg-white rounded-lg border mb-10" >
                <h1 className="text-center md:text-start text-3xl md:text-5xl lg:text-6xl md:mt-20 ">ادخل اسم الخدمة التي يتم عرضها هنا</h1>
            </GeneralTextWithImage>
    <div className="container">
        <div className="mb-5">
            <h2 className="font-[Almarai] text-3xl mb-5 font-normal">هذا نص يمكن ان يستبدل</h2>
            <div className="font-[inter] text-sm font-normal text-[#7A7D9C]">
                <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
                <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
                <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
                <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
            </div>
        </div>
    <div className="mb-5">
        <h2 className="font-[Almarai] text-3xl mb-5 font-normal">هذا نص يمكن ان يستبدل</h2>
        <div className="font-[inter] text-sm font-normal text-[#7A7D9C]">
            <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
            <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
            <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
            <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
        </div>
    </div>
        <div className="my-10">
            <img src={socialImg}/>
        </div>

        <div className="mb-5">
        <h2 className="font-[Almarai] text-3xl mb-5 font-normal">هذا نص يمكن ان يستبدل</h2>
        <div className="font-[inter] text-sm font-normal text-[#7A7D9C]">
            <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
            <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
            <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
            <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
        </div>
    </div>

    <div className="mb-5">
        <h2 className="font-[Almarai] text-3xl mb-5 font-normal">هذا نص يمكن ان يستبدل</h2>
        <div className="font-[inter] text-sm font-normal text-[#7A7D9C]">
            <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
            <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
            <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
            <p className="text-2xl"> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربي</p>
        </div>
    </div>

    </div>
            
            
    </div>
    </div>
    
  )
}

export default ServiceDetails
