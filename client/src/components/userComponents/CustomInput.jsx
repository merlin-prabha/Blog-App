import React from "react";

const CustomInput = ({ type, placeholder, value, onChange }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border-2 p-3 mt-2 rounded-lg w-full"
      />
    </div>
  );
};

export default CustomInput;
