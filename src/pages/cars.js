import React from 'react';
import {useEffect} from 'react';
import Header from '../componnts/header';
import Fotter from '../componnts/footer';
import { NavLink } from 'react-router-dom';

const Cars = () => {
  useEffect(()=> {
    document.title = 'Web Game | Cars';
  },[]);
  return (
    <>
    <Header/>
    <main>
  <div className="content">
    <h2>New Game</h2>
  </div>
  <div id='game' className="games">

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
    <NavLink to="/Need-For-Speed-Most-Wanted">
      <div className="game">
        <img
          src="./img/Need-For-Speed-Most-Wanted/Need_for_Speed_Most_Wanted_Box_Art.jpg"
          alt=""
        />
        <div className="contentGame">
          <p>Need for Speed Most Wanted</p>
        </div>
      </div>
    </NavLink>

    <NavLink to="/Dirt-2">
      <div className="game">
        <img src="./img/DiRT2/1.jpg" alt="" />
        <div className="contentGame">
          <p>DiRT 2</p>
        </div>
      </div>
    </NavLink>

  </div>

</main>

    <Fotter/>
    </>

  );
}

export default Cars;
