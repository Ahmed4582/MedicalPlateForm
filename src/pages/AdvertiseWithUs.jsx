import AdForm from "../components/form/AdForm";
import Title from "../components/title";
import { useTranslation } from "react-i18next";

export default function AdvertiseWithUs() {
  const { t } = useTranslation();

  return (
    <>
  
      <div className="Advertise_with_us py-10 pb-20">
        <div className="container mx-auto max-w-[90rem] px-6 sm:px-5 lg:px-20">
          <Title
            mainTitle={t("advertiseWithUs")}
            subTitle={t("advertiseWithUsSubTitle")}
            StyleText={"text-center"}
            StyleHr={"justify-center"}
            showHr={true}
            sizeHr="w-[200px]"
          />
          <AdForm />
        </div>
      </div>
    </>
  );
}
