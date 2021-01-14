import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {NoteType} from '../../../redux/notes/types';
import {Redirect, withRouter} from 'react-router-dom';
import ViewNote from "./ViewNote";

type PropsType = {
  notes: Array<NoteType>
}

type RouterType = {
  match: {
    params: {
      noteId: number
    }
  }
}

const ViewNoteContainer: React.FC<PropsType & RouterType> = (props) => {
  const currentNoteId = props.match.params.noteId ;
  const currentNote = props.notes.filter(n => {
    return n.id === +currentNoteId
  })[0];
  if(!currentNote) {
    return <Redirect to={'/'}/>
  }
  return <ViewNote
    title={currentNote.title}
    body={currentNote.body}
  />
}

const mapStateToProps = (state: AppStateType) => {
  return {
    notes: state.notes.notes
  }
}


export default withRouter(connect(mapStateToProps)(ViewNoteContainer));
