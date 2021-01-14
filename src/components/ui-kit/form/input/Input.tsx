import React from "react";
import {FieldProps} from "formik";
// import s from "./input.module.css";

type CustomInputType = {
  type?: string
  // placeholder?: string
  // value?: string
}

const Input: React.FC<FieldProps & CustomInputType> = ({field, form, type, ...props}) => {
  return (
    <input className={'input'} type={type} {...field} {...props}/>
  )
}

export default Input