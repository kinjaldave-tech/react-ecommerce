import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Common from "./layout/Common";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Produuct2 from "./components/Product2";

function App() {
  return (
      <div className="App">
      <BrowserRouter>
        <Common>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/product2" exact element={<Produuct2 />} />
          </Routes>
        </Common>
      </BrowserRouter>
      </div>
   );
}

export default App;
