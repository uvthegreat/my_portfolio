import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

function App() {
  // custom cursor
  let [clickbool, setClickbool] = useState(false);
  useEffect(() => {
    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("mousedown", (e) => {
      setClickbool(true);
    });

    return () => document.removeEventListener("mousemove", updateCursor);
  }, []);

  useEffect(() => {
    if (clickbool) {
      setTimeout(() => {
        setClickbool(false);
      }, 300);
    }
  }, [clickbool]);

  const [cursorPosition, setCursorPosition] = useState({ y: 0, x: 0 });

  // update cursor position
  const updateCursor = (event) => {
    // console.log(event.clientX, " ", event.clientY);
    setCursorPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <>
      <div
        className={clickbool ? "custom-cursor zoom" : "custom-cursor"}
        style={{
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
        }}
      />
      <Header />
      <About />
      <Achievements />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
