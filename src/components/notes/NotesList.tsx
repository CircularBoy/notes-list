import React from "react";
import {NoteType } from "../../redux/notes/types";
import NoteItem from "./NoteItem";

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
        return <NoteItem {...note}/>
      })}
    </div>
  )
}


export default NotesList