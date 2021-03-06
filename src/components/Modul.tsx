import 'react-h5-audio-player/lib/styles.css';
import './Modul.css';

import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';

type PageProps = {
  title: string;
  description: string[];
  sound: string;
};

export class Page extends Component<PageProps, {}> {
  render() {
    return (
      <div>
        {/* <div className="Banner">
          <div className="BannerContent">
            <img src="./img/nyakk_zold2.png" alt="asd"></img>
          </div>
        </div> */}

        <h1 className="PageHeader"> {this.props.title} </h1>

        <br />

        <AudioPlayer
          className="player"
          // autoPlay
          src={`./sound/${this.props.sound}`}
        />

        <div className="description">
          {this.props.description.map(line => {
            return <p>{line}</p>;
          })}
        </div>

        {/* <div className="footer">
          <p>Téli tábor - 2020. február 13-16.</p>
        </div> */}
      </div>
    );
  }
}
