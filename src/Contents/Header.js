import React, { useState } from "react";
import { Link } from "react-router-dom";
import dark from "./stuff/dark.png";
import light from "./stuff/light.png";

function Header({ darkMode, toggleDarkMode }) {
  const [visited1, setVisited1] = useState(false);
  const [visited2, setVisited2] = useState(false);
  const [visited3, setVisited3] = useState(false);
  const [visited4, setVisited4] = useState(false);

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const linkStyle = (visited, isHovered) => ({
    marginLeft: "20px",
    marginRight: "20px",
    fontSize: "15px",
    color: darkMode ? (visited ? "#91d6f7" : "white") : (visited ? "#5e8bfc" : "#9ae4fc"),
    padding: "10px",
    border: "2px solid pink",
    borderRadius: "50px",
    backgroundColor: darkMode ? "#96a5fc" : "#f0fc96",
    boxShadow: isHovered ? "6px 6px 0px #8B5CF6" : "4px 4px 0px #FFB3C6",
    transform: isHovered ? "translate(-2px, -2px)" : "none",
    transition: "all 0.2s ease",
    cursor: "pointer",
    display: "inline-block"
  });

  return (
    <div style={{ position: "relative" }}>
      {/* background layer */}
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: "100%", height: "100%",
        backgroundImage: darkMode ? `url(${dark})` : `url(${light})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        opacity: 0.8, zIndex: 0
      }}/>

      {/* content layer */}
      <div style={{
        position: "relative", zIndex: 1, padding: "50px 10px",
        filter: darkMode ? "drop-shadow(0px 4px 8px pink)" : "drop-shadow(0px 4px 8px #8B5CF6)"
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2>
            Welcome to my portfolio website

            <Link to="/"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
              onClick={() => setVisited1(true)}
              style={linkStyle(visited1, isHovered1)}>Home</Link>

            <Link to="/abtMe"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
              onClick={() => setVisited2(true)}
              style={linkStyle(visited2, isHovered2)}>About Me</Link>

            <Link to="/project"
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
              onClick={() => setVisited3(true)}
              style={linkStyle(visited3, isHovered3)}>Project</Link>

            <Link to="/Contacts"
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
              onClick={() => setVisited4(true)}
              style={linkStyle(visited4, isHovered4)}>Contacts</Link>
          </h2>

          <button style={{
            padding: "15px", marginLeft: "auto", borderRadius: "50px",
            backgroundColor: darkMode ? "#96a5fc" : "#f0fc96",
            border: darkMode ? "2px solid #96a5fc" : "2px solid #f0fc96"
          }} onClick={toggleDarkMode}>
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;