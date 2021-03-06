import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Film from "./components/Film";
import Game from "./components/Game";
import Home from "./Home";
import { DataProvider } from "./components/DataContext";
import DataFilm from "./DataFilm";
import FilmForm from "./components/FilmForm";
import Registrasi from "./Registrasi";
import Login from "./Login";
import DataGame from "./DataGame";
import GameForm from "./components/GameForm";
import GantiPassword from "./GantiPassword";

function App() {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const initiateUser = currentUser ? currentUser : null;
  const [user, setUser] = useState(initiateUser);
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/film/:parameter1"
              render={(props) => <Film {...props} />}
            />
            <Route
              path="/game/:parameter1"
              render={(props) => <Game {...props} />}
            />
            {user === null ? (
              <>
                <Route exact path="/registrasi" component={Registrasi} />
                <Route exact path="/login" component={Login} />
              </>
            ) : (
              <>
                <Route exact path="/gantipassword" component={GantiPassword} />

                <Route exact path="/datafilm" component={DataFilm} />
                <Route exact path="/datagame" component={DataGame} />
                <Route
                  exact
                  path="/datafilm/filmform/:parameter1"
                  render={(props) => <FilmForm {...props} />}
                />
                <Route
                  exact
                  path="/datagame/gameform/:parameter1"
                  render={(props) => <GameForm {...props} />}
                />
              </>
            )}
          </Switch>
          <Footer />
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
