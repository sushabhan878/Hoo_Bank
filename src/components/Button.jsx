import React from "react";

const Button = ({ className }) => {
  return (
    <button
      type="button"
      className={`px-6 py-4 bg-blue-gradient font-poppins font-bold text-[14px] rounded-[8px] text-primary outline-none ${className}`}
    >
      Get started
    </button>
  );
};

export default Button;
