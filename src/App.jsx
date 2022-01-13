import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider, useDispatch } from "react-redux";
import thunk from "redux-thunk";

import Common from "./layout/Common";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Product2 from "./components/Product2";
import Single from "./components/Single";
import Payment from "./components/Payment";
import Single2 from "./components/Single2";
import Checkout from "./components/Checkout";
import Home1 from "./components/Home1";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Common>
            <Routes>
              <Route path="/" exact element={<Home1 />} />
              <Route path="/h" exact element={<Home />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/product" exact element={<Product />} />
              <Route path="/product2" exact element={<Product2 />} />
              <Route path="/single" exact element={<Single />} />
              <Route path="/single2/:id" exact element={<Single2 />} />
              <Route path="/payment" exact element={<Payment />} />
              <Route path="/payment" exact element={<Checkout />} />
            </Routes>
          </Common>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
