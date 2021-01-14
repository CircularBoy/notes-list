import React from "react";
import {NotesType, NoteType} from "../../../redux/notes/types";
import s from "./noteList.module.css";
import NoteItem from "./noteItem/NoteItem";
import {Link} from "react-router-dom";
import Button from "../../ui-kit/buttons/Button";


type PropsType = {
  notes: Array<NoteType>
  deleteNote: (id: number) => {}
}


const NotesList: React.FC<PropsType> = (props) => {
  return (
    <div>
      {props.notes.map((note: NoteType) => {
        return <NoteItem key={note.id} {...note} deleteNote={props.deleteNote}/>
      })}
      <hr/>

      <Link to="/" className={s.newTaskButton}><Button variant={'primary'} text={'Create new note'}/></Link>
    </div>
  )
}


export default NotesList