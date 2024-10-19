import PropTypes from "prop-types";

export const TextParagraph = ({
  title,
  p,
  classText,
  classTitle,
  classP,
  classSpan,
}) => {
  return (
    <>
      <div className={classText}>
        <h2 className={` ${classTitle}`}>
          {title}
          <span className={classSpan}></span>
        </h2>
        <p className={classP}>{p}</p>
      </div>
    </>
  );
};

TextParagraph.propTypes = {
  title: PropTypes.string,
  p: PropTypes.string,
  classText: PropTypes.string,
  classTitle: PropTypes.string,
  classSpan: PropTypes.string,
  classP: PropTypes.string,
};

export default TextParagraph;
