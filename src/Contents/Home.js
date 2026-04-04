import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";

function Home({darkMode}){
  
   const [ message1, setMessage1] = useState ("") ;
   const [ message2, setMessage2] = useState ("") ;
   const [visited, setVisited] = useState(false);
useEffect (() => {setMessage1("NAME: AMANI YADAV");} , []) ;
useEffect (() => {setMessage2("An ambitious CompSci student who loves creating");} , []) ;
 const linkStyle = (visited) => ({color: darkMode ? (visited ? "#91d6f7" : "white") : (visited ? "#dffc5e" : "#34bae6"),});
    return(<div>
      <h1>{message1}</h1>
      <br></br>
      <h2>{message2}</h2>
    <h2> <br/><br/>See my work <Link to="/project" onClick={()=>setVisited(true)}style={linkStyle(visited)}>MY PROJECTS</Link></h2>
   </div>);
};

export default Home;