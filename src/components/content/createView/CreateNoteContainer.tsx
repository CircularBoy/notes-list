import React from 'react'
import {Field, Form, Formik} from "formik";
import Button from '../../ui-kit/buttons/Button';
import Input from "../../ui-kit/form/input/Input";
import Textarea from "../../ui-kit/form/textarea/Textarea";
import {connect} from "react-redux";
import {createNote} from "../../../redux/notes/notes-reducer";
import {NoteType, NoteWithoutIdType} from "../../../redux/notes/types";
import {AppStateType} from "../../../redux/store";
import {useHistory, withRouter } from 'react-router-dom';

type FormValueType = {
  title: string
  body: string
}

type FormType = {
  initialValues: FormValueType
  onCreateNote: (newNote: NoteWithoutIdType) => {},
  noteId: number
}

const CreateNoteForm: React.FC<FormType> = (props) => {
  let history = useHistory();
  const addNote = (values:NoteWithoutIdType) => {
    props.onCreateNote(values)
    history.push('/note/'+ props.noteId)
  }

  return (
    <Formik initialValues={props.initialValues} onSubmit={addNote}>
      <Form className={'form'}>
        <Field id="title" name="title" placeholder="Enter title" component={Input}/>
        <Field id="body" name="body" placeholder="Enter body" component={Textarea}/>
        <Button variant={'primary'} text={'Create new note'}/>
      </Form>
    </Formik>
  )
}

type PropsType = {
  notes: Array<NoteType>
}

type DispatchType = {
  createNote: (newNote: NoteWithoutIdType) => {}
}


const CreateNoteContainer: React.FC<PropsType & DispatchType> = ({notes, ...props}) => {
  const initialValues = { title: '', body: ''};
  const currentNoteId = notes[notes.length - 1].id;
  console.log(currentNoteId)
  return (
    <div>
      <CreateNoteForm noteId={currentNoteId} initialValues={initialValues} onCreateNote={props.createNote}/>
    </div>
  )
}

const mapStateToProps = (state: AppStateType) => {
  return {
    notes: state.notes.notes
  }
}

export default connect<PropsType, DispatchType, {} , AppStateType>(mapStateToProps, {createNote})(CreateNoteContainer);
