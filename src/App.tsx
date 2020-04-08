import './App.css';

import React, { Component } from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { Page } from './components/Modul';
import { lelki_modulok } from './data';

class App extends Component<{}, {}> {
  render() {
    return (
      <div className="App">
        {/* <Banner /> */}

        <div className="AppContent">
          <Router basename={`/`}>
            <div className="Banner">
              <div className="BannerContent">
                <img src="./img/nyakk_zold2.png" alt="nyakkendő"></img>
              </div>
            </div>
            <Switch>
              {lelki_modulok.map((lelki_modul, i) => (
                <Route path={`/${lelki_modul.id}`}>
                  <Page title={lelki_modul.title} description={lelki_modul.description} sound={lelki_modul.sound} />
                </Route>
              ))}

              <Route path="/lista">
                <p className="PageHeader">Téli tábor 2020</p>
                {lelki_modulok.map((lelki_modul, i) => (
                  <p className="description-center">
                    <Link to={`/${lelki_modul.id}`}>{lelki_modul.title}</Link>
                  </p>
                ))}
              </Route>

              <Route path="/">
                <p className="PageHeader">Téli tábor 2020</p>
              </Route>
            </Switch>
            <div className="footer">
              <p>
                Téli{' '}
                <Link to="/lista" className="lista">
                  tábor
                </Link>{' '}
                - 2020. február 13-16.
              </p>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
