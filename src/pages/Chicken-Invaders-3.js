import React, { useEffect } from "react";
import Header from "../componnts/header";
import Fotter from "../componnts/footer";
const ChickenInvaders3 = () => {
  useEffect(()=>{
    document.title = 'Download Chicken Invaders 3 | Web Game';
  },[]);
  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2>Chicken Invaders 3 Download</h2>
            <p>
              Chickens. For centuries we have oppressed them, grilling,
              roasting, stewing, and stuffing them in buns. The time has come
              for us to pay. Intergalactic chickens are invading Earth, seeking
              revenge for the oppression of their earthly brethren!
            </p>
            <div className="img">
              <img src="./img/Chicken-Invaders-3/1.jpg" alt="" />
            </div>
          </div>
          <div className="discription">
            <p>
              Intergalactic chickens invaded Earth, seeking revenge for the
              oppression of their earthly brethren. They came out of nowhere,
              and everywhere. It was only you who managed to repel the invasion,
              and saved humanity from an eternity of servitude. Then, things got
              serious.
            </p>
          </div>
          <div className="imgGame1">
            <img src="./img/Chicken-Invaders-3/2.webp" alt="" />
          </div>
          <div className="imgGame1">
            <img src="./img/Chicken-Invaders-3/3.webp" alt="" />
          </div>
          <div className="contentGame" style={{ textAlign: "left" }}>
            <p>• 7/8/8.1/10/11</p>
            <p>• 1GHz CPU</p>
            <p>• 512MB RAM</p>
            <p>• DirectX 11.0</p>
          </div>
          <div className="download">
            <a href="https://s2.downloadcomputergames.net/files/Chicken-Invaders-3.zip">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
};

export default ChickenInvaders3;
