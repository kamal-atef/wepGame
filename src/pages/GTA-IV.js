import React from "react";
import {useEffect} from "react";
import Header from "../componnts/header";
import Fotter from "../componnts/footer";

const GTAIV = () => {

  useEffect(()=>{
    document.title = 'Download GTA IV | Web Game';
  },[]);

  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2>GTA IV Download</h2>
            <p>
              GTA IV With Updates Free Download PC Game setup in single direct
              link for Windows. It is an amazing action and adventure game.
            </p>
            <div className="img">
              <img
                src="./img/GTA-IV/Grand_Theft_Auto_IV_cover.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="discription">
            <p>
              Stepping off a boat in the shoes of illegal immigrant Niko Bellic
              as he arrives in Liberty City at the start of Grand Theft Auto IV,
              you can tell immediately that Rockstar North’s latest offering is
              something quite special. Yes, this is another GTA game in which
              you’ll likely spend the bulk of your time stealing cars and
              gunning down cops and criminals, but it’s also much more than
              that. GTAIV is a game with a compelling and nonlinear storyline, a
              game with a great protagonist who you can’t help but like, and a
              game that boasts a plethora of online multiplayer features in
              addition to its lengthy story mode. It’s not without some flaws,
              but GTAIV is undoubtedly the best Grand Theft Auto yet. of the
              alien symbiote
            </p>
          </div>
          <div className="imgGame1">
            <img
              src="./img/GTA-IV/3447_gta_iv_trailer.jpg.webp"
              alt=""
            />
          </div>
          <div className="imgGame1">
            <img
              src="./img/GTA-IV/is-gta-4-gameplay-outdated-after-14-years-discussion-v0-p87l1i7vtzg81.webp"
              alt=""
            />
          </div>
          <div className="imgGame1">
            <img
              src="./img/GTA-IV/nao-podes-comprar-gta-4-no-steam-e-nao-se-sabe-o-porque-1578912544632.webp"
              alt=""
            />
          </div>
          <div className="contentGame" style={{ textAlign: "left" }}>
            <p>•	Operating System: Windows Vista/7/8/8.1/10</p>
            <p>•	CPU: Intel Core 2 Duo 1.8Ghz, AMD Athlon X2 64 2.4Ghz.</p>
            <p>•	RAM: 4GB</p>
            <p>•	Setup Size: 14 GB</p>
            <p>•	Hard Disk Space: 20 GB</p>
            <p>•	MD5SUM : 587cae070d220a72e90cc30b2d209427</p>
          </div>
          <div className="download">
            <a href="https://s1.fastdowngames.com/fdg/downloadpcgames6.com-Grand-Theft-Auto-IV.rar">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
};

export default GTAIV;
