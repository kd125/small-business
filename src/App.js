import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
