import {
  CREATENOTE,
  DELETENOTE,
  EDITNOTE,
  ActionTypes,
  NotesType,
  CreateNote,
  EditNote,
  DeleteNote,
  NoteType, NoteWithoutIdType
} from "./types";

const initialState: NotesType = {
  notes: [
    {
      id: 1,
      title: 'Fist note',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus enim. Suspendisse sed metus lectus. Praesent rutrum turpis in.'
    },
    {
      id: 2,
      title: 'Second note',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel scelerisque elit. Nullam aliquet vestibulum accumsan. Nulla eleifend bibendum mi, sed eleifend tortor. Nullam ut malesuada.'
    },
    {
      id: 3,
      title: 'Third note',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dapibus enim. Suspendisse sed metus lectus. Praesent rutrum turpis in.'
    },
  ]
};


function notesReducer(state: NotesType = initialState, action: ActionTypes): NotesType {
  switch (action.type) {
    case CREATENOTE:
      const lastId = state.notes[state.notes.length-1].id
      let newNote: NoteType = {
        ...action.newNote,
        id: lastId + 1,
      }
      return {
        notes: [...state.notes, newNote]
      }
    case EDITNOTE:
      return {
        notes: state.notes.map(note => {
          console.log(typeof note.id)
          console.log(typeof action.id)
          if (note.id === action.id) {
            console.log('common')
            console.log({...note, ...action.editNote})
            return {...note, ...action.editNote}
          }
          return {...note}
        })
      }
    case DELETENOTE:
      console.log('del')
      return {
        notes: state.notes.filter(note => note.id !== action.id)
      }
    default:
      return state
  }
}

export const createNote = (newNote: NoteWithoutIdType): CreateNote => ({type: CREATENOTE, newNote})
export const editNote = (id: number, editNote: NoteWithoutIdType): EditNote => ({type: EDITNOTE, editNote, id})
export const deleteNote = (id: number): DeleteNote => ({type: DELETENOTE, id})

export default notesReducer;