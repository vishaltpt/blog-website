import React from 'react';
import { Link } from 'react-router-dom';
import "./Topbar.css";

export default function Topbar() {
  return ( 
    <div className='top'>
      <div className="topleft">
       <a href='https://www.youtube.com/results?search_query=blogger.com' target="_blank" >
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href='https://www.instagram.com/_mouri_11/?hl=en' target="_blank" >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href='https://in.pinterest.com/search/pins/?q=blogger&rs=typed' target="_blank" >
          <i className="fa-brands fa-pinterest"></i>
        </a>
        <a href='https://x.com/adigitalblogger' target="_blank" >
          <i className="fa-brands fa-twitter"></i>
        </a>
       
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem"><Link to="/">Home</Link></li>
          <li className="toplistitem"><Link to="/write">Write</Link></li>
          <li className="toplistitem"><Link to="/contact">Contact</Link></li>
          <li className="toplistitem"><Link to="/logout">Logout</Link></li>
        </ul>
      </div>
      <div className="topright">
        <input type="text" className="input" placeholder="Search..." />
        <i className="fa-solid fa-magnifying-glass"></i>
        <Link to="/setting"><i className="fa-solid fa-user"></i></Link>
        <Link to="/register"><i className="fa-solid fa-sign-in-alt"></i></Link> 
      </div>
    </div>
  );
}
