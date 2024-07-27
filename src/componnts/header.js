import React from 'react';
import { Link,NavLink } from "react-router-dom" ;
const Header = () => {
  return (
    <div>
    <header>
  <div className="logo">
    <Link to="/">
      <h1>
        WEB <span>GAMES</span>
      </h1>
    </Link>
  </div>
  <div className="nav">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <NavLink to="/action">Action</NavLink>
      </li>
      <li>
        <NavLink to="/cars">Cars</NavLink>
      </li>
      <li>
        <NavLink to="/fiction">Fiction</NavLink>
      </li>
      <li>
        <NavLink to="/comedy">comedy</NavLink>
      </li>
    </ul>
  </div>
  {/* <div className="serch">
    <input type="text" placeholder="search"/>
  </div> */}
</header>

    </div>
  );
}

export default Header;
