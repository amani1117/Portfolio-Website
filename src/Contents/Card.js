import React,{useState} from "react";
function Card({title,darkMode,description,link})
{
    const [isHovered, setIsHovered] = useState(false);
    return(
    <a href={link} style={{ textDecoration: "none" }}>
    <div onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} style={{backgroundColor:darkMode?"#96a5fc":"#f0fc96",padding:"30px ",borderRadius:"20px",width:"250px",height:"100px",color:darkMode?'white':'#8B5CF6',textShadow:darkMode?"2px 2px 4px pink":"2px 2px 4px #8cc7fa",boxShadow: isHovered ? "6px 6px 0px #8B5CF6" : "4px 4px 0px #FFB3C6",
          transform: isHovered ? "translate(-2px, -2px)" : "none",
          transition: "all 0.2s ease",cursor:"pointer"}}>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
    </a>
    );
}
export default Card;