import { ChangeEvent } from "react";

import "./input.css";

interface InputProps {
  label: string;
  inputName: string;
  inputType?: string;
  handleChange: (e: ChangeEvent<any>) => void;
  handleBlur: (e: ChangeEvent<any>) => void;
  value: string | number;
  placeholder?: string;
  errorMsg?: string;
}

const Input = ({
  label,
  inputName,
  inputType = "text",
  handleChange,
  handleBlur,
  value,
  placeholder = "",
  errorMsg = "",
}: InputProps) => {
  return (
    <div className="field-wrapper">
      <label htmlFor={inputName}>{label}</label>
      <input
        className="field"
        type={inputType}
        name={inputName}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        placeholder={placeholder}
      />
      <p className="field-error-message">{errorMsg}</p>
    </div>
  );
};

export default Input;
