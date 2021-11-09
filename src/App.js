import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import Pdf from '../src/assets/Ben-Meir_Resume.pdf';
import { useState, useEffect } from 'react';

function App() {

  var bio = `Hi, I am Jeremy Ben-Meir, a fourth-year at Cornell University, majoring in Computer Science, 
  and minoring in Real Estate and Data Science. I am interested in machine learning, data science,
  real estate investing, and blockchain applications.
  `
  const { height, width } = useWindowDimensions();
  const marg = width > 700 ? '50%' : "80%";
  console.log(marg)
  var divStyle = {
    width:marg,
    margin:"auto",
    textAlign: 'left'
  };
  var contentStyle = {
    display: "flex",
    flexDirection: "column",
    marginLeft:20
  };
  var headerSyle = {
    fontSize: 30,
    fontWeight: 'bold'
  };
  var subheaderSyle = {
    fontSize: 20,
    fontWeight: 'bold'
  };
  var linkSyle = {
    textDecoration: 'none'
  };

  return (
    <div style={divStyle} className="App">

      <p style={headerSyle}>Jeremy Ben-Meir</p>

      <a>{bio}</a>

      <p style={subheaderSyle}>Current Experience</p>
      <div style={contentStyle}>
        <a style={linkSyle} href="https://jeremyben-meir.github.io/open-storefront-directory/" target = "_blank">- Open Storefront directory</a>
      </div>

      <p style={subheaderSyle}>Previous Experiences</p>
      <div style={contentStyle}>
        <a>- Software Development Engineer Intern at Amazon</a>
        <a>- Application Developer at Survision</a>
        <a>- Research Assistant at Cornell Robotic Personal Assistants Laboratory</a>
      </div>

      <p style={subheaderSyle}>Relevant Links</p>
      <div style={contentStyle}>
        <a style={linkSyle} href="https://www.linkedin.com/in/jeremy-ben-meir/" target = "_blank">- LinkedIn</a>
        <a style={linkSyle} href="https://github.com/jeremyben-meir/" target = "_blank">- Github</a>
        <a style={linkSyle} href = {Pdf} target = "_blank">- Resume</a>
      </div>

      <p style={subheaderSyle}>Contact</p>
      <div style={contentStyle}>
        <a>- Email: jsb459 "at" cornell "dot" edu</a>
        <a>- Phone: 917 697 3521</a>
      </div>

    </div>
  );
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default App;
