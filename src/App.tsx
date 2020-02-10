import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';

import { Page } from './components/Modul';
import { lelki_modulok } from './data';

class App extends Component<{}, {}> {
  render() {
    return (
      <div className="App">
        {/* <Banner /> */}

        <div className="AppContent">
          {/* <h1>Téli tábor 2020</h1> */}
          <HashRouter basename="/">
            <div>
              <Switch>
                {/* <Route path="/users">
                  <Page title="Users" />
                </Route> */}
                {lelki_modulok.map(lelki_modul => {
                  return (
                    <>
                      <Route path={`/${lelki_modul.id}`}>
                        <Page
                          title={lelki_modul.title}
                          description={lelki_modul.description}
                          sound={lelki_modul.sound}
                        />
                      </Route>
                    </>
                  );
                })}
                {/* <Route path="/">
                  <Page title="Mit jelent számodra a Barátság?" />
                </Route> */}
              </Switch>
            </div>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;
