import React from "react";
import {useEffect} from "react";
import Header from "../componnts/header";
import Fotter from "../componnts/footer";
const GTA3 = () => {

  useEffect(()=>{
    document.title = 'Download GTA 3 | Web Game';
  },[]);
  
  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2>GTA 3 Download</h2>
            <p>
              The critically acclaimed blockbuster Grand Theft Auto III brings
              to life the dark and seedy underworld of Liberty City.
            </p>
            <div className="img">
              <img src="./img/GTA-3/1.jpg" alt="" />
            </div>
          </div>
          <div className="discription">
            <p>
              Welcome to Liberty City. Where it all began. The critically
              acclaimed blockbuster Grand Theft Auto III brings to life the dark
              and seedy underworld of Liberty City. With a massive and diverse
              open world, a wild cast of characters from every walk of life, and
              the freedom to explore at will, Grand Theft Auto III puts the
              dark, intriguing, and ruthless world of crime at your fingertips.
              With stellar voice acting, a darkly comic storyline, a stunning
              soundtrack, and revolutionary open-world gameplay, Grand Theft
              Auto III is the game that defined the open-world genre for a
              generation.
            </p>
          </div>
          <div className="imgGame1">
            <img src="./img/GTA-3/2.jpg" alt="" />
          </div>
          <div className="imgGame1">
            <img src="./img/GTA-3/3.jpg" alt="" />
          </div>
          <div className="imgGame1">
            <img src="./img/GTA-3/4.jpg" alt="" />
          </div>
          <div className="contentGame" style={{ textAlign: "left" }}>
            <p>• 16 MB Direct3D Video Card</p>
            <p>• Pentium III 450 MHz CPU</p>
            <p>• 96 MB RAM</p>
            <p>• 500MB free hard disk space</p>
            <p>• Win 98/ME/2000/XP</p>
            <p>• Direct X 8.1</p>
          </div>
          <div className="download">
            <a href="https://s2.fastdowngames.com/fast/downloadpcgames6.com-Grand-Theft-Auto-III.rar">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
};

export default GTA3;
