import { BrowserRouter, Route, Routes } from "react-router-dom";

import Common from "./layout/Common";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Product2 from "./components/Product2";
import Single from "./components/Single";
import Payment from "./components/Payment";

function App() {
  return (
      <div className="App">
      <BrowserRouter>
        <Common>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/product" exact element={<Product />} />
            <Route path="/product2" exact element={<Product2 />} />
            <Route path="/single" exact element={<Single />} />
            <Route path="/payment" exact element={<Payment />} />
          </Routes>
        </Common>
      </BrowserRouter>
      </div>
   );
}

export default App;
