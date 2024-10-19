import { t } from "i18next";
import Title from "../components/title";
import OurMission from "../components/aboutSections/OurMission";
import SpecializedDoctors from "../components/aboutSections/SpecializedDoctors";
import Technologies from "../components/aboutSections/Technologies";
export default function About() {
    return (
        <div className="about pb-28">
                <Title  
                mainTitle={t("about.about")}
                StyleText={"text-center "}
                StyleHr={"justify-center"}
                sizeHr={"w-[200px]"}  />
                <OurMission/>
                <SpecializedDoctors/>
                <Technologies/>
        </div>
    )
}