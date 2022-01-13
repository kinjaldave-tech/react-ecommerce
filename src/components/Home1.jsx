import { Link } from "react-router-dom";
import { ReactModal, openModal } from "react-modal";

import data from "./Data.json";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchProduct, dropProduct, disAllProducts } from "../actions/Search";

const Home1 = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [dropTerm, setdropTerm] = useState("");
  const [minTerm, setminTerm] = useState("");
  const [maxTerm, setmaxTerm] = useState("");

  const dispatch = useDispatch();
  const response = useSelector((state) => state.search.filter);

  useEffect(() => {
    dispatch(disAllProducts());
  }, []);

  const [filterdata, setfilterdata] = useState();

  useEffect(() => {
    if (response) {
      setfilterdata(response);
    }
  }, [response]);

  useEffect(() => {
    if (dropTerm) {
      dispatch(dropProduct(dropTerm));
    }
  }, [dropTerm]);

  // useEffect(() => {
  //   if (priceTerm) {
  //     dispatch(dropProduct(priceTerm));
  //   }
  // }, [priceTerm]);

  return (
    <>
      <div className="container">
        <div className="row">
          {/* // search */}
          <div className="col-md-6 mt-3 agileits_search">
            <form className="form-inline" action="#" method="post">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                required
                value={searchTerm}
                onChange={(event) => setsearchTerm(event.target.value)}
              />
              <button
                type="button"
                className="btn my-2 my-sm-0"
                onClick={() => dispatch(searchProduct(searchTerm))}
              >
                Search
              </button>
            </form>
          </div>
          {/* //dropdown */}
          <div className="col-md-2 mt-3">
            <div className="agileits-navi_search">
              <form action="#" method="post">
                <select
                  id="agileinfo-nav_search"
                  name="agileinfo_search"
                  className="border"
                  required
                  value={dropTerm}
                  onChange={(event) => setdropTerm(event.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="Mens">Mens</option>
                  <option value="womens">Womens</option>
                  <option value="jewelery">Jewellery</option>
                </select>
              </form>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          {/* //filter price */}
        </div>
        <div className="row">
          <div className="form-group col-md-2">
            <label>Price</label>
            <input
              className="form-control mr-sm-2 mb-2"
              type="search"
              placeholder="min"
              value={minTerm}
              onChange={(event) => setminTerm(event.target.value)}
            />
            <input
              className="form-control mr-sm-2 mb-2"
              type="search"
              placeholder="max"
              value={maxTerm}
              onChange={(event) => setmaxTerm(event.target.value)}
            />
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          position: "relative",
        }}
      >
        <div className="row">
          {response.length &&
            response
              .filter((curElement) => {
                if (minTerm == "" && maxTerm == "") {
                  return data;
                } else if (curElement.price > minTerm) {
                  return curElement;
                } else if (
                  curElement.price > minTerm &&
                  curElement.price < maxTerm
                ) {
                  return curElement;
                }
              })
              .map((curElement) => (
                <div className="col-lg-4 mt-4 mb-4">
                  <div
                    className="card mr-3"
                    style={{
                      position: "relative",
                      width: "300px",
                      height: "650px",
                    }}
                  >
                    <Link to={"/single2/" + curElement.id}>
                      <img
                        className="card-img-top"
                        src={curElement.image}
                        alt="Card image cap"
                        style={{
                          height: "300px",
                          width: "200px",
                          objectFit: "contain",
                        }}
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{curElement.title}</h5>
                      <h6 className="card-text">{curElement.category}</h6>
                      <p className="card-text">{curElement.description}</p>
                      <h5 className="card-text">{`$ ` + curElement.price}</h5>

                      <Link
                        to="#"
                        className="btn btn-primary"
                        style={{ position: "absolute", bottom: "5px" }}
                      >
                        Buy now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Home1;
