/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function Title({
  mainTitle,
  subTitle,
  StyleText,
  StyleHr,
  showHr = true,
  sizeHr,
  StyleH1,
}) {
  return (
    <>
      <div className={`title text-center ${StyleText} py-6`}>
        <h1
          className={`text-center md:text-[45px] ${StyleH1} font-[title] font-[500] lg:text-[50px]`}
        >
          {mainTitle}{" "}
        </h1>
        <div className={`flex justify-center ${StyleHr} `}>
          {showHr && (
            <hr className={`h-[2px] bg-[#25B4F8] ${sizeHr} text-center`} />
          )}
        </div>

        <p className="md:text-text-[20px] mt-4 font-[body] font-normal sm:text-[19px] lg:text-[24px]">
          {" "}
          {subTitle}{" "}
        </p>
      </div>
    </>
  );
}
