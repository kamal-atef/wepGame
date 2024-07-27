import React from 'react';
import Header from "../componnts/header";
import Fotter from "../componnts/footer";
import { useEffect } from 'react';
const CaptainClaw = () => {

    useEffect(()=>{
      document.title = 'Download Captain Claw | Web Game';
    },[]);

  return (
    <>
    <Header />

    <main>
      <div className="contentPage">
        <div className="title">
          <h2>Captain Claw Download</h2>
          <p>
          We might have the game available for more than one platform. Captain Claw is currently available on these platforms:
          </p>
            <div className="img">
            <img
            src="./img/Captain-Claw/100005593_Captain-Claw-Free-Download.jpg"
            alt=""
          />
            </div>
        </div>
        <div className="discription">
          <p>
          Claw, also known as Captain Claw, is a 2D side-scroller platform video game published by Monolith Productions in 1997 about an anthropomorphic pirate cat who sets on a quest to find an ancient amulet while fighting enemies and solving puzzles. It is Monolith’s second release after Blood, which was released that same year in May.
          </p>
        </div>
        <div className="imgGame1">
          <img
            src="./img/Captain-Claw/captainclaw_003-large.gif"
            alt=""
          />
        </div>
        <div className="imgGame1">
          <img
            src="./img/Captain-Claw/6.gif"
            alt=""
          />
        </div>
        <div className="contentGame" style={{textAlign: 'left'}}>
            <p>•	Windows </p>
            <p>•	Intel Pentium 4 2.40GHz.</p>
            <p>•	256MB Ram.</p>
            <p>•	64MB Vram Intel or better.</p>
            <p>•	150MB Free Space.</p>
        
          </div>
        <div className="download">
          <a href=" https://s2.downloadcomputergames.net/files/Captain.Claw.v1.4.zip">
            <button>Downlowad Click</button>
          </a>
        </div>
      </div>
    </main>

    <Fotter />
  </>

  );
}

export default CaptainClaw;
