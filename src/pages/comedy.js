import React, { useEffect } from 'react';
import Header from '../componnts/header';
import Fotter from '../componnts/footer';
import { NavLink } from 'react-router-dom';


const Comedy = () => {
  useEffect(()=>{
    document.title = 'Web Game | Comedy ';
  },[])
  return (
    <>
    <Header/>
    <main>
  <div className="content">
    <h2>New Game</h2>
  </div>
  <div id='game' className="games">
    
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

    <NavLink to="/Neighbours-from-Hell">
      <div className="game">
        <img src="./img/Neighbours-from-Hell/1.png" alt="" />
        <div className="contentGame">
          <p>Neighbours from Hell</p>
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

export default Comedy;
