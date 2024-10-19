
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MainButton = ({ text, buttonClass, to, type, size, isShadow, onClick }) => {
  // Define the base style for the button
  const baseStyle = "rounded-lg transition-colors duration-500 font-[Almarai]";

  // Define styles based on type
  const typeStyle =
    type === "dark"
      ? "bg-blue-600 text-white"
      : "bg-white text-slate-950 border border-slate-200 hover:bg-blue-500 hover:text-white hover:border-0";

  // Define styles based on size
  const sizeStyle =
    size === "small"
      ? "px-4 py-2 text-sm"
      : size === "medium"
        ? "px-2 md:px-6 py-3 text-sm md:text-base"
        : "px-8 py-4 text-lg"; // big

  // Define shadow style
  const shadowStyle = isShadow ? "shadow-md hover:shadow-lg hover:shadow-blue-500/50" : "";
  if (!to) return (
    <button
      type="submit"
      className={` ${buttonClass} ${baseStyle} ${typeStyle} ${sizeStyle} ${shadowStyle} `}
      onClick={onClick}
    >
      {text}
    </button>
  )
  return (
    <Link
      to={to}
      className={` ${buttonClass} ${baseStyle} ${typeStyle} ${sizeStyle} ${shadowStyle} `}
    >
      {text}
    </Link>
  );
};

// Define prop types
MainButton.propTypes = {
  text: PropTypes.string.isRequired,
  buttonClass: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf(["light", "dark"]),
  size: PropTypes.oneOf(["small", "medium", "big"]),
  isShadow: PropTypes.bool,
};

// Define default props
MainButton.defaultProps = {
  buttonClass: "",
  type: "dark",
  size: "medium",
  isShadow: false,
};

export default MainButton;
