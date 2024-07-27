import React, { useEffect } from 'react';
import Header from "../componnts/header";
import Fotter from "../componnts/footer";

const Prototype = () => {
  useEffect(()=>{
    document.title = 'Download Prototype | Web Game';
  },[]);
  return (
    <>
      <Header />

      <main>
        <div className="contentPage">
          <div className="title">
            <h2>Prototype Download</h2>
            <p>
            Prototype 1 Free Download PC game setup single direct link for windows. It’s an action and full time adventure game From prototype series
            </p>
              <div className="img">
              <img
              src="./img/Prototype/PROTOTYPE.png"
              alt=""
            />
              </div>
          </div>
          <div className="discription">
            <p>
            Prototype 1 is very interesting action game. If you love to play action and adventures games so Prototype 1 is one of the best option because you will also enjoy some adventures movements in this game. This game is developed by Radical Entertainment and published by Activision.  It was released on June 9 2009.
            </p>
          </div>
          <div className="imgGame1">
            <img
              src="./img/Prototype/71R0bB4akKS._AC_UF1000,1000_QL80_.jpg"
              alt=""
            />
          </div>
          <div className="imgGame1">
            <img
              src="./img/Prototype/41TV5Z7w2CL._AC_UF1000,1000_QL80_.jpg"
              alt=""
            />
          </div>
          <div className="imgGame1">
            <img
              src="./img/Prototype/41K8vIIg-zL._AC_UF894,1000_QL80_.jpg"
              alt=""
            />
          </div>
          <div className="contentGame" style={{textAlign: 'left'}}>
              <p>•	Operating System: Windows XP/ Windows Vista/ Windows 7/ Windows 8 and 8.1</p>
              <p>•	CPU: Core 2 Duo 2.4 GHz</p>
              <p>•	RAM: 1 GB</p>
              <p>•	Hard Disk Space: 8 GB</p>
          
            </div>
          <div className="download">
            <a href="https://s448vla.storage.yandex.net/rdisk/fb5f726fc7a1ff95da994c5956cccc1617115038cb52952c8e064fca901b4fa4/66a34911/J00YuEGVzxb4DpQA3xTzAYw3e8dyEI7OfzZBxcGnaEtsmoVesdesPgDSXPfqVDijZvsrd75vN-WkQBqEDK9KPw==?uid=1430612300&filename=Prototype-1-DirectForGames.com.zip&disposition=attachment&hash=&limit=0&content_type=application%2Fzip&owner_uid=1430612300&fsize=5722916604&hid=10dff14b86dc7de652bc4a75c589e707&media_type=compressed&tknv=v2&etag=56a961d042db5c067d7294e8a2ef8f1f&ts=61e2109a7a640&s=cdee4b21abe3de27339c0ae83af6c22d243a2c01a0ba1dece4c1c2cc10da4e0f&pb=U2FsdGVkX18m0DEJ3GlWW-9DKh-B7U3BEDIOqc-XUpFLwpvcktnyyloZ4Dvz68IEIq-PoFNff83dMKgY1iA_N3stEbwuVM_VJQCMWjto5YI">
              <button>Downlowad Click</button>
            </a>
          </div>
        </div>
      </main>

      <Fotter />
    </>
  );
}

export default Prototype;
