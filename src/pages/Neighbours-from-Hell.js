import React from "react";
import {useEffect} from "react";
import Header from "../componnts/header";
import Fotter from "../componnts/footer";
const NeighboursFromHell = () => {
  
  useEffect(()=>{
    document.title = 'Download Neighbours From Hell | Web Game';
  },[])

  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2>Neighbours From Hell Download</h2>
            <p>
              There goes the neighborhood! Play the star of a cheeky TV Show who
              taking revenge on his horrible neighbor by constantly pranking him
              at home and around the world in the most creative and ludicrous
              ways.
            </p>
            <div className="img">
              <img src="./img/Neighbours-from-Hell/1.png" alt="" />
            </div>
          </div>
          <div className="discription">
            <p>
              A whole TV show based on playing increasingly outrageous pranks on
              your grumpy neighbor to keep the audience entertained, and
              viewership numbers high. It's good to be bad in this early 2000s
              trash TV-inspired slapstick extravaganza!
            </p>
          </div>
          <div className="imgGame1">
            <img src="./img/Neighbours-from-Hell/2.png" alt="" />
          </div>
          <div className="imgGame1">
            <img src="./img/Neighbours-from-Hell/3.jpg" alt="" />
          </div>
          <div className="contentGame" style={{ textAlign: "left" }}>
            <p>• For processor: 64-bit processor</p>
            <p>• Video card: Intel HD 4000, GeForce GT 330M, Radeon HD 4670 or equivalent</p>
            <p>• RAM: 4 GB</p>
          </div>
          <div className="download">
            <a href="https://s2.downloadcomputergames.net/files/Neighbours-from-Hell-1.zip">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
};

export default NeighboursFromHell;
