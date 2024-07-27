import React from 'react';
import {useEffect} from 'react';
import Header from '../componnts/header';
import Fotter from '../componnts/footer';
import { NavLink } from 'react-router-dom';
const Fiction = () => {
  useEffect(()=> {
    document.title = 'Web Game | Fiction';
  },[]);
  return (
    <>
    <Header/>
    <main>
  <div className="content">
    <h2>New Game</h2>
  </div>
  <div id='game' className="games">

    <NavLink to="/spider-man-wep-of-shadows">
      <div className="game">
        <img
          src="./img/spider-man-web-of-shadows/Spider-Man-Web-of-Shadows-Free-Download-1.jpg"
          alt=""
        />
        <div className="contentGame">
          <p>spider-man web of shadows</p>
        </div>
      </div>
    </NavLink>
  
  
    <NavLink to="/Cyberpunk-2077">
      <div className="game">
        <img src="./img/Cyberpunk-2077/cyberpunk-2077.jpg" alt="" />
        <div className="contentGame">
          <p>Cyberpunk 2077</p>
        </div>
      </div>
    </NavLink>

  
    <NavLink to="/Spider-Man-Shattered-Dimensions">
      <div className="game">
        <img
          src="./img/Spider-Man-Shattered-Dimensions/MV5BMzUwMDZjYmItMTVmNy00NTNhLTk4OWMtNGU3ZDdhMWRmM2Q3XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg"
          alt=""
        />
        <div className="contentGame">
          <p>Spider Man Shattered Dimensions</p>
        </div>
      </div>
    </NavLink>
    <NavLink to="/Prototype">
      <div className="game">
        <img src="./img/Prototype/PROTOTYPE.png" alt="" />
        <div className="contentGame">
          <p>PROTOTYPE</p>
        </div>
      </div>
    </NavLink>
    <NavLink to="/Captain-Claw">
      <div className="game">
        <img
          src="/img/Captain-Claw/100005593_Captain-Claw-Free-Download.jpg"
          alt=""
        />
        <div className="contentGame">
          <p>Captain Claw</p>
        </div>
      </div>
    </NavLink>
  
  
    <NavLink to="/Chicken-Invaders-3">
      <div className="game">
        <img src="./img/Chicken-Invaders-3/1.jpg" alt="" />
        <div className="contentGame">
          <p>Chicken Invaders 3</p>
        </div>
      </div>
    </NavLink>
  
  </div>

</main>


    <Fotter/>
    </>

  );
}

export default Fiction;
