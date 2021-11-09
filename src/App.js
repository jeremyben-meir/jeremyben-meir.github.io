import './App.css';
import Pdf from '../src/assets/Ben-Meir_Resume.pdf';
import { useState, useEffect } from 'react';

function App() {

  var bio = `Hi, I am Jeremy Ben-Meir, a fourth-year at Cornell University, majoring in Computer Science, 
  and minoring in Real Estate and Data Science. I am interested in machine learning, data science,
  real estate investing, and blockchain applications.
  `
  const { height, width } = useWindowDimensions();
  const marg = width > 1000 ? '50%' : "80%";

  var divStyle = {
    width:marg,
    margin:"auto",
    textAlign: 'left',
    marginTop: 30,
    marginBottom: 30,
    
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
  var subtitleStyle = {
    fontWeight: 'bold',
    textDecoration: 'none'
  };


  var sectioning = {
    "Current Experience": [
      {
        "title": "Independent Real Estate Research",
        "link": "https://jeremyben-meir.github.io/open-storefront-directory/",
        "pos": "Lead Data Scientist"
      }
    ],
    "Previous Experiences": [
      {
        "title": "Amazon",
        "link": null,
        "pos": "Software Development Engineer Intern"
      },{
        "title": "Survision",
        "link": null,
        "pos": "Application Developer"
      },{
        "title": "Cornell Robotic Personal Assistants Laboratory",
        "link": null,
        "pos": "Research Assistant"
      }
    ],
    "Relevant Links": [
      {
        "title": "LinkedIn",
        "link": "https://www.linkedin.com/in/jeremy-ben-meir/",
        "pos": null
      },{
        "title": "GitHub",
        "link": "https://github.com/jeremyben-meir/",
        "pos": null
      },{
        "title": "Resume",
        "link": Pdf,
        "pos": null
      }
    ],
    "Contact": [
      {
        "title": "Email",
        "link": null,
        "pos": "jsb459 \"at\" cornell \"dot\" edu"
      },
      {
        "title": "Phone",
        "link": null,
        "pos": "917 697 3521"
      }
    ],
    

  }

  const role = (name, link, pos) => (
    <div>
    - <a style={subtitleStyle} href={link} target = "_blank">{name}</a> {pos != null ? ":" : ""} {pos}
    </div>
  )

  const subsection = (header) => (
    <div>
    <p style={subheaderSyle}>{header}</p>
    <div style={contentStyle}>
      {Object.entries(sectioning[header]).map((link, index) => ( role(link[1]['title'],link[1]['link'],link[1]['pos']) ))}
    </div>
    </div>

  )

  return (
    <div style={divStyle} className="App">

      <p style={headerSyle}>Jeremy Ben-Meir</p>

      <a>{bio}</a>

      {Object.entries(sectioning).map((link, index) => ( subsection(link[0]) ))}

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
