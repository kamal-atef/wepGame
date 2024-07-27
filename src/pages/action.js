import React from 'react';
import Header from '../componnts/header';
import Fotter from '../componnts/footer';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Action = () => {
  useEffect(()=> {
    document.title = 'Web Game | Action';
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
  <NavLink  to="/batman-arkham-knight">
    <div className="game">
      <img src="./img/batman-arkham-knight/batman-ark.jpg" alt="" />
      <div className="contentGame">
        <p>Batman Arkham Knigth</p>
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
  <NavLink to="/GTA-V">
    <div className="game">
      <img src="./img/GTA-V/images.jpg" alt="" />
      <div className="contentGame">
        <p>GTA V</p>
      </div>
    </div>
  </NavLink>
  <NavLink to="/GTA-IV">
    <div className="game">
      <img src="./img/GTA-IV/Grand_Theft_Auto_IV_cover.jpg" alt="" />
      <div className="contentGame">
        <p>GTA IV</p>
      </div>
    </div>
  </NavLink>
  <NavLink to="/GTA-SanAndreas.js">
      <div className="game">
        <img src="./img/GTA-SanAndrea/GTASABOX.jpg" alt="" />
        <div className="contentGame">
          <p>GTA San Andreas</p>
        </div>
      </div>
    </NavLink>
  <NavLink to="/GTA-Vice-City">
    <div className="game">
      <img src="./img/GTA-Vice-City/Vice-city-cover.jpg" alt="" />
      <div className="contentGame">
        <p>GTA Vice City</p>
      </div>
    </div>
  </NavLink>
  <NavLink to="/GTA-3">
      <div className="game">
        <img src="./img/GTA-3/1.jpg" alt="" />
        <div className="contentGame">
          <p>GTA 3</p>
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

  <NavLink to="/Metal-Slug-X">
    <div className="game">
      <img src="./img/Metal-Slug-X/Msxflyer.webp" alt="" />
      <div className="contentGame">
        <p>Metal Slug X</p>
      </div>
    </div>
  </NavLink>
</div>

</main>

    <Fotter/>
    </>

  );
}

export default Action;
