import React from "react";
import {useEffect} from "react";
import Header from "../componnts/header";
import Fotter from "../componnts/footer";
const GTASanAndrea = () => {
  useEffect(()=> {
    document.title = 'download GTA San Andreas | Web Game ';
  },[]);
  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2>GTA San Andreas Download</h2>
            <p>
              GTA San Andreas Download Free in single direct link for Windows.
              GTA San Andreas is an amazing action game.
            </p>
            <div className="img">
              <img src="./img/GTA-SanAndrea/GTASABOX.jpg" alt="" />
            </div>
          </div>
          <div className="discription">
            <p>
              Five years ago Carl Johnson escaped from the pressures of life in
              Los Santos, San Andreas… a city tearing itself apart with gang
              trouble, drugs and corruption. Where filmstars and millionaires do
              their best to avoid the dealers and gangbangers.
            </p>
          </div>
          <div className="imgGame1">
            <img src="./img/GTA-SanAndrea/71MGdSX4tYL._AC_UF1000,1000_QL80_.jpg" alt="" />
          </div>
          <div className="imgGame1">
            <img src="./img/GTA-SanAndrea/6303e0e96793ce440613014d.jpg" alt="" />
          </div>
          <div className="imgGame1">
            <img src="./img/GTA-SanAndrea/GTA_San_Andreas_Remastered_Screen_1.webp" alt="" />
          </div>
          <div className="contentGame" style={{ textAlign: "left" }}>
            <p>• Tested on Windows 7 64-Bit</p>
            <p>• Operating System: Windows Vista/7/8/8.1/10</p>
            <p>• CPU: 1Ghz Pentium III or AMD Athlon Processor</p>
            <p>• RAM: 256MB</p>
            <p>• Setup Size: 3.3GB</p>
            <p>• Hard Disk Space: 4GB</p>
          </div>
          <div className="download">
            <a href="https://s1.fastdowngames.com/fdg/downloadpcgames6.com-GTA-San-Andreas.rar">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
};

export default GTASanAndrea;
