import PropTypes from "prop-types";
import more from "../../assets/svg/serviesIcon.svg";
import { Link } from "react-router-dom";

export const ServiceCard = ({ icon, title, p, btnText, classCard }) => {
  return (
    <div className={`${classCard}`}>
      <div className="hover:shadow-xlcard bg-base-100 w-full rounded-lg border p-10 shadow-xl transition-all duration-300 hover:border-[#25B4F8]">
        <figure className="flex justify-center py-3">
          <img src={icon} alt="icon" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title py-3 font-[Almarai] text-2xl font-bold">
            {title}
          </h2>
          <p className="leading-5font-normal font-[Almarai] text-[15px]">{p}</p>
          <div className="card-actions flex items-center justify-center py-3">
            <button className="btn btn-primary mx-2 font-[Almarai] text-lg font-normal">
              {btnText}
            </button>
            <img src={more} alt="" className="w-[15px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  p: PropTypes.string,
  btnText: PropTypes.string,
  classCard: PropTypes.string,
};

// doctorsCard
export const DoctorsCard = ({ iconDoctor, job, nameDoctor }) => {
  return (
    <div
      className={`relative h-[340px] w-full overflow-hidden rounded-2xl bg-white bg-bgDoctor bg-cover bg-no-repeat shadow-lg`}
    >
      <div className="flex justify-start px-6 pb-2 pt-4">
        <img src={iconDoctor} alt="LinkedIn" className="top-0 h-6 w-6" />
      </div>
      <div className="absolute bottom-[20px] w-full">
        <div className="rounded-lg bg-gradient-to-r from-gray-400 via-transparent to-blue-400 p-4 text-start text-white">
          <div className="mb-2 text-xl font-bold"> {nameDoctor}</div>
          <p className="text-base">{job}</p>
        </div>
      </div>
    </div>
  );
};

DoctorsCard.propTypes = {
  imgDoctor: PropTypes.string,
  iconDoctor: PropTypes.string,
  nameDoctor: PropTypes.string,
  job: PropTypes.string,
};

// news Card
export const NewsCard = ({
  img,
  title,
  p,
  btnText,
  classCard,
  name,
  cardBody,
  MainCard,
}) => {
  return (
    <div className={MainCard}>
      <div
        className={`card w-full rounded-lg border bg-sky-100 p-10 shadow-xl transition-all duration-300 hover:border-[#25B4F8] hover:shadow-xl ${classCard}`}
      >
        <Link to={"/newsBlog/1"} className="text-black">
          <figure className="my-3 flex justify-center">
            <img src={img} alt="icon" />
          </figure>
        </Link>

        <div className={`card-body ${cardBody} `}>
          <Link to={"/newsBlog/1"} className="text-black">
            <button className="btn btn-sm my-2 rounded-lg bg-black px-3 text-white">
              {btnText}
            </button>
          </Link>
          <Link to={"/newsBlog/1"} className="text-black">
            <h2 className="card-title py-2 font-[Almarai] text-lg font-semibold">
              {title}
            </h2>
          </Link>

          <p className="py-2 font-[Almarai] text-sm font-normal"> {p}</p>
          <p className="font-[Almarai] text-sm font-normal"> {name}</p>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  p: PropTypes.string,
  btnText: PropTypes.string,
  classCard: PropTypes.string,
  cardBody: PropTypes.string,
  MainCard: PropTypes.string,
};

// card Review
export const ReviewCard = ({ iconReview, imgReview, p, classCard, name }) => {
  return (
    <div className={`${classCard}`}>
      <div className="card h-full w-full rounded-lg border p-[35px] shadow-xl transition-all duration-300 hover:border-[#25B4F8] hover:shadow-xl">
        <div className="flex items-center pb-5">
          <div>
            <figure>
              <img src={imgReview} alt="icon" />
            </figure>
          </div>
          <div className="px-3">
            <p className="font-[General Sans] text-lg font-medium">{name}</p>
            <img src={iconReview} alt="" />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <p className="card-title font-[Almarai] text-sm font-normal">{p}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  imgReview: PropTypes.string,
  name: PropTypes.string,
  iconReview: PropTypes.string,
  p: PropTypes.string,
  classCard: PropTypes.string,
};

export default { ServiceCard, DoctorsCard, ReviewCard, NewsCard };
// export { ServiceCard, DoctorsCard, newsCard };
