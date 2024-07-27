import React, { useEffect } from "react";
import Header from "../componnts/header";
import Fotter from "../componnts/footer";

const SpiderManShatteredDimensions = () => {
  useEffect(()=>{
    document.title = 'Download Spider-Man Shattered Dimensions | Web Game';
  },[]);
  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2> Spider-Man Shattered Dimensions Download</h2>
            <p>
              Spider Man Shattered Dimensions Free Download PC game Setup for
              Windows. It is an action adventurous game based on a super Hero
              Spider Man.
            </p>
            <div className="img">
              <img src="./img/Spider-Man-Shattered-Dimensions/MV5BMzUwMDZjYmItMTVmNy00NTNhLTk4OWMtNGU3ZDdhMWRmM2Q3XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg" alt="" />
            </div>
          </div>
          <div className="discription">
            <p>
              Spider Man Shattered Dimensions Game is developed by Beenox and
              published by Activision. This is a very interesting game based on
              a movie. The developers have made it more exciting by adding some
              comics in it. In the game player has to control the Spider Man.
              Player can use specific controls to fight against opponent, they
              can punch, kick etc. As there are total four Spider man’s. Which
              player has to control so each one has his own ability to cope with
              the situation. Some of them can attack the opponent silently, some
              can perform acrobatics to fight with enemy. Character can also get
              hide in the shadow. If he is in shadow the screen may becomes
              black & white and make him invisible. In other case if he comes in
              light, screen also shows bright effect and tells the player that
              the character is visible to all. If you like playing tactical
              games then there is another game that you may like to play is
              called Spiderman Game. You can download it free from our website.
            </p>
          </div>
          <div className="imgGame1">
            <img src="./img/Spider-Man-Shattered-Dimensions/ghows-LK-cfebc919-1d36-409c-aacc-d9a64730e4d2-fef7eb1d.webp" alt="" />
          </div>
          <div className="imgGame1">
            <img src="./img/Spider-Man-Shattered-Dimensions/Spider-Man-Shattered-Dimensions-2099.jpg" alt="" />
          </div>
          <div className="imgGame1">
            <img src="./img/Spider-Man-Shattered-Dimensions/steamuserimages-a.akamaihd.jpg" alt="" />
          </div>
          <div className="contentGame" style={{ textAlign: "left" }}>
            <p>•	Operating System:  Windows XP/ Windows Vista/ Windows 7 and 8</p>
            <p>•	CPU: Intel Core 2 Duo 2.6 GHz</p>
            <p>•	RAM: 1 GB of RAM for Windows XP / 2 GB Windows Vista</p>
            <p>•	Hard disk Space: 13.5 GB</p>
          </div>
          <div className="download">
            <a href="https://d1.myabandonware.com/t/5e1ddc80-3c71-456e-a074-792a825a0fdf/Spider-Man-Shattered-Dimensions_Win_EN-FR-DE-ES-IT_ISO.zip">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
};

export default SpiderManShatteredDimensions;
