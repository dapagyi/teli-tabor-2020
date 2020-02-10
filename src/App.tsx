import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Page } from './components/Modul';

type lelki_modul = {
  id: string;
  title: string;
  description: string[];
  sound: string;
};

const lelki_modulok: lelki_modul[] = [
  {
    id: 'az-úr-a-te-őriződ',
    title: 'Az Úr a te őriződ',
    description: [
      'Zarándokének.',
      'Tekintetem a hegyekre emelem: Honnan jön segítségem?',
      'Segítségem az ÚRtól jön, aki az eget és a földet alkotta.',
      'Nem engedi, hogy lábad megtántorodjék, nem szunnyad őriződ.',
      'Bizony nem szunnyad, nem alszik Izráel őrizője!',
      'Az ÚR a te őriződ, az ÚR a te oltalmad jobb kezed felől.',
      'Nem árt neked nappal a nap, sem éjjel a hold.',
      'Az ÚR megőriz téged minden bajtól, megőrzi életedet.',
      'Megőriz az ÚR jártodban-keltedben, most és mindenkor.',
    ],
    sound: 'Az_Úr_a_te_őriződ.m4a',
  },
];

class App extends Component<{}, {}> {
  render() {
    return (
      <div className="App">
        {/* <Banner /> */}

        <div className="AppContent">
          {/* <h1>Téli tábor 2020</h1> */}
          <Router basename={process.env.PUBLIC_URL}>
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
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
