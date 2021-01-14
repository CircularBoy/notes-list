import React from "react";
import NotesListContainer from "./notesList/NotesListContainer";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <NotesListContainer />
    </div>
  )
}

export default Sidebar