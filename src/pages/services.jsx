import { Link } from "react-router-dom";
import { ServiceCard } from "../components/card/Card";
import Title from "../components/title"
import { t } from "i18next";

const services = [{
    id:1,
    icon : "sss",
    name : "اسم الخدمة",
    detais : "هذا نص يمكن ان يستبدل في هذه المساحة هذا نص يمكن ان يستبدل في هذه المساحة هذا نص يمكن ان يستبدل",


},
{
    id:2,
    icon : "sss",
    name : "اسم الخدمة",
    detais : "هذا نص يمكن ان يستبدل في هذه المساحة هذا نص يمكن ان يستبدل في هذه المساحة هذا نص يمكن ان يستبدل",


},
{
    id:3,
    icon : "sss",
    name : "اسم الخدمة",
    detais : "هذا نص يمكن ان يستبدل في هذه المساحة هذا نص يمكن ان يستبدل في هذه المساحة هذا نص يمكن ان يستبدل",


},
{
    id:4,
    icon : "sss",
    name : "اسم الخدمة",
    detais : "هذا نص يمكن ان يستبدل في هذه المساحة هذا نص يمكن ان يستبدل في هذه المساحة هذا نص يمكن ان يستبدل",


},
{
    id:5,
    icon : "sss",
    name : "اسم الخدمة",
    detais : "هذا نص يمكن ان يستبدل في هذه المساحة هذا نص يمكن ان يستبدل في هذه المساحة هذا نص يمكن ان يستبدل",


},
{
    id:6,
    icon : "sss",
    name : "اسم الخدمة",
    detais : "هذا نص يمكن ان يستبدل في هذه المساحة هذا نص يمكن ان يستبدل في هذه المساحة هذا نص يمكن ان يستبدل",


},

]
function Services() {
    //icon, title, p, btnText, classCard
  return (
    <div className="services bg-gradient-to-b from-[#E6F6FE] to-[#EBF8FE] py-10 pb-28">
    <Title 
    mainTitle={t("Services")}
    StyleText={"text-center "}
    StyleHr={"justify-center"}
    sizeHr={"w-[200px]"} />
    <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service =>
        <Link to={`/services/${service.id}`} key={service.id}>
         <ServiceCard
        title={service.name}
        p={service.detais} btnText={t("Show More")}
        classCard="bg-white"
         /></Link>))}
    </div>
    </div>
</div>
  )
}

export default Services
