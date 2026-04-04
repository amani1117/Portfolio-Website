import React,{Component} from "react";
import Header from "./Contents/Header";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { HashRouter as BrowserRouter } from "react-router-dom";
import Home from "./Contents/Home";
import AboutMe from "./Contents/aboutMe";
import Contact from "./Contents/Contact";
import Projects from "./Contents/Projects";
import "./App.css";
import lightback from "./Contents/stuff/lightback.gif"
import darkback from "./Contents/stuff/darkback.gif"
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={darkMode:false};
    this.toggleDarkMode=this.toggleDarkMode.bind(this);
  }
  toggleDarkMode()
  {
    this.setState({darkMode:!this.state.darkMode});
  }
  render(){
    const theme={
      backgroundImage: this.state.darkMode?`url(${darkback})`:`url(${lightback})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      color: this.state.darkMode?'#FFB3C6':'#8B5CF6',
      minHeight:"100vh",
      fontFamily:"'Press Start 2P'",fontSize:"15px"

    };
  const footerStyle={backgroundColor: this.state.darkMode?"darkblue":"lightblue",
    position: "fixed",left: 0,bottom: 0,width: "100%"};
  
  return (
   
    <div style={theme}>
      
      <BrowserRouter>
      <Header darkMode={this.state.darkMode} toggleDarkMode={this.toggleDarkMode}/>
      <div className="bar-window" style={{background:this.state.darkMode?"linear-gradient(to right, #6b4cf4, #819cfc)":"linear-gradient(to right, #f44cc7, #819cfc)"}}>AMANI.EXE</div>
      <div style={{marginLeft:"20px",padding:"15px",width:"95%" ,height:"350px",border:this.state.darkMode?"10px solid #704cf4":"10px solid #f44cc7",borderRadius:"10px",backgroundColor:this.state.darkMode?'#8a5cf67d':'#ffb3c6be' }}>
        <Routes>
        <Route path="/" element={<Home darkMode={this.state.darkMode}/>}/>
        <Route path="/abtMe" element={<AboutMe darkMode={this.state.darkMode}/>}/>
        <Route path="/project" element={<Projects darkMode={this.state.darkMode}/>}/>
        <Route path="/Contacts" element={<Contact darkMode={this.state.darkMode}/>}/>
        </Routes>
        </div>
        <footer style={footerStyle}>&copy; Amani Yadav</footer>
    </BrowserRouter>
    </div>
  );
}
}

export default App;
