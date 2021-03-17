import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";

import About from "./components/about/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
