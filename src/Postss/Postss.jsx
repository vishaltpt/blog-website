import React from 'react'
import { Link } from 'react-router-dom';
import './Postss.css'
const Postss = ({img}) => {
  return (
    <div className="postss">
      <Link to="/Single">
    <img 
    className="postimg"
    src={img}
    alt=""
    />
      </Link>
    <div className="postinfo">
        <div className="postcats">
        <span className="postcat">Music</span>
        <span className="postcat">Life</span>
    </div>
    <span className="posttitle">Good News</span>
    <hr/>
    <span className="postdate">90 hour ago</span>
    </div>
    <p className='plu'>
        hello,its our blog webiste initially we create the website using react js 
        UI Design later we do the backend process to complete the full blog website
        special thanks to my teammates.
        hello,its our blog webiste initially we create the website using react js 
        UI Design later we do the backend process to complete the full blog website
        special thanks to my teammates.
        hello,its our blog webiste initially we create the website using react js 
        UI Design later we do the backend process to complete the full blog website
        special thanks to my teammates.
        hello,its our blog webiste initially we create the website using react js 
        UI Design later we do the backend process to complete the full blog website
        special thanks to my teammates.
        hello,its our blog webiste initially we create the website using react js 
        UI Design later we do the backend process to complete the full blog website
        special thanks to my teammates.
        hello,its our blog webiste initially we create the website using react js 
        UI Design later we do the backend process to complete the full blog website
        special thanks to my teammates.
    </p>
</div>
  )
}

export default Postss