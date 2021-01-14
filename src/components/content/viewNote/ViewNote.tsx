import React from 'react'
import {NoteType} from '../../../redux/notes/types';

type PropsType = {
  title: string
  body: string
}

const ViewNote: React.FC<PropsType> = (props) => {
  return (
    <div>
      <p><b>{props.title}</b></p>
      {props.body}
    </div>
  )
}

export default ViewNote