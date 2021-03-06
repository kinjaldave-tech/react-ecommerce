import { Link } from "react-router-dom";
import React, { useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item item1 active">
            <div class="container">
              <div class="w3l-space-banner">
                <div class="carousel-caption p-lg-5 p-sm-4 p-3">
                  <p>
                    Get flat
                    <span>10%</span> Cashback
                  </p>
                  <h3 class="font-weight-bold pt-2 pb-lg-5 pb-4">
                    The
                    <span>Big</span>
                    Sale
                  </h3>
                  <Link class="button2" to="product.html">
                    Shop Now{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item item2">
            <div class="container">
              <div class="w3l-space-banner">
                <div class="carousel-caption p-lg-5 p-sm-4 p-3">
                  <p>
                    advanced
                    <span>Wireless</span> earbuds
                  </p>
                  <h3 class="font-weight-bold pt-2 pb-lg-5 pb-4">
                    Best
                    <span>Headphone</span>
                  </h3>
                  <Link class="button2" to="product.html">
                    Shop Now{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item item3">
            <div class="container">
              <div class="w3l-space-banner">
                <div class="carousel-caption p-lg-5 p-sm-4 p-3">
                  <p>
                    Get flat
                    <span>10%</span> Cashback
                  </p>
                  <h3 class="font-weight-bold pt-2 pb-lg-5 pb-4">
                    New
                    <span>Standard</span>
                  </h3>
                  <Link class="button2" to="product.html">
                    Shop Now{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item item4">
            <div class="container">
              <div class="w3l-space-banner">
                <div class="carousel-caption p-lg-5 p-sm-4 p-3">
                  <p>
                    Get Now
                    <span>40%</span> Discount
                  </p>
                  <h3 class="font-weight-bold pt-2 pb-lg-5 pb-4">
                    Today
                    <span>Discount</span>
                  </h3>
                  <Link class="button2" to="product.html">
                    Shop Now{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          class="carousel-control-prev"
          to="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </Link>
        <Link
          class="carousel-control-next"
          to="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </Link>
      </div>
      <div class="ads-grid py-sm-5 py-4">
        <div class="container py-xl-4 py-lg-2">
          <h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
            <span>O</span>ur
            <span>N</span>ew
            <span>P</span>roducts
          </h3>
          <div class="row">
            <div class="agileinfo-ads-display col-lg-9">
              <div class="wrapper">
                <div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                  <h3 class="heading-tittle text-center font-italic">
                    New Brand Mobiles
                  </h3>
                  <div class="row">
                    <div class="col-md-4 product-men mt-5">
                      <div class="men-pro-item simpleCart_shelfItem">
                        <div class="men-thumb-item text-center">
                          <img src="/assets/images/m1.jpg" alt="" />
                          <div class="men-cart-pro">
                            <div class="inner-men-cart-pro">
                              <Link
                                to="/single"
                                class="link-product-add-cart"
                              >
                                Quick View
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div class="item-info-product text-center border-top mt-4">
                          <h4 class="pt-1">
                            <Link to="/single">Samsung Galaxy J7</Link>
                          </h4>
                          <div class="info-product-price my-2">
                            <span class="item_price">$200.00</span>
                            <del>$280.00</del>
                          </div>
                          <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="Samsung Galaxy J7"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="200.00"
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  value="1.00"
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  value="USD"
                                />
                                <input type="hidden" name="return" value=" " />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  value=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  value="Add to cart"
                                  class="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 product-men mt-5">
                      <div class="men-pro-item simpleCart_shelfItem">
                        <div class="men-thumb-item text-center">
                          <img src="/assets/images/m2.jpg" alt="" />
                          <div class="men-cart-pro">
                            <div class="inner-men-cart-pro">
                              <Link
                                to="/single"
                                class="link-product-add-cart"
                              >
                                Quick View
                              </Link>
                            </div>
                          </div>
                          <span class="product-new-top">New</span>
                        </div>
                        <div class="item-info-product text-center border-top mt-4">
                          <h4 class="pt-1">
                            <Link to="/single">OPPO A37f</Link>
                          </h4>
                          <div class="info-product-price my-2">
                            <span class="item_price">$230.00</span>
                            <del>$250.00</del>
                          </div>
                          <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="OPPO A37f"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="230.00"
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  value="1.00"
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  value="USD"
                                />
                                <input type="hidden" name="return" value=" " />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  value=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  value="Add to cart"
                                  class="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 product-men mt-5">
                      <div class="men-pro-item simpleCart_shelfItem">
                        <div class="men-thumb-item text-center">
                          <img src="/assets/images/m3.jpg" alt="" />
                          <div class="men-cart-pro">
                            <div class="inner-men-cart-pro">
                              <Link
                                to="/single"
                                class="link-product-add-cart"
                              >
                                Quick View
                              </Link>
                            </div>
                          </div>
                          <span class="product-new-top">New</span>
                        </div>
                        <div class="item-info-product text-center border-top mt-4">
                          <h4 class="pt-1">
                            <Link to="/single">Apple iPhone X</Link>
                          </h4>
                          <div class="info-product-price my-2">
                            <span class="item_price">$280.00</span>
                            <del>$300.00</del>
                          </div>
                          <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="Apple iPhone X"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="280.00"
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  value="1.00"
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  value="USD"
                                />
                                <input type="hidden" name="return" value=" " />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  value=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  value="Add to cart"
                                  class="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                  <h3 class="heading-tittle text-center font-italic">
                    Tv & Audio
                  </h3>
                  <div class="row">
                    <div class="col-md-4 product-men mt-5">
                      <div class="men-pro-item simpleCart_shelfItem">
                        <div class="men-thumb-item text-center">
                          <img src="/assets/images/m4.jpg" alt="" />
                          <div class="men-cart-pro">
                            <div class="inner-men-cart-pro">
                              <Link
                                to="/single"
                                class="link-product-add-cart"
                              >
                                Quick View
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div class="item-info-product text-center border-top mt-4">
                          <h4 class="pt-1">
                            <Link to="/single">Sony 80 cm (32 inches)</Link>
                          </h4>
                          <div class="info-product-price my-2">
                            <span class="item_price">$320.00</span>
                            <del>$340.00</del>
                          </div>
                          <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="Sony 80 cm (32 inches)"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="320.00"
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  value="1.00"
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  value="USD"
                                />
                                <input type="hidden" name="return" value=" " />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  value=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  value="Add to cart"
                                  class="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 product-men mt-5">
                      <div class="men-pro-item simpleCart_shelfItem">
                        <div class="men-thumb-item text-center">
                          <img src="/assets/images/m5.jpg" alt="" />
                          <div class="men-cart-pro">
                            <div class="inner-men-cart-pro">
                              <Link
                                to="/single"
                                class="link-product-add-cart"
                              >
                                Quick View
                              </Link>
                            </div>
                          </div>
                          <span class="product-new-top">New</span>
                        </div>
                        <div class="item-info-product text-center border-top mt-4">
                          <h4 class="pt-1">
                            <Link to="/single">Artis Speaker</Link>
                          </h4>
                          <div class="info-product-price my-2">
                            <span class="item_price">$349.00</span>
                            <del>$399.00</del>
                          </div>
                          <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="Artis Speaker"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="349.00"
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  value="1.00"
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  value="USD"
                                />
                                <input type="hidden" name="return" value=" " />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  value=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  value="Add to cart"
                                  class="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 product-men mt-5">
                      <div class="men-pro-item simpleCart_shelfItem">
                        <div class="men-thumb-item text-center">
                          <img src="/assets/images/m6.jpg" alt="" />
                          <div class="men-cart-pro">
                            <div class="inner-men-cart-pro">
                              <Link
                                to="/single"
                                class="link-product-add-cart"
                              >
                                Quick View
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div class="item-info-product text-center border-top mt-4">
                          <h4 class="pt-1">
                            <Link to="/single">Philips Speakers</Link>
                          </h4>
                          <div class="info-product-price my-2">
                            <span class="item_price">$249.00</span>
                            <del>$300.00</del>
                          </div>
                          <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="Philips Speakers"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="249.00"
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  value="1.00"
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  value="USD"
                                />
                                <input type="hidden" name="return" value=" " />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  value=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  value="Add to cart"
                                  class="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="product-sec1 product-sec2 px-sm-5 px-3">
                  <div class="row">
                    <h3 class="col-md-4 effect-bg">Summer Carnival</h3>
                    <p class="w3l-nut-middle">Get Extra 10% Off</p>
                    <div class="col-md-8 bg-right-nut">
                      <img src="/assets/images/image1.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
                  <h3 class="heading-tittle text-center font-italic">
                    Large Appliances
                  </h3>
                  <div class="row">
                    <div class="col-md-4 product-men mt-5">
                      <div class="men-pro-item simpleCart_shelfItem">
                        <div class="men-thumb-item text-center">
                          <img src="/assets/images/m7.jpg" alt="" />
                          <div class="men-cart-pro">
                            <div class="inner-men-cart-pro">
                              <Link
                                to="/single"
                                class="link-product-add-cart"
                              >
                                Quick View
                              </Link>
                            </div>
                          </div>
                        </div>
                        <span class="product-new-top">New</span>
                        <div class="item-info-product text-center border-top mt-4">
                          <h4 class="pt-1">
                            <Link to="/single">Whirlpool 245</Link>
                          </h4>
                          <div class="info-product-price my-2">
                            <span class="item_price">$230.00</span>
                            <del>$280.00</del>
                          </div>
                          <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="Whirlpool 245"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="230.00"
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  value="1.00"
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  value="USD"
                                />
                                <input type="hidden" name="return" value=" " />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  value=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  value="Add to cart"
                                  class="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 product-men mt-5">
                      <div class="men-pro-item simpleCart_shelfItem">
                        <div class="men-thumb-item text-center">
                          <img src="/assets/images/m8.jpg" alt="" />
                          <div class="men-cart-pro">
                            <div class="inner-men-cart-pro">
                              <Link
                                to="/single"
                                class="link-product-add-cart"
                              >
                                Quick View
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div class="item-info-product text-center border-top mt-4">
                          <h4 class="pt-1">
                            <Link to="/single">BPL Washing Machine</Link>
                          </h4>
                          <div class="info-product-price my-2">
                            <span class="item_price">$180.00</span>
                            <del>$200.00</del>
                          </div>
                          <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="BPL Washing Machine"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="180.00"
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  value="1.00"
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  value="USD"
                                />
                                <input type="hidden" name="return" value=" " />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  value=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  value="Add to cart"
                                  class="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 product-men mt-5">
                      <div class="men-pro-item simpleCart_shelfItem">
                        <div class="men-thumb-item text-center">
                          <img src="/assets/images/m9.jpg" alt="" />
                          <div class="men-cart-pro">
                            <div class="inner-men-cart-pro">
                              <Link
                                to="/single"
                                class="link-product-add-cart"
                              >
                                Quick View
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div class="item-info-product text-center border-top mt-4">
                          <h4 class="pt-1">
                            <Link to="/single">Microwave Oven</Link>
                          </h4>
                          <div class="info-product-price my-2">
                            <span class="item_price">$199.00</span>
                            <del>$299.00</del>
                          </div>
                          <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="Microwave Oven"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="199.00"
                                />
                                <input
                                  type="hidden"
                                  name="discount_amount"
                                  value="1.00"
                                />
                                <input
                                  type="hidden"
                                  name="currency_code"
                                  value="USD"
                                />
                                <input type="hidden" name="return" value=" " />
                                <input
                                  type="hidden"
                                  name="cancel_return"
                                  value=" "
                                />
                                <input
                                  type="submit"
                                  name="submit"
                                  value="Add to cart"
                                  class="button btn"
                                />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 mt-lg-0 mt-4 p-lg-0">
              <div class="side-bar p-sm-4 p-3">
                <div class="search-hotel border-bottom py-2">
                  <h3 class="agileits-sear-head mb-3">Search Here..</h3>
                  <form action="#" method="post">
                    <input
                      type="search"
                      placeholder="Product name..."
                      name="search"
                      required=""
                    />
                    <input type="submit" value=" " />
                  </form>
                </div>
                <div class="range border-bottom py-2">
                  <h3 class="agileits-sear-head mb-3">Price</h3>
                  <div class="w3l-range">
                    <ul>
                      <li>
                        <Link to="#">Under $1,000</Link>
                      </li>
                      <li class="my-1">
                        <Link to="#">$1,000 - $5,000</Link>
                      </li>
                      <li>
                        <Link to="#">$5,000 - $10,000</Link>
                      </li>
                      <li class="my-1">
                        <Link to="#">$10,000 - $20,000</Link>
                      </li>
                      <li>
                        <Link to="#">$20,000 $30,000</Link>
                      </li>
                      <li class="mt-1">
                        <Link to="#">Over $30,000</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="left-side border-bottom py-2">
                  <h3 class="agileits-sear-head mb-3">Discount</h3>
                  <ul>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">5% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">10% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">20% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">30% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">50% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">60% or More</span>
                    </li>
                  </ul>
                </div>
                <div class="customer-rev border-bottom left-side py-2">
                  <h3 class="agileits-sear-head mb-3">Customer Review</h3>
                  <ul>
                    <li>
                      <Link to="#">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>5.0</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>4.0</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half"></i>
                        <span>3.5</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>3.0</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half"></i>
                        <span>2.5</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="left-side border-bottom py-2">
                  <h3 class="agileits-sear-head mb-3">Electronics</h3>
                  <ul>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">Accessories</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">Cameras & Photography</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">Car & Vehicle Electronics</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">Computers & Accessories</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">GPS & Accessories</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">Headphones</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">Home Audio</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">Home Theater, TV & Video</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">Mobiles & Accessories</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">Portable Media Players</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">Tablets</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">Telephones & Accessories</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">Wearable Technology</span>
                    </li>
                  </ul>
                </div>
                <div class="left-side border-bottom py-2">
                  <h3 class="agileits-sear-head mb-3">Cash On Delivery</h3>
                  <ul>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">Eligible for Cash On Delivery</span>
                    </li>
                  </ul>
                </div>
                <div class="left-side border-bottom py-2">
                  <h3 class="agileits-sear-head mb-3">New Arrivals</h3>
                  <ul>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">Last 30 days</span>
                    </li>
                    <li>
                      <input type="checkbox" class="checked" />
                      <span class="span">Last 90 days</span>
                    </li>
                  </ul>
                </div>
                <div class="f-grid py-2">
                  <h3 class="agileits-sear-head mb-3">Best Seller</h3>
                  <div class="box-scroll">
                    <div class="scroll">
                      <div class="row">
                        <div class="col-lg-3 col-sm-2 col-3 left-mar">
                          <img src="/assets/images/k1.jpg" alt="" class="img-fluid" />
                        </div>
                        <div class="col-lg-9 col-sm-10 col-9 w3_mvd">
                          <Link to="">
                            Samsung Galaxy On7 Prime (Gold, 4GB RAM + 64GB
                            Memory)
                          </Link>
                          <Link to="" class="price-mar mt-2">
                            $12,990.00
                          </Link>
                        </div>
                      </div>
                      <div class="row my-4">
                        <div class="col-lg-3 col-sm-2 col-3 left-mar">
                          <img src="/assets/images/k2.jpg" alt="" class="img-fluid" />
                        </div>
                        <div class="col-lg-9 col-sm-10 col-9 w3_mvd">
                          <Link to="">
                            Haier 195 L 4 Star Direct-Cool Single Door
                            Refrigerator
                          </Link>
                          <Link to="" class="price-mar mt-2">
                            $12,499.00
                          </Link>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-3 col-sm-2 col-3 left-mar">
                          <img src="/assets/images/k3.jpg" alt="" class="img-fluid" />
                        </div>
                        <div class="col-lg-9 col-sm-10 col-9 w3_mvd">
                          <Link to="">
                            Ambrane 13000 mAh Power Bank (P-1310 Premium)
                          </Link>
                          <Link to="" class="price-mar mt-2">
                            $1,199.00{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="join-w3l1 py-sm-5 py-4">
        <div class="container py-xl-4 py-lg-2">
          <div class="row">
            <div class="col-lg-6">
              <div class="join-agile text-left p-4">
                <div class="row">
                  <div class="col-sm-7 offer-name">
                    <h6>Smooth, Rich & Loud Audio</h6>
                    <h4 class="mt-2 mb-3">Branded Headphones</h4>
                    <p>Sale up to 25% off all in store</p>
                  </div>
                  <div class="col-sm-5 offerimg-w3l">
                    <img src="/assets/images/off1.png" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mt-lg-0 mt-5">
              <div class="join-agile text-left p-4">
                <div class="row ">
                  <div class="col-sm-7 offer-name">
                    <h6>A Bigger Phone</h6>
                    <h4 class="mt-2 mb-3">Smart Phones 5</h4>
                    <p>Free shipping order over $100</p>
                  </div>
                  <div class="col-sm-5 offerimg-w3l">
                    <img src="/assets/images/off2.png" alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;