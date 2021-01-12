import React from "react";
import {NoteType } from "../../redux/notes/types";
import s from "./noteList.module.css";
import NoteItem from "./noteItem/NoteItem";

type NotesListType = {
  createNote: void
  editNote: void
  deleteNote: void
  notes: NoteType[]
}
const NotesList = (props: NotesListType) => {
  return (
    <div>
      {props.notes.map((note: NoteType) => {
        return <NoteItem key={note.id} {...note}/>
      })}
      <hr/>

      <button className={s.newTaskButton}>Create new task</button>
    </div>
  )
}


export default NotesList