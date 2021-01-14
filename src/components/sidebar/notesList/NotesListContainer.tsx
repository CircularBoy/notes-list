import React from "react";
import { compose } from "redux";
import {connect} from "react-redux";
import NotesList from "./NotesList";
import {NotesType, NoteType} from "../../../redux/notes/types";
import {AppStateType} from "../../../redux/store";
import {deleteNote} from "../../../redux/notes/notes-reducer";

type StateType = {
  notes: Array<NoteType>
}

type DispatchType = {
  deleteNote: (id: number) => {}
}

const NotesListContainer: React.FC<StateType & DispatchType> = (props) => {
  return <NotesList notes={props.notes} deleteNote={props.deleteNote}/>
}

const mapStateToProps = (state: AppStateType):StateType => {
  return {
    notes: state.notes.notes
  }
}

export default compose(
  connect<StateType, DispatchType, {}, AppStateType>(mapStateToProps, {deleteNote}))
(NotesListContainer)