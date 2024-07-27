import React, { useEffect } from "react";
import Header from "../componnts/header";
import Fotter from "../componnts/footer";
const PES2021 = () => {
  useEffect(()=>{
    document.title = 'Download PES 2021 | Web Game';
  },[]);
  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2>PES 2021 Download</h2>
            <p>
              Pes Game Player individuality has been taken to the next level
              with 11 new skill traits. Score great goals with improved shooting
              motion & animation, and see stamina have an impact with Visible
              Fatigue
            </p>
            <div className="img">
              <img src="./img/PES-2021/1.png" alt="" />
            </div>
          </div>
          <div className="discription">
            <p>
              It also contains the following purchase bonus: • 2000 myClub Coins
              *The pre-order bonus, purchase bonus and myClub content can only
              be claimed on the account used to purchase the game. ARSENAL
              EDITION Purchase this edition and get the following Arsenal
              content: • ‘Iconic Moment Series’ x 1 player • Full squad (manager
              and players) • Digital kit • Original in-game menu theme • 3
              Player Contract Tickets x 30 weeks • Premium Agent x 30 weeks
              *Premium Agents can sign players from a large variety of clubs,
              including players from the club of whichever edition you have
              purchased.
            </p>
          </div>
          <div className="imgGame1">
            <img src="./img/PES-2021/2.webp" alt="" />
          </div>
          <div className="imgGame1">
            <img src="./img/PES-2021/3.jpg" alt="" />
          </div>
          <div className="contentGame" style={{ textAlign: "left" }}>
            <p>• Requires a 64-bit processor and operating system</p>
            <p>• OS: Windows 8.1/10 – 64bit</p>
            <p>• Processor: Intel Core i5-3470 / AMD FX 4350</p>
            <p>• Memory: 8 GB RAM</p>
            <p>• Graphics: NVIDIA GTX 670 / AMD Radeon HD 7870</p>
            <p>• Network: Broadband Internet connection</p>
            <p>• Storage: 40 GB available space</p>
            <p>• Additional Notes: Resolution 1280 x 720</p>
          </div>
          <div className="download">
            <a href="https://s1.uptogames.net/utg1/eFootball-PES-2021.rar">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
};

export default PES2021;
