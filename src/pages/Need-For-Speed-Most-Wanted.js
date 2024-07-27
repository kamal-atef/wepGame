import React from "react";
import Header from "../componnts/header";
import Fotter from "../componnts/footer";
import {useEffect} from "react";

const NeedForSpeedMostWanted = () => {

  useEffect(()=>{
    document.title = 'Download Need For Speed Most Wanted | Web Game';
  },[]);

  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2>Need For Speed Most Wanted Download</h2>
            <p>
              Need For Speed Most Wanted Download Free PC Game in single direct
              link for windows. It is the most exciting car racing game with the
              amazing features. Man.
            </p>
            <div className="img">
              <img src="./img/Need-For-Speed-Most-Wanted/Need_for_Speed_Most_Wanted_Box_Art.jpg" alt="" />
            </div>
          </div>
          <div className="discription">
            <p>
              This game has been set in the Rockport city and everyone would
              like to play this game gain and again. Some breath talking cars to
              compete with others cars in Quick, Race, Career, challenging
              series are included in this game for players. In tho mode of Quick
              you can simply select the cars for racing while in the case of
              Career mode snatching is introduce that is new thing in this
              series. In the mod of challenging series 69 challenging for the
              players the to complete advance and the best things about this
              game is that pursuits system to chase at any instant of time are
              introduce. Multi players have found ion this game. The players can
              also enjoy the stunning graphics in this game. Need For Speed The
              Run is the other game that you want to play.{" "}
            </p>
          </div>
          <div className="imgGame1">
            <img src="./img/Need-For-Speed-Most-Wanted/need-for-speed-most-wanted_1037712.jpg" alt="" />
          </div>
          <div className="imgGame1">
            <img src="./img/Need-For-Speed-Most-Wanted/Need-for-Speed-Most-Wanted-2-1.webp" alt="" />
          </div>
          <div className="imgGame1">
            <img src="./img/Need-For-Speed-Most-Wanted/Need-for-Speed-Most-Wanted-2005.webp" alt="" />
          </div>
          <div className="contentGame" style={{ textAlign: "left" }}>
            <p>•	Operating System: Window XP / Window 7/ Window 8/ Windows Vista</p>
            <p>•	CPU: Intel Pentium 4</p>
            <p>•	RAM: 256 MB</p>
            <p>•	Setup size: 479MB</p>
            <p>•	Hard Disk Space: 3 GB</p>
          </div>
          <div className="download">
            <a href="https://s1.fastdowngames.com/fdg/downloadpcgames6.com-Need-For-Speed-Most-Wanted-2005.rar">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
};

export default NeedForSpeedMostWanted;
