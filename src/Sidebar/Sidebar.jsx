import React from 'react';
import { FaInstagram, FaFacebookSquare, FaTwitterSquare, FaPinterestSquare } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">RAW</span>
        <img src="https://psrihospital.com/wp-content/uploads/2023/07/blog-1.webp" alt="About Me" />
        <p>
          Welcome to my blog! I'm [Your Name], a passionate [Your Profession/Interest], dedicated to sharing insights, tips, and stories about [Your Blog's Main Topic].
          When I'm not writing, you can find me exploring new ideas, experimenting with [Related Activity], and connecting with like-minded individuals.
          Follow my journey and stay updated by subscribing to my newsletter and connecting with me on social media.
          Let's learn and grow together!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">News</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaFacebookSquare />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaTwitterSquare />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaPinterestSquare />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;