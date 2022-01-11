import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div>
          <div className="agile-main-top">
            <div className="container-fluid">
              <div className="row main-top-w3l py-2">
                <div className="col-lg-4 header-most-top">
                  <p className="text-white text-lg-left text-center">
                    Offer Zone Top Deals & Discounts
                    <i className="fas fa-shopping-cart ml-1"></i>
                  </p>
                </div>
                <div className="col-lg-8 header-right mt-lg-0 mt-2">
                  <ul>
                    <li className="text-center border-right text-white">
                      <NavLink
                        className="play-icon popup-with-zoom-anim text-white"
                        to="#small-dialog1"
                      >
                        <i className="fas fa-map-marker mr-2"></i>Select
                        Location
                      </NavLink>
                    </li>
                    <li className="text-center border-right text-white">
                      <NavLink
                        to="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        className="text-white"
                      >
                        <i className="fas fa-truck mr-2"></i>Track Order
                      </NavLink>
                    </li>
                    <li className="text-center border-right text-white">
                      <i className="fas fa-phone mr-2"></i> 001 234 5678
                    </li>
                    <li className="text-center border-right text-white">
                      <NavLink
                        to="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        className="text-white"
                      >
                        <i className="fas fa-sign-in-alt mr-2"></i> Log In{" "}
                      </NavLink>
                    </li>
                    <li className="text-center text-white">
                      <NavLink
                        to="#"
                        data-toggle="modal"
                        data-target="#exampleModal2"
                        className="text-white"
                      >
                        <i className="fas fa-sign-out-alt mr-2"></i>Register{" "}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div id="small-dialog1" className="mfp-hide">
            <div className="select-city">
              <h3>
                <i className="fas fa-map-marker"></i> Please Select Your
                Location
              </h3>
              <select className="list_of_cities">
                <optgroup label="Popular Cities">
                  <option selected style={{ color: "none" }}>
                    Select City
                  </option>
                  <option>Birmingham</option>
                  <option>Anchorage</option>
                  <option>Phoenix</option>
                  <option>Little Rock</option>
                  <option>Los Angeles</option>
                  <option>Denver</option>
                  <option>Bridgeport</option>
                  <option>Wilmington</option>
                  <option>Jacksonville</option>
                  <option>Atlanta</option>
                  <option>Honolulu</option>
                  <option>Boise</option>
                  <option>Chicago</option>
                  <option>Indianapolis</option>
                </optgroup>
                <optgroup label="Alabama">
                  <option>Birmingham</option>
                  <option>Montgomery</option>
                  <option>Mobile</option>
                  <option>Huntsville</option>
                  <option>Tuscaloosa</option>
                </optgroup>
                <optgroup label="Alaska">
                  <option>Anchorage</option>
                  <option>Fairbanks</option>
                  <option>Juneau</option>
                  <option>Sitka</option>
                  <option>Ketchikan</option>
                </optgroup>
                <optgroup label="Arizona">
                  <option>Phoenix</option>
                  <option>Tucson</option>
                  <option>Mesa</option>
                  <option>Chandler</option>
                  <option>Glendale</option>
                </optgroup>
                <optgroup label="Arkansas">
                  <option>Little Rock</option>
                  <option>Fort Smith</option>
                  <option>Fayetteville</option>
                  <option>Springdale</option>
                  <option>Jonesboro</option>
                </optgroup>
                <optgroup label="California">
                  <option>Los Angeles</option>
                  <option>San Diego</option>
                  <option>San Jose</option>
                  <option>San Francisco</option>
                  <option>Fresno</option>
                </optgroup>
                <optgroup label="Colorado">
                  <option>Denver</option>
                  <option>Colorado</option>
                  <option>Aurora</option>
                  <option>Fort Collins</option>
                  <option>Lakewood</option>
                </optgroup>
                <optgroup label="Connecticut">
                  <option>Bridgeport</option>
                  <option>New Haven</option>
                  <option>Hartford</option>
                  <option>Stamford</option>
                  <option>Waterbury</option>
                </optgroup>
                <optgroup label="Delaware">
                  <option>Wilmington</option>
                  <option>Dover</option>
                  <option>Newark</option>
                  <option>Bear</option>
                  <option>Middletown</option>
                </optgroup>
                <optgroup label="Florida">
                  <option>Jacksonville</option>
                  <option>Miami</option>
                  <option>Tampa</option>
                  <option>St. Petersburg</option>
                  <option>Orlando</option>
                </optgroup>
                <optgroup label="Georgia">
                  <option>Atlanta</option>
                  <option>Augusta</option>
                  <option>Columbus</option>
                  <option>Savannah</option>
                  <option>Athens</option>
                </optgroup>
                <optgroup label="Hawaii">
                  <option>Honolulu</option>
                  <option>Pearl City</option>
                  <option>Hilo</option>
                  <option>Kailua</option>
                  <option>Waipahu</option>
                </optgroup>
                <optgroup label="Idaho">
                  <option>Boise</option>
                  <option>Nampa</option>
                  <option>Meridian</option>
                  <option>Idaho Falls</option>
                  <option>Pocatello</option>
                </optgroup>
                <optgroup label="Illinois">
                  <option>Chicago</option>
                  <option>Aurora</option>
                  <option>Rockford</option>
                  <option>Joliet</option>
                  <option>Naperville</option>
                </optgroup>
                <optgroup label="Indiana">
                  <option>Indianapolis</option>
                  <option>Fort Wayne</option>
                  <option>Evansville</option>
                  <option>South Bend</option>
                  <option>Hammond</option>
                </optgroup>
                <optgroup label="Iowa">
                  <option>Des Moines</option>
                  <option>Cedar Rapids</option>
                  <option>Davenport</option>
                  <option>Sioux City</option>
                  <option>Waterloo</option>
                </optgroup>
                <optgroup label="Kansas">
                  <option>Wichita</option>
                  <option>Overland Park</option>
                  <option>Kansas City</option>
                  <option>Topeka</option>
                  <option>Olathe </option>
                </optgroup>
                <optgroup label="Kentucky">
                  <option>Louisville</option>
                  <option>Lexington</option>
                  <option>Bowling Green</option>
                  <option>Owensboro</option>
                  <option>Covington</option>
                </optgroup>
                <optgroup label="Louisiana">
                  <option>New Orleans</option>
                  <option>Baton Rouge</option>
                  <option>Shreveport</option>
                  <option>Metairie</option>
                  <option>Lafayette</option>
                </optgroup>
                <optgroup label="Maine">
                  <option>Portland</option>
                  <option>Lewiston</option>
                  <option>Bangor</option>
                  <option>South Portland</option>
                  <option>Auburn</option>
                </optgroup>
                <optgroup label="Maryland">
                  <option>Baltimore</option>
                  <option>Frederick</option>
                  <option>Rockville</option>
                  <option>Gaithersburg</option>
                  <option>Bowie</option>
                </optgroup>
                <optgroup label="Massachusetts">
                  <option>Boston</option>
                  <option>Worcester</option>
                  <option>Springfield</option>
                  <option>Lowell</option>
                  <option>Cambridge</option>
                </optgroup>
                <optgroup label="Michigan">
                  <option>Detroit</option>
                  <option>Grand Rapids</option>
                  <option>Warren</option>
                  <option>Sterling Heights</option>
                  <option>Lansing</option>
                </optgroup>
                <optgroup label="Minnesota">
                  <option>Minneapolis</option>
                  <option>St. Paul</option>
                  <option>Rochester</option>
                  <option>Duluth</option>
                  <option>Bloomington</option>
                </optgroup>
                <optgroup label="Mississippi">
                  <option>Jackson</option>
                  <option>Gulfport</option>
                  <option>Southaven</option>
                  <option>Hattiesburg</option>
                  <option>Biloxi</option>
                </optgroup>
                <optgroup label="Missouri">
                  <option>Kansas City</option>
                  <option>St. Louis</option>
                  <option>Springfield</option>
                  <option>Independence</option>
                  <option>Columbia</option>
                </optgroup>
                <optgroup label="Montana">
                  <option>Billings</option>
                  <option>Missoula</option>
                  <option>Great Falls</option>
                  <option>Bozeman</option>
                  <option>Butte-Silver Bow</option>
                </optgroup>
                <optgroup label="Nebraska">
                  <option>Omaha</option>
                  <option>Lincoln</option>
                  <option>Bellevue</option>
                  <option>Grand Island</option>
                  <option>Kearney</option>
                </optgroup>
                <optgroup label="Nevada">
                  <option>Las Vegas</option>
                  <option>Henderson</option>
                  <option>North Las Vegas</option>
                  <option>Reno</option>
                  <option>Sunrise Manor</option>
                </optgroup>
                <optgroup label="New Hampshire">
                  <option>Manchesters</option>
                  <option>Nashua</option>
                  <option>Concord</option>
                  <option>Dover</option>
                  <option>Rochester</option>
                </optgroup>
                <optgroup label="New Jersey">
                  <option>Newark</option>
                  <option>Jersey City</option>
                  <option>Paterson</option>
                  <option>Elizabeth</option>
                  <option>Edison</option>
                </optgroup>
                <optgroup label="New Mexico">
                  <option>Albuquerque</option>
                  <option>Las Cruces</option>
                  <option>Rio Rancho</option>
                  <option>Santa Fe</option>
                  <option>Roswell</option>
                </optgroup>
                <optgroup label="New York">
                  <option>New York</option>
                  <option>Buffalo</option>
                  <option>Rochester</option>
                  <option>Yonkers</option>
                  <option>Syracuse</option>
                </optgroup>
                <optgroup label="North Carolina">
                  <option>Charlotte</option>
                  <option>Raleigh</option>
                  <option>Greensboro</option>
                  <option>Winston-Salem</option>
                  <option>Durham</option>
                </optgroup>
                <optgroup label="North Dakota">
                  <option>Fargo</option>
                  <option>Bismarck</option>
                  <option>Grand Forks</option>
                  <option>Minot</option>
                  <option>West Fargo</option>
                </optgroup>
                <optgroup label="Ohio">
                  <option>Columbus</option>
                  <option>Cleveland</option>
                  <option>Cincinnati</option>
                  <option>Toledo</option>
                  <option>Akron</option>
                </optgroup>
                <optgroup label="Oklahoma">
                  <option>Oklahoma City</option>
                  <option>Tulsa</option>
                  <option>Norman</option>
                  <option>Broken Arrow</option>
                  <option>Lawton</option>
                </optgroup>
                <optgroup label="Oregon">
                  <option>Portland</option>
                  <option>Eugene</option>
                  <option>Salem</option>
                  <option>Gresham</option>
                  <option>Hillsboro</option>
                </optgroup>
                <optgroup label="Pennsylvania">
                  <option>Philadelphia</option>
                  <option>Pittsburgh</option>
                  <option>Allentown</option>
                  <option>Erie</option>
                  <option>Reading</option>
                </optgroup>
                <optgroup label="Rhode Island">
                  <option>Providence</option>
                  <option>Warwick</option>
                  <option>Cranston</option>
                  <option>Pawtucket</option>
                  <option>East Providence</option>
                </optgroup>
                <optgroup label="South Carolina">
                  <option>Columbia</option>
                  <option>Charleston</option>
                  <option>North Charleston</option>
                  <option>Mount Pleasant</option>
                  <option>Rock Hill</option>
                </optgroup>
                <optgroup label="South Dakota">
                  <option>Sioux Falls</option>
                  <option>Rapid City</option>
                  <option>Aberdeen</option>
                  <option>Brookings</option>
                  <option>Watertown</option>
                </optgroup>
                <optgroup label="Tennessee">
                  <option>Memphis</option>
                  <option>Nashville</option>
                  <option>Knoxville</option>
                  <option>Chattanooga</option>
                  <option>Clarksville</option>
                </optgroup>
                <optgroup label="Texas">
                  <option>Houston</option>
                  <option>San Antonio</option>
                  <option>Dallas</option>
                  <option>Austin</option>
                  <option>Fort Worth</option>
                </optgroup>
                <optgroup label="Utah">
                  <option>Salt Lake City</option>
                  <option>West Valley City</option>
                  <option>Provo</option>
                  <option>West Jordan</option>
                  <option>Orem</option>
                </optgroup>
                <optgroup label="Vermont">
                  <option>Burlington</option>
                  <option>Essex</option>
                  <option>South Burlington</option>
                  <option>Colchester</option>
                  <option>Rutland</option>
                </optgroup>
                <optgroup label="Virginia">
                  <option>Virginia Beach</option>
                  <option>Norfolk</option>
                  <option>Chesapeake</option>
                  <option>Arlington</option>
                  <option>Richmond</option>
                </optgroup>
                <optgroup label="Washington">
                  <option>Seattle</option>
                  <option>Spokane</option>
                  <option>Tacoma</option>
                  <option>Vancouver</option>
                  <option>Bellevue</option>
                </optgroup>
                <optgroup label="West Virginia">
                  <option>Charleston</option>
                  <option>Huntington</option>
                  <option>Parkersburg</option>
                  <option>Morgantown</option>
                  <option>Wheeling</option>
                </optgroup>
                <optgroup label="Wisconsin">
                  <option>Milwaukee</option>
                  <option>Madison</option>
                  <option>Green Bay</option>
                  <option>Kenosha</option>
                  <option>Racine</option>
                </optgroup>
                <optgroup label="Wyoming">
                  <option>Cheyenne</option>
                  <option>Casper</option>
                  <option>Laramie</option>
                  <option>Gillette</option>
                  <option>Rock Springs</option>
                </optgroup>
              </select>
              <div className="clearfix"></div>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-center">Log In</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form action="#" method="post">
                    <div className="form-group">
                      <label className="col-form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=" "
                        name="Name"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder=" "
                        name="Password"
                        required=""
                      />
                    </div>
                    <div className="right-w3l">
                      <input
                        type="submit"
                        className="form-control"
                        value="Log in"
                      />
                    </div>
                    <div className="sub-w3l">
                      <div className="custom-control custom-checkbox mr-sm-2">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customControlAutosizing"
                        />
                        <label
                          className="custom-control-label"
                          for="customControlAutosizing"
                        >
                          Remember me?
                        </label>
                      </div>
                    </div>
                    <p className="text-center dont-do mt-3">
                      Don't have an account?
                      <NavLink
                        to="#"
                        data-toggle="modal"
                        data-target="#exampleModal2"
                      >
                        Register Now
                      </NavLink>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal2"
            tabindex="-1"
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Register</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form action="#" method="post">
                    <div className="form-group">
                      <label className="col-form-label">Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=" "
                        name="Name"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder=" "
                        name="Email"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder=" "
                        name="Password"
                        id="password1"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <label className="col-form-label">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder=" "
                        name="Confirm Password"
                        id="password2"
                        required=""
                      />
                    </div>
                    <div className="right-w3l">
                      <input
                        type="submit"
                        className="form-control"
                        value="Register"
                      />
                    </div>
                    <div className="sub-w3l">
                      <div className="custom-control custom-checkbox mr-sm-2">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customControlAutosizing2"
                        />
                        <label
                          className="custom-control-label"
                          for="customControlAutosizing2"
                        >
                          I Accept to the Terms & Conditions
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bot">
            <div className="container">
              <div className="row header-bot_inner_wthreeinfo_header_mid m-auto">
                <div className="col-md-3 logo_agile">
                  <h1 className="text-center">
                    <NavLink
                      to="/"
                      className="font-weight-bold font-italic"
                    >
                      <img
                        src="/assets/images/logo2.png"
                        alt=" "
                        className="img-fluid"
                      />
                      Clothing Store
                    </NavLink>
                  </h1>
                </div>
                <div className="col-md-9 header mt-4 mb-md-0 mb-4">
                  <div className="row">
                    <div className="col-10 agileits_search">
                      <form className="form-inline" action="#" method="post">
                        <input
                          className="form-control mr-sm-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                          required
                        />
                        <button className="btn my-2 my-sm-0" type="submit">
                          Search
                        </button>
                      </form>
                    </div>

                    <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
                      <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                        <form action="#" method="post" className="last">
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="display" value="1" />
                          <button
                            className="btn w3view-cart"
                            type="submit"
                            name="submit"
                            value=""
                          >
                            <i className="fas fa-cart-arrow-down"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-inner">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <div className="agileits-navi_search">
                  <form action="#" method="post">
                    <select
                      id="agileinfo-nav_search"
                      name="agileinfo_search"
                      className="border"
                      required=""
                    >
                      <option value="">All Categories</option>
                      <option value="Televisions">Televisions</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Mens">Mens</option>
                      <option value="Womens">Womens</option>
                      <option value="Jewellery">Jewellery</option>
                    </select>
                  </form>
                </div> */}
                {/* <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button> */}
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto text-center mr-xl-5">
                    <li className="nav-item active mr-lg-2 mb-lg-0 mb-2">
                      <NavLink className="nav-link" to="/">
                        Home
                        <span className="sr-only">(current)</span>
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        to="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Electronics
                      </NavLink>
                      <div className="dropdown-menu">
                        <div className="agile_inner_drop_nav_info p-4">
                          <h5 className="mb-3">Mobiles, Computers</h5>
                          <div className="row">
                            <div className="col-sm-6 multi-gd-img">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <NavLink to="/product">
                                    All Mobile Phones
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product">
                                    All Mobile Accessories
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product">
                                    Cases & Covers
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product">
                                    Screen Protectors
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product">
                                    Power Banks
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product">
                                    All Certified Refurbished
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product">Tablets</NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product">
                                    Wearable Devices
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product">
                                    Smart Home
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-6 multi-gd-img">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <NavLink to="/product">Laptops</NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product">
                                    Drives & Storage
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product">
                                    Printers & Ink
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product">
                                    Networking Devices
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product">
                                    Computer Accessories
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product">Game Zone</NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product">Software</NavLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        to="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Appliances
                      </NavLink>
                      <div className="dropdown-menu">
                        <div className="agile_inner_drop_nav_info p-4">
                          <h5 className="mb-3">TV, Appliances, Electronics</h5>
                          <div className="row">
                            <div className="col-sm-6 multi-gd-img">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <NavLink to="/product2">
                                    Televisions
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">
                                    Home Entertainment Systems
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">
                                    Headphones
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">Speakers</NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">
                                    MP3, Media Players & Accessories
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">
                                    Audio & Video Accessories
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">Cameras</NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">
                                    DSLR Cameras
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">
                                    Camera Accessories
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-6 multi-gd-img">
                              <ul className="multi-column-dropdown">
                                <li>
                                  <NavLink to="/product2">
                                    Musical Instruments
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">
                                    Gaming Consoles
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">
                                    All Electronics
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">
                                    Air Conditioners
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">
                                    Refrigerators
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">
                                    Washing Machines
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">
                                    Kitchen & Home Appliances
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">
                                    Heating & Cooling Appliances
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/product2">
                                    All Appliances
                                  </NavLink>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                      <NavLink className="nav-link" to="/about">
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                      <NavLink className="nav-link" to="/product">
                        New Arrivals
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        to="#"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Pages
                      </NavLink>
                      <div className="dropdown-menu">
                        <NavLink className="dropdown-item" to="/product">
                          Product 1
                        </NavLink>
                        <NavLink className="dropdown-item" to="/product2">
                          Product 2
                        </NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item" to="/single">
                          Single Product 1
                        </NavLink>
                        <NavLink className="dropdown-item" to="/single2">
                          Single Product 2
                        </NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item" to="checkout.html">
                          Checkout Page
                        </NavLink>
                        <NavLink className="dropdown-item" to="/payment">
                          Payment Page
                        </NavLink>
                      </div>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
