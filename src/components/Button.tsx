import React, { FC } from "react";

interface ButtonProps {
  onClickHandler: () => void; // Update this to match how it's used
  value: string;
  title: string;
}

const Button: FC<ButtonProps> = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
};

export default Button;
