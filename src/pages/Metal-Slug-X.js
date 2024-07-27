import React from "react";
import {useEffect} from "react";
import Header from "../componnts/header";
import Fotter from "../componnts/footer";
const MetalSlugX = () => {
  
  useEffect(()=>{
    document.title = 'Download Metal Slug X | Web Game';
  },[]);

  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2>Metal Slug X Download</h2>
            <p>
              Metal Slug X PC Game Free Download setup in single direct link for
              Windows. It is a run and gun game based on an interesting game
              series.
            </p>
            <div className="img">
              <img src="./img/Metal-Slug-X/Msxflyer.webp" alt="" />
            </div>
          </div>
          <div className="discription">
            <p>
              Metal Slug X PC Game is a very interesting game which is developed
              and published by SNK. In this game player has to play different
              levels and to accomplish each level he has to be very quick. There
              will be some enemies. Which may come across the player but he has
              to be conscious. At the start he may not be given the facilities
              and weapons and as he proceeds numerous weapons and tanks will be
              unlocked for later use. Health factor is also main point to
              proceed in the levels. Apart from weapons player will be given
              other opportunity like kick or jump etc to proceed efficiently.
              Bonus factor has also been added. Which may be given to the
              player, through which he gets success in various missions. If you
              like playing this game then you will like a similar game which is
              called Age of Wonders III Eternal Lords. You can download it free
              from our website.
            </p>
          </div>
          <div className="imgGame1">
            <img src="./img/Metal-Slug-X/01b_ypwtToW.webp" alt="" />
          </div>
          <div className="imgGame1">
            <img src="./img/Metal-Slug-X/ss_36d0cbc3eeaa224f33c20502936dd91ee4ae3a19.1920x1080.jpg" alt="" />
          </div>
          <div className="contentGame" style={{ textAlign: "left" }}>
            <p>•	Operating System: Tested on windows 7 64 Bit</p>
            <p>•	CPU: Pentium 4 2.4 GHz, Dual Core 2 GHz</p>
            <p>•	RAM: 1 GB</p>
            <p>•	Hard Disk Space: 500 MB</p>
          </div>
          <div className="download">
            <a href=" https://s2.downloadcomputergames.net/files/Metal.Slug.X.zip">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
};

export default MetalSlugX;
