import { Link } from "react-router-dom";
import data from "./Data.json";
import React, { useState } from "react";

const Home1 = () => {
  const [dropTerm, setdropTerm] = useState("");

  return (
    <>
      {/* //dropdown */}
      <div className="col-md-2 mt-4">
        <div className="agileits-navi_search">
          <form action="#" method="post">
            <select
              id="agileinfo-nav_search"
              name="agileinfo_search"
              className="border"
              required=""
              onChange={(event) => setdropTerm(event.target.value)}
            >
              <option value="">All Categories</option>
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
      <div className="container" style={{
                      position: "relative"}}>
        <div className="row">
          {data
            .filter((curElement) => {
              if (dropTerm == "") {
                return curElement;
              } else if (curElement.category.includes(dropTerm)) {
                return curElement;
              }
            })
            .map((curElement) => {
              return (
                <div className="col-lg-4 mt-4 mb-4">
                  <div
                    className="card mr-3"
                    style={{
                      position: "relative",
                      width: "300px",
                      height: "650px"
                    }}
                  >
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
                    <div className="card-body">
                      <h5 className="card-title">{curElement.title}</h5>
                      <h6 className="card-text">{curElement.category}</h6>
                      <p className="card-text">{curElement.description}</p>
                      <Link to="#" className="btn btn-primary" style={{position: "absolute", bottom: "3px"}}>
                        Buy now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home1;