import React,{useState} from "react";
function Contact({darkMode}){
    const [visited1, setVisited1] = useState(false);
      const [visited2, setVisited2] = useState(false);
       const linkStyle = (visited) => ({color: darkMode ? (visited ? "#91d6f7" : "white") : (visited ? "#dffc5e" : "#34bae6"),});
    return(
        <div style={{fontSize:"10px"
        }}>
            <h1>Email: @amaniyadav91@gmail.com</h1>
            <h1> <a onClick={() => setVisited1(true)} style={linkStyle(visited1)} href="https://github.com/amani1117">Github</a></h1>
            <h1> <a onClick={() => setVisited2(true)} style={linkStyle(visited2)} href="https://www.linkedin.com/in/amani-yadav-9730503a4/">Linkedin</a></h1>
        </div>
    );
}
export default Contact;