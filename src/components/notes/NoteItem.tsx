import React from "react";
import { NoteType } from "../../redux/notes/types";

const NoteItem = (props: NoteType) => {
  return (
    <div>
      {props.title}
    </div>
  )
}


export default NoteItem
