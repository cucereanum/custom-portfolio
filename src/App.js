import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Player } from "video-react";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <NavBar />
      <About />
    </div>
  );
}

export default App;
