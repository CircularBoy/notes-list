import React from "react";
import {FieldProps} from "formik";
// import s from "./textarea.module.css";

type CustomTextareaType = {
}

const Textarea : React.FC<FieldProps & CustomTextareaType> = ({field, form,  ...props}) => {
  return (
    <textarea className={'textarea'} {...field} {...props}/>
  )
}

export default Textarea