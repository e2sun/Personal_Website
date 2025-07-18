import { useState } from 'react';
import myPic1 from '../Images/logo.png';

function Banner({ setView }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, view) => {
    e.preventDefault();
    setView(view);
    setIsOpen(false)
  }

  return (
    <div id="banner_setup">
      <div id="banner" className="banner">
        <div id="logo-container" onClick={() => setView("home")} style={{ cursor: "pointer" }}>
          <img id="banner_logo" src={myPic1} alt="Logo" />
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#" onClick={(e) => handleNavClick(e, "home")}>Home</a>
          <a href="#" onClick={(e) => handleNavClick(e, "projects")}>Projects</a>
          <a href="#" onClick={(e) => handleNavClick(e, "experiences")}>Experiences</a>
          <a href="#" onClick={(e) => handleNavClick(e, "languages")}>Languages</a>
          <a href="#" onClick={(e) => handleNavClick(e, "resume")}>Resume</a>
          <a href="#" onClick={(e) => handleNavClick(e, "contact")}>Contact Me</a>
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>
    </div>
  );
}

export default Banner;
