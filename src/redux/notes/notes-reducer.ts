import {
  CREATENOTE,
  DELETENOTE,
  EDITNOTE,
  ActionTypes,
  NotesType,
  CreateNote,
  EditNote,
  DeleteNote,
  NoteType
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
      return {
        notes: [...state.notes, action.newNote]
      }
    case EDITNOTE:
      return {
        notes: state.notes.map(note => {
          if (note.id === action.id) {
            return {...action.editNote}
          }
          return {...note}
        })
      }
    case DELETENOTE:
      return {
        notes: state.notes.filter(note => note.id !== action.id)
      }
    default:
      return state
  }
}

export const createNote = (newNote: NoteType): CreateNote => ({type: CREATENOTE, newNote})
export const editNote = (id: number, editNote: NoteType): EditNote => ({type: EDITNOTE, editNote, id})
export const deleteNote = (id: number): DeleteNote => ({type: DELETENOTE, id})

export default notesReducer;