import "./App.css";
import { useState, useEffect } from "react";
import { bio, sectioning } from "../src/assets/populate.js";
import * as styles from "../src/assets/styles.js";

function App() {
  const { width } = useWindowDimensions();

  const marg = width > 1100 ? "50%" : "80%";

  const role = (name, link, pos) => (
    <div style={styles.containerStyle}>
      <div style={styles.bulletStyle}>•</div>
      <div style={styles.contentStyle}>
        <a
          style={{ fontWeight: "bold", textDecoration: "none" }}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>{" "}
        {pos != null ? ":" : ""} {pos}
      </div>
    </div>
  );

  const subsection = (header) => (
    <div>
      <p style={styles.subheaderStyle}>{header}</p>
      <div style={styles.contentStyle}>
        {Object.entries(sectioning[header]).map((link, index) =>
          role(link[1]["title"], link[1]["link"], link[1]["pos"])
        )}
      </div>
    </div>
  );

  return (
    <div style={styles.divStyle(marg)} className="App">
      <p style={styles.headerStyle}>Jeremy Ben-Meir</p>

      <body>{bio}</body>

      {Object.entries(sectioning).map((link, index) => subsection(link[0]))}
    </div>
  );
}

export default App;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
