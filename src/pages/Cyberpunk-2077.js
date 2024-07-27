import React from "react";
import {useEffect} from "react";
import Header from "../componnts/header";
import Fotter from "../componnts/footer";
const Cyberpunk2077 = () => {

  useEffect(()=>{
    document.title = 'Download Cyberpunk 2077 | Web Game';
  },[]);
  
  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2>Cyberpunk 2077 Download</h2>
            <p>
              Cyberpunk 2077 CODEX Free Download PC Game setup in single direct
              link for Windows. It is an amazing role playing game.
            </p>
            <div className="img">
              <img
                src="./img/Cyberpunk-2077/cyberpunk-2077.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="discription">
            <p>
              Before you start Cyberpunk 2077 CODEX Free Download make sure your
              PC meets minimum system requirements. of the alien symbiote
            </p>
          </div>
          <div className="imgGame1">
            <img
              src="./img/Cyberpunk-2077/500_333.jpg"
              alt=""
            />
          </div>
          <div className="imgGame1">
            <img
              src="./img/Cyberpunk-2077/cyberpunk-2077-2-0-all-you-may-want-to-know-about-new-max-level-in-game.webp"
              alt=""
            />
          </div>
          <div className="imgGame1">
            <img
              src="./img/Cyberpunk-2077/cyberpunk-2077-wallpaper-and-title-1.jpg"
              alt=""
            />
          </div>
          <div className="contentGame" style={{ textAlign: "left" }}>
            <p>•	Requires a 64-bit processor and operating system</p>
            <p>•	OS: Windows 7 or 10</p>
            <p>•	Processor: Intel Core i5-3570K or AMD FX-8310</p>
            <p>•	Memory: 8 GB RAM</p>
            <p>•	Graphics: NVIDIA GeForce GTX 780 or AMD Radeon RX 470</p>
            <p>•	DirectX: Version 12</p>
            <p>•	Storage: 70 GB available space</p>
          </div>
          <div className="download">
            <a href="https://cdn1.koyso.com/Cyberpunk.2077.v2.12.H1.rar?verify=1721961498-PctBM6iNNfgkWyANXdz5OkMnwl4TIfRquPaSr%2BUtGW4%3D">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
};

export default Cyberpunk2077;
