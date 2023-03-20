import React from "react";

const CustomButton = ({ title, setCategory, category }) => {
  const handleClick = () => {
    setCategory(title);
  };

  return (
    <button
      type="button"
      className={`bloc text-h3 hover:text-white transition-[0.2s] capitalize ${
        category === title ? "text-white" : "text-secondaryText"
      }`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
