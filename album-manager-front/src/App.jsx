import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import AlbumInfos from "./views/AlbumInfos";
import AddAlbum from "./views/AddAlbum";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/album" component={Home} />
          <Route path="/album/:id" component={AlbumInfos} />
          <Route path="/addalbum" component={AddAlbum} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
