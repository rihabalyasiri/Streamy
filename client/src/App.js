import React from "react";
import GoogleAuth from "./components/GoogleAuth.js.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StreamAdd from "./components/streams/StreamAdd";
import StreamDelete from "./components/streams/StreamDelete";
import StreamCreate from "./components/streams/StreamCreate";
import StreamList from "./components/streams/StreamList";
import StreamShow from "./components/streams/StreamShow";



//clientID 533151601890-v71cgu2p87f0cfosmutsuauqb48iq87i.apps.googleusercontent.com

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={GoogleAuth} />
          <Route path="/streams/add" component={StreamAdd} />
          <Route path="/streams/create" component={StreamCreate} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/list" component={StreamList} />
          <Route path="/streams/show" component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
