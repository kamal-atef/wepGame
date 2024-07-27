import React, { useEffect } from "react";
import Header from "../componnts/header";
import Fotter from "../componnts/footer";

const GTAV = () => {
  useEffect(()=>{
    document.title = 'Download GTA V | Web Game';
  },[]);
  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2>GTA-V Download</h2>
            <p>
              GTA V (Grand Theft Auto V) FitGirl Repack With All Updates Free
              Download PC Game setup in single direct link for Windows. GTA 5 is
              an amazing action and adventure game.
            </p>
            <div className="img">
              <img
                src="./img/GTA-V/images.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="discription">
            <p>
              ROCKSTAR GAMES’ CRITICALLY ACCLAIMED OPEN WORLD GAME, GRAND THEFT
              AUTO V, IS COMING TO PC. When a young street hustler, a retired
              bank robber and a terrifying psychopath find themselves entangled
              with some of the most frightening and deranged elements of the
              criminal underworld, the U.S. government and the entertainment
              industry, they must pull off a series of dangerous heists to
              survive in a ruthless city in which they can trust nobody, least
              of all each other.
            </p>
          </div>
          <div className="imgGame1">
            <img
              src="./img/GTA-V/0b179504-412d-4af7-9e00-3e3d92633577.jpg"
              alt=""
            />
          </div>
          <div className="imgGame1">
            <img
              src="./img/GTA-V/2019-09-30-product-5-j_1100.webp"
              alt=""
            />
          </div>
          <div className="imgGame1">
            <img
              src="./img/GTA-V/b25lY21zOmEzNzZkMDhlLTI5NDAtNDI1MS04MDI5LWVmOTI0N2QwN2UxZDo1YjY2NDY4OC1iNDFmLTQ5M2YtODMyNC04OTdjZDVkMmYzODE=.jpg"
              alt=""
            />
          </div>
          <div className="imgGame1">
            <img
              src="./img/GTA-V/fttmvckitdl71.webp"
              alt=""
            />
          </div>
          <div className="contentGame" style={{ textAlign: "left" }}>
            <p>• Operating System: Windows 7/8/8.1</p>
            <p>
              • CPU: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom
              9850 Quad-Core Processor (4 CPUs) @ 2.5GHz – actually works on
              dual-core CPUs as well
            </p>
            <p>•	Video Card: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)</p>
            <p>•	RAM: 6GB</p>
            <p>•	Setup Size: 38.8GB</p>
            <p>•	Hard Disk Space: 40GB</p>
          </div>
          <div className="download">
            <a href="https://s4.uptogames.net/utg/Grand-Theft-Auto-V.rar">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
};

export default GTAV;
