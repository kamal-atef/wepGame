import React from "react";  
import {useEffect} from "react";  
import Header from "../componnts/header";
import Fotter from "../componnts/footer";
const DiRT2 = () => {
  useEffect(()=>{
    document.title = 'Download DiRT 2 | Web Game';
  },[]);
  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2>DiRT 2 Download</h2>
            <p>
              Colin McRae Dirt 2 is one of very exciting games. It is racing
              game which is full of fun and entertainment. This game belongs
              from the series of Colin McRae Rally. This game is developed and
              published by Code Master. It was released on September 8, 2009.
              This game is similar to Blur PC Game.
            </p>
            <div className="img">
              <img src="./img/DiRT2/1.jpg" alt="" />
            </div>
          </div>
          <div className="discription">
            <p>
              In the game Colin McRae Dirt 2 the main aim of the player is to
              try to drive his car faster and be the best driver of the game.
              Player will be use many kinds off different types of latest and
              new models of cars in this game. In this game player will enjoy
              rally type of racing. Like WRC 4 FIA World Rally Championship PC
              Game. in which you can participate in race rally championship.
            </p>
          </div>
          <div className="imgGame1">
            <img
              src="./img/DiRT2/2.jpg"
              alt=""
            />
          </div>
          <div className="imgGame1">
            <img src="./img/DiRT2/3.jpg" alt="" />
          </div>
          <div className="imgGame1">
            <img
              src="./img/GTA-V/DiRT2/"
              alt=""
            />
          </div>
          <div className="imgGame1">
            <img src="./img/DiRT2/4.jpg" alt="" />
          </div>
          <div className="contentGame" style={{ textAlign: "left" }}>
            <p>
              • Operating System: Windows XP/ Windows Vista/ Windows 7/ Windows
              8 and 8.1
            </p>
            <p>• CPU: Pentium 4 3.0 GHz</p>
            <p>• RAM:1 GB</p>
            <p>• Hard Disk Space: 10 GB</p>
          </div>
          <div className="download">
            <a href="https://d1.myabandonware.com/t/c0c65da7-1e3f-482c-92a2-bcd52fa27f48/DiRT-2_Win_EN-FR-DE-ES-IT_ISO.zip">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
};

export default DiRT2;
