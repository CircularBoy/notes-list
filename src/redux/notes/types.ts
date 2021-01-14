export const CREATENOTE = 'CREATE_NOTE'
export const EDITNOTE = 'EDIT_NOTE'
export const DELETENOTE = 'DELETE_NOTE'

export type CreateNote = {type: typeof CREATENOTE, newNote: NoteWithoutIdType}
export type EditNote = {type: typeof EDITNOTE, editNote: NoteWithoutIdType, id: number}
export type DeleteNote = {type: typeof DELETENOTE, id: number}

export type ActionTypes = CreateNote | EditNote | DeleteNote

export type NoteType = {
  id: number
  title: string
  body: string
}
export type NoteWithoutIdType = {
  title: string
  body: string
}

export type NotesType = {
  notes: NoteType[]
}

