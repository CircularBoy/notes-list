import React from "react";
import { compose } from "redux";
import {connect} from "react-redux";
import {createNote, deleteNote, editNote} from "../../redux/notes/notes-reducer";
import NotesList from "./NotesList";
import {NoteType} from "../../redux/notes/types";

type NotesListType = {
  createNote: void
  editNote: void
  deleteNote: void
  notes: NoteType[]
}

const NotesListContainer = (props: any) => {
  return <NotesList {...props}/>
}


const mapStateToProps = (state: any) => {
  return {
    notes: state.notes.notes
  }
}


export default compose(
  connect(mapStateToProps,
    {createNote, editNote, deleteNote}))
(NotesListContainer)