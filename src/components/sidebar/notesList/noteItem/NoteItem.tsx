import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import s from "./noteItem.module.css";

type PropsType = {
  id: number
  title: string
  body: string
  deleteNote: (id: number) => {}
}


const NoteItem: React.FC<PropsType> = (props) => {
  const [showDrop, setShowDrop] = useState<boolean>(false)

  return (
    <div className={s.linkWrap}
         onMouseLeave={(e) => setShowDrop(false)}
    >
      <NavLink to={"/note/" + props.id} className={s.item} activeClassName={s.active}>
        {props.title}
      </NavLink>
      <div className={s.dropDown}>

        <div onClick={(event) => setShowDrop(!showDrop)} className={s.dropButton}>
          <span className={s.dot}/>
          <span className={s.dot}/>
          <span className={s.dot}/>
        </div>
        {showDrop &&
        <div className={s.dropMenu}>
          <NavLink className={s.button} to={"/edit/"+props.id} onClick={e => setShowDrop(false)}>Edit</NavLink>
          <span className={s.button} onClick={(e) => props.deleteNote(props.id)}>Delete</span>
        </div>
        }
      </div>
    </div>
  )
}


export default NoteItem
