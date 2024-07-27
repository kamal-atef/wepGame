import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import SpiderManWebOfShadows from './pages/spider-man-wep-of-shadows';
import BatmanArkhamKnight from './pages/batman-arkham-knight';
import GTAV from './pages/GTA-V';
import GTAIV from './pages/GTA-IV';
import GTA3 from './pages/GTA-3';
import Cyberpunk2077 from './pages/Cyberpunk-2077';
import GTASanAndreas from './pages/GTA-SanAndrea.js';
import GTAViceCity from './pages/GTA-Vice-City';
import NeedForSpeedMostWanted from './pages/Need-For-Speed-Most-Wanted.js';
import SpiderManShatteredDimensions from './pages/Spider-Man-Shattered-Dimensions.js';
import Prototype from './pages/Prototype';
import CaptainClaw from './pages/Captain-Claw';
import MetalSlugX from './pages/Metal-Slug-X';
import NeighboursFromHell from './pages/Neighbours-from-Hell';
import ChickenInvaders3 from './pages/Chicken-Invaders-3';
import PES2021 from './pages/PES-2021';
import Dirt2 from './pages/DiRT-2';
import Action from './pages/action';
import Cars from './pages/cars';
import Fiction from './pages/fiction';
import Comedy from './pages/comedy';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1 style={{
      textAlign:'center',
    }}>no Page</h1>
  },
  {
    path: "/spider-man-wep-of-shadows",
    element: <SpiderManWebOfShadows/>,
  },
  {
    path: "/batman-arkham-knight",
    element: <BatmanArkhamKnight/>,
  },
  {
    path: "/GTA-V",
    element: <GTAV/>,
  },
  {
    path: "/GTA-IV",
    element: <GTAIV/>,
  },
  {
    path: "/GTA-3",
    element: <GTA3/>,
  },
  {
    path: "/Cyberpunk-2077",
    element: <Cyberpunk2077/>,
  },
  {
    path: "/GTA-SanAndreas.js",
    element: <GTASanAndreas/>,
  },
  {
    path: "/GTA-Vice-City",
    element: <GTAViceCity/>,
  },
  {
    path: "/Need-For-Speed-Most-Wanted",
    element: <NeedForSpeedMostWanted/>,
  },
  {
    path: "/Spider-Man-Shattered-Dimensions",
    element: <SpiderManShatteredDimensions/>,
  },
  {
    path: "/Prototype",
    element: <Prototype/>,
  },
  {
    path: "/Captain-Claw",
    element: <CaptainClaw/>,
  },
  {
    path: "/Metal-Slug-X",
    element: <MetalSlugX/>,
  },
  {
    path: "/Neighbours-from-Hell",
    element: <NeighboursFromHell/>,
  },
  {
    path: "/Chicken-Invaders-3",
    element: <ChickenInvaders3/>,
  },
  {
    path: "/PES-2021",
    element: <PES2021/>,
  },
  {
    path: "/Dirt-2",
    element: <Dirt2/>,
  },
  {
    path: "/action",
    element: <Action/>,
  },
  {
    path: "/cars",
    element: <Cars/>,
  },
  {
    path: "/fiction",
    element: <Fiction/>,
  },
  {
    path: "/comedy",
    element: <Comedy/>,
  },



]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
