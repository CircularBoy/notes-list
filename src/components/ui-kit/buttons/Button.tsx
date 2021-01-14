import React from "react";
import s from "./buttons.module.css";

type ButtonType = {
  variant: 'primary' | 'secondary'
  text: string
}

const Button : React.FC<ButtonType>= ({variant, text}) => {
  return (
    <button className={`${s.button} ${s[variant]}`}>
      {text}
    </button>
  )
}

export default Button