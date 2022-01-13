import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../actions/Search";

const Single2 = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  console.log(id);
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  const response = useSelector((state) => state.search.singleProduct);

  return (
    <>
      <div class="page-head_agile_info_w3l"></div>

      <div class="services-breadcrumb">
        <div class="agile_inner_breadcrumb">
          <div class="container">
            <ul class="w3_short">
              <li>
                <a href="/">Home</a>
                <i>|</i>
              </li>
              <li>Single Product 2</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="banner-bootom-w3-agileits py-5">
        <div class="container py-xl-4 py-lg-2">
          <h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
            <span>S</span>ingle
            <span>P</span>age
          </h3>
          <div className="container">
            {response.length &&
              response.map((curElement) => (
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
      </div>
    </>
  );
};

export default Single2;
