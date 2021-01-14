import React from 'react'
import {Field, Form, Formik} from "formik";
import Button from '../../ui-kit/buttons/Button';
import Input from "../../ui-kit/form/input/Input";
import Textarea from "../../ui-kit/form/textarea/Textarea";
import {connect} from "react-redux";
import {editNote} from "../../../redux/notes/notes-reducer";
import {NoteType, NoteWithoutIdType} from "../../../redux/notes/types";
import {AppStateType} from "../../../redux/store";
import { withRouter } from 'react-router-dom';

type FormValueType = {
  title: string
  body: string
}

type FormType = {
  id: number
  initialValues: FormValueType
  onEditNote: (id: number, editNote: NoteWithoutIdType) => {}
}

const EditNoteForm: React.FC<FormType> = (props) => {
  const editNote = (values:NoteWithoutIdType, actions:any) => {
    props.onEditNote(+props.id,values)
  }

  console.log(props)

  return (
    <Formik initialValues={props.initialValues} onSubmit={editNote} enableReinitialize={true}>
      <Form className={'form'}>
        <Field id="title" name="title" placeholder="Enter title" component={Input}/>
        <Field id="body" name="body" placeholder="Enter body" component={Textarea}/>
        <Button variant={'primary'} text={'Edit note'}/>
      </Form>
    </Formik>
  )
}

type StateType = {
  notes: NoteType[]
}

type DispatchType = {
  editNote: (id: number, editNote: NoteWithoutIdType) => {}
}

type RouterType = {
  match: {
    params: {
      noteId: number
    }
  }
}
const EditNoteContainer: React.FC<StateType & DispatchType & RouterType> = (props) => {
  const noteId: number = props.match.params.noteId;
  const initialValues = props.notes[noteId - 1]
  // const initialValues = props.notes.filter(n => {
  //   console.log(n.id, noteId)
  //   return n.id === +noteId
  // });
  console.log(noteId)
  console.log(initialValues)
  return (
    <div>
      <EditNoteForm id={noteId} initialValues={initialValues} onEditNote={props.editNote}/>
    </div>
  )
}

const mapDispatchToProps = (state: AppStateType) => {
  return {
    notes: state.notes.notes
  }
}

export default withRouter(
  connect<StateType, DispatchType, RouterType, AppStateType>
  (mapDispatchToProps, {editNote})(EditNoteContainer));

