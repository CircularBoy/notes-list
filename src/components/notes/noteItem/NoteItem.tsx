import React from "react";
import { NoteType } from "../../../redux/notes/types";
import s from "./noteItem.module.css";

const NoteItem = (props: NoteType) => {
  const isActive = false
  return (
    <div className={s.item + (isActive ? ' ' + s.active : '')}>
      {props.title}
      <div className={s.dropButton}>
        <span className={s.dot}/>
        <span className={s.dot}/>
        <span className={s.dot}/>
      </div>
    </div>
  )
}


export default NoteItem
