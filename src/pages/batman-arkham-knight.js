import React from "react";
import Header from "../componnts/header";
import Fotter from "../componnts/footer";
import { useEffect } from 'react';

const BatmanArkhamKnight = () => {
  useEffect(()=>{
    document.title = 'Download Batman Arkham Knight | Web Game';
  },[]);
  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2>Batman Arkham Knight Download</h2>
            <p>
              "Arkham Knight" redirects here. For the DC Comics character partly
              inspired by the video game, see Astrid Arkham.
            </p>
            <div className="img">
              <img src="./img/batman-arkham-knight/batman-ark.jpg" alt="" />
            </div>
          </div>
          <div className="discription">
            <p>
              Batman: Arkham Knight is a 2015 action-adventure game developed by
              Rocksteady Studios and published by Warner Bros. Interactive
              Entertainment. Based on the DC Comics superhero Batman, it is the
              successor to the 2013 video game Batman: Arkham Origins, a direct
              sequel to Batman: Arkham City (2011) and the fourth main
              installment in the Batman: Arkham series. Written by Sefton Hill,
              Ian Ball, and Martin Lancaster, Arkham Knight is inspired by the
              long-running comic book mythos. Set nine months after the events
              of Arkham City, the game's main storyline follows Batman as he
              confronts Scarecrow, who has launched an attack on Gotham City and
              caused a citywide evacuation. Scarecrow, with the help of the
              mysterious Arkham Knight, plots to unite all of Gotham's criminals
              in an attempt to finally destroy Batman.
            </p>
          </div>
          <div className="imgGame1">
            <img
              src="./img/batman-arkham-knight/batman-arkham-knight-2d10fd4d64b942b5a5d3ad40fcc54840.jpg"
              alt=""
            />
          </div>
          <div className="imgGame1">
            <img
              src="./img/batman-arkham-knight/game-offline-Batman-Arkham-Knight-chinh-thuc-chao-ban-season-pass-02.0.0.jpg"
              alt=""
            />
          </div>
            <div className="contentGame" style={{textAlign: 'left'}}>
              <p>•	Operating System: Tested On Windows 7 64 Bit</p>
              <p>•	CPU: Intel Core i5 or later.</p>
              <p>•	RAM: 6 GB</p>
              <p>•	Hard Disk Space: 60 GB</p>
            </div>

          <div className="download">
            <a href="https://firebasestorage.googleapis.com/v0/b/batman-arkham-knight-013.appspot.com/o/Batman_Arkham_Knight.zip?alt=media&token=230ecd3d-ce53-4c1d-b772-2d9116e428d2">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
};

export default BatmanArkhamKnight;
