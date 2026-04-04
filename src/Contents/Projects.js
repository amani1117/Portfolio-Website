import React from "react";
import PropTypes from "prop-types";
import Card from "./Card.js";
function Projects({darkMode}){
    return(
        <div style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
            <Card title="Mini Shell" darkMode={darkMode} description="A Unix shell built in C" link="https://github.com/amani1117/mini_shell"/>
            <Card title="Sonic Game" darkMode={darkMode} description="A browser game in JavaScript" link="https://github.com/amani1117/sonicgame"/>
            <Card title="Clicker Game" darkMode={darkMode} description="A fun clicker game :)" link="https://github.com/amani1117/Clicker-game-3"/>
            <Card title="Drawing Website" darkMode={darkMode} description="A creative drawing app" link="https://github.com/amani1117/drawing-website"/>
        </div>
    )
}
Projects.propTypes={
darkMode:PropTypes.bool.isRequired,
};
export default Projects;