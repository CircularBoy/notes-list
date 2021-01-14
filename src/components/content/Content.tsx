import React from "react";
import {Route, Switch} from "react-router-dom";
import CreateNoteContainer from "./createView/CreateNoteContainer";
import ViewNoteContainer from "./viewNote/ViewNoteContainer";
import EditNote from "./editView/EditNote";

const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/edit/:noteId">
          <EditNote/>
        </Route>
        <Route path="/note/:noteId">
          <ViewNoteContainer/>
        </Route>
        <Route path="/">
          <CreateNoteContainer/>
        </Route>
      </Switch>
    </div>
  )
}

export default Content