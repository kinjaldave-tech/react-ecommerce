import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="footer-top-first">
          <div className="container py-md-5 py-sm-4 py-3">
            <h2 className="footer-top-head-w3l font-weight-bold mb-2">
              Electronics :
            </h2>
            <p className="footer-main mb-4">
              If you're considering a new laptop, looking for a powerful new car
              stereo or shopping for a new HDTV, we make it easy to find exactly
              what you need at a price you can afford. We offer Every Day Low
              Prices on TVs, laptops, cell phones, tablets and iPads, video
              games, desktop computers, cameras and camcorders, audio, video and
              more.
            </p>

            <div className="row w3l-grids-footer border-top border-bottom py-sm-4 py-3">
              <div className="col-md-4 offer-footer">
                <div className="row">
                  <div className="col-4 icon-fot">
                    <i className="fas fa-dolly"></i>
                  </div>
                  <div className="col-8 text-form-footer">
                    <h3>Free Shipping</h3>
                    <p>on orders over $100</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 offer-footer my-md-0 my-4">
                <div className="row">
                  <div className="col-4 icon-fot">
                    <i className="fas fa-shipping-fast"></i>
                  </div>
                  <div className="col-8 text-form-footer">
                    <h3>Fast Delivery</h3>
                    <p>World Wide</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 offer-footer">
                <div className="row">
                  <div className="col-4 icon-fot">
                    <i className="far fa-thumbs-up"></i>
                  </div>
                  <div className="col-8 text-form-footer">
                    <h3>Big Choice</h3>
                    <p>of Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w3l-middlefooter-sec">
          <div className="container py-md-5 py-sm-4 py-3">
            <div className="row footer-info w3-agileits-info">
              <div className="col-md-3 col-sm-6 footer-grids">
                <h3 className="text-white font-weight-bold mb-3">Categories</h3>
                <ul>
                  <li className="mb-3">
                    <NavLink to="product.html">Mobiles </NavLink>
                  </li>
                  <li className="mb-3">
                    <NavLink to="product.html">Computers</NavLink>
                  </li>
                  <li className="mb-3">
                    <NavLink to="product.html">TV, Audio</NavLink>
                  </li>
                  <li className="mb-3">
                    <NavLink to="/product2">Smartphones</NavLink>
                  </li>
                  <li className="mb-3">
                    <NavLink to="product.html">Washing Machines</NavLink>
                  </li>
                  <li>
                    <NavLink to="/product2">Refrigerators</NavLink>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 col-sm-6 footer-grids mt-sm-0 mt-4">
                <h3 className="text-white font-weight-bold mb-3">
                  Quick Links
                </h3>
                <ul>
                  <li className="mb-3">
                    <NavLink to="about.html">About Us</NavLink>
                  </li>
                  <li className="mb-3">
                    <NavLink to="contact.html">Contact Us</NavLink>
                  </li>
                  <li className="mb-3">
                    <NavLink to="help.html">Help</NavLink>
                  </li>
                  <li className="mb-3">
                    <NavLink to="faqs.html">Faqs</NavLink>
                  </li>
                  <li className="mb-3">
                    <NavLink to="terms.html">Terms of use</NavLink>
                  </li>
                  <li>
                    <NavLink to="privacy.html">Privacy Policy</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 footer-grids mt-md-0 mt-4">
                <h3 className="text-white font-weight-bold mb-3">
                  Get in Touch
                </h3>
                <ul>
                  <li className="mb-3">
                    <i className="fas fa-map-marker"></i> 123 Sebastian, USA.
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-mobile"></i> 333 222 3333{" "}
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-phone"></i> +222 11 4444{" "}
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-envelope-open"></i>
                    <NavLink to="mailto:example@mail.com"> mail 1@example.com</NavLink>
                  </li>
                  <li>
                    <i className="fas fa-envelope-open"></i>
                    <NavLink to="mailto:example@mail.com"> mail 2@example.com</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 footer-grids w3l-agileits mt-md-0 mt-4">
                <h3 className="text-white font-weight-bold mb-3">Newsletter</h3>
                <p className="mb-3">Free Delivery on your first order!</p>
                <form action="#" method="post">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      required=""
                    />
                    <input type="submit" value="Go" />
                  </div>
                </form>

                <div className="footer-grids  w3l-socialmk mt-3">
                  <h3 className="text-white font-weight-bold mb-3">
                    Follow Us on
                  </h3>
                  <div className="social">
                    <ul>
                      <li>
                        <NavLink className="icon fb" to="#">
                          <i className="fab fa-facebook-f"></i>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="icon tw" to="#">
                          <i className="fab fa-twitter"></i>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="icon gp" to="#">
                          <i className="fab fa-google-plus-g"></i>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="agile-sometext py-md-5 py-sm-4 py-3">
          <div className="container">
            <div className="sub-some">
              <h5 className="font-weight-bold mb-2">Mobile & Tablets :</h5>
              <ul>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Android Phones
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Smartphones
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Feature Phones
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Unboxed Phones
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Refurbished Phones
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    {" "}
                    Tablets
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    CDMA Phones
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Value Added Services
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Sell Old
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Used Mobiles
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="sub-some mt-4">
              <h5 className="font-weight-bold mb-2">Computers :</h5>
              <ul>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Laptops{" "}
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Printers
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Routers
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Ink & Toner Cartridges
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Monitors
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Video Games
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Unboxed & Refurbished Laptops
                  </NavLink>
                </li>
                <li>
                  <NavLink to="product.html" className="border-right pr-2">
                    Assembled Desktops
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Data Cards
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="sub-some mt-4">
              <h5 className="font-weight-bold mb-2">
                TV, Audio & Large Appliances :
              </h5>
              <ul>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    TVs & DTH
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Home Theatre Systems
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Hidden Cameras & CCTVs
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Refrigerators
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Washing Machines
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    {" "}
                    Air Conditioners
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Cameras
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Speakers
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="sub-some mt-4">
              <h5 className="font-weight-bold mb-2">
                Mobile & Laptop Accessories :
              </h5>
              <ul>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Headphones
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Power Banks{" "}
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Backpacks
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Mobile Cases & Covers
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Pen Drives
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    External Hard Disks
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    {" "}
                    Mouse
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Smart Watches & Fitness Bands
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    MicroSD Cards
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="sub-some mt-4">
              <h5 className="font-weight-bold mb-2">Appliances :</h5>
              <ul>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Trimmers
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Hair Dryers
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Emergency Lights
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Water Purifiers{" "}
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Electric Kettles
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Hair Straighteners
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Induction Cooktops
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Sewing Machines
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    {" "}
                    Geysers
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="sub-some mt-4">
              <h5 className="font-weight-bold mb-2">
                Popular on Electro Store
              </h5>
              <ul>
                <li className="m-sm-1">
                  <NavLink to="product.html" className="border-right pr-2">
                    Offers & Coupons
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Couple Watches
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Gas Stoves
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    {" "}
                    Air Coolers
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Air Purifiers
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Headphones
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    {" "}
                    Headsets
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Pressure Cookers
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Sandwich Makers
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Air Friers
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Irons
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    LED TV
                  </NavLink>
                </li>
                <li className="m-sm-1">
                  <NavLink to="/product2" className="border-right pr-2">
                    Sandwich Makers
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="sub-some child-momu mt-4">
              <h5 className="font-weight-bold mb-3">Payment Method</h5>
              <ul>
                <li>
                  <img src="/assets/images/pay2.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay5.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay1.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay4.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay6.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay3.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay7.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay8.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay9.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="copy-right py-3">
        <div className="container">
          <p className="text-center text-white">
            © 2018 Electro Store. All rights reserved | Design by
            <NavLink to="http://w3layouts.com"> W3layouts.</NavLink>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
