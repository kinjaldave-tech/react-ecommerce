import { Link } from "react-router-dom";

const Product = () => {
    return(
<>
	<div className="page-head_agile_info_w3l"></div>

	<div className="services-breadcrumb">
		<div className="agile_inner_breadcrumb">
			<div className="container">
				<ul className="w3_short">
					<li>
						<Link to="/">Home</Link>
						<i>|</i>
					</li>
					<li>Electronics</li>
				</ul>
			</div>
		</div>
	</div>

	<div className="ads-grid py-sm-5 py-4">
		<div className="container py-xl-4 py-lg-2">
			<h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
				<span>M</span>obiles
				<span>&</span>
				<span>C</span>omputers</h3>
			<div className="row">
				<div className="agileinfo-ads-display col-lg-9">
					<div className="wrapper">
						<div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
							<div className="row">
								<div className="col-md-4 product-men">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src="assets/images/m1.jpg" alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/single" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/single">Samsung Galaxy J7</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$200.00</span>
												<del>$280.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Samsung Galaxy J7" />
														<input type="hidden" name="amount" value="200.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src="assets/images/m2.jpg" alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/single" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
											<span className="product-new-top">New</span>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/single">OPPO A37f</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$230.00</span>
												<del>$250.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="OPPO A37f" />
														<input type="hidden" name="amount" value="230.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src="assets/images/m3.jpg" alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/single" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
											<span className="product-new-top">New</span>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/single">Apple iPhone X</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$280.00</span>
												<del>$300.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Apple iPhone X" />
														<input type="hidden" name="amount" value="280.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
							<div className="row">
								<div className="col-md-4 product-men">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src="assets/images/mk1.jpg" alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/single" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/single">Infinix Hot S3</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$300.00</span>
												<del>$320.00</del>
											</div>
											<span className="product-new-top">New</span>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Infinix Hot S3" />
														<input type="hidden" name="amount" value="300.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src="assets/images/mk2.jpg" alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/single" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/single">Moto X4 (6 GB)</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$233.00</span>
												<del>$240.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Moto X4 (6 GB)" />
														<input type="hidden" name="amount" value="233.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src="assets/images/mk3.jpg" alt=""/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/single" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/single">iVooMi i Series</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$249.00</span>
												<del>$260.00</del>
											</div>
											<span className="product-new-top">New</span>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="iVooMi i Series" />
														<input type="hidden" name="amount" value="249.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
							<div className="row">
								<div className="col-md-4 product-men">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src="assets/images/mk4.jpg" alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/single" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/single">Dell Vostro Laptop</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$252.00</span>
												<del>$260.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Dell Vostro Laptop" />
														<input type="hidden" name="amount" value="252.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src="assets/images/mk5.jpg" alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/single" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/single">Acer Laptop</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$240.00</span>
												<del>$260.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Acer Laptop" />
														<input type="hidden" name="amount" value="240.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src="assets/images/mk6.jpg" alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/single" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/single">Lenovo </Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$300.00</span>
												<del>$320.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Alcatel Tablet" />
														<input type="hidden" name="amount" value="300.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
							<div className="row">
								<div className="col-md-4 product-men">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src="assets/images/mk7.jpg" alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/single" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<span className="product-new-top">New</span>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/single">Intex Power Bank</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$100.00</span>
												<del>$200.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Intex Power Bank" />
														<input type="hidden" name="amount" value="100.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src="assets/images/mk8.jpg" alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/single" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<span className="product-new-top">New</span>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/single">HP Wireless Printer</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$243.00</span>
												<del>$250.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="HP Wireless Printer" />
														<input type="hidden" name="amount" value="243.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4 product-men mt-md-0 mt-5 mt-5">
									<div className="men-pro-item simpleCart_shelfItem">
										<div className="men-thumb-item text-center">
											<img src="assets/images/mk9.jpg" alt="" className="img-fluid"/>
											<div className="men-cart-pro">
												<div className="inner-men-cart-pro">
													<Link to="/single" className="link-product-add-cart">Quick View</Link>
												</div>
											</div>
										</div>
										<div className="item-info-product text-center border-top mt-4">
											<h4 className="pt-1">
												<Link to="/single">Alcatel Tablet</Link>
											</h4>
											<div className="info-product-price my-2">
												<span className="item_price">$320.00</span>
												<del>$350.00</del>
											</div>
											<div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
												<form action="#" method="post">
													<fieldset>
														<input type="hidden" name="cmd" value="_cart" />
														<input type="hidden" name="add" value="1" />
														<input type="hidden" name="business" value=" " />
														<input type="hidden" name="item_name" value="Alcatel Tablet" />
														<input type="hidden" name="amount" value="320.00" />
														<input type="hidden" name="discount_amount" value="1.00" />
														<input type="hidden" name="currency_code" value="USD" />
														<input type="hidden" name="return" value=" " />
														<input type="hidden" name="cancel_return" value=" " />
														<input type="submit" name="submit" value="Add to cart" className="button btn" />
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
				<div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
					<div className="side-bar p-sm-4 p-3">
						<div className="search-hotel border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Brand</h3>
							<form action="#" method="post">
								<input type="search" placeholder="Search Brand..." name="search" required=""/>
								<input type="submit" value=" "/>
							</form>
							<div className="left-side py-2">
								<ul>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Samsung</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Red Mi</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Apple</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Nexus</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Motorola</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Micromax</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Lenovo</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Oppo</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">Sony</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">LG</span>
									</li>
									<li>
										<input type="checkbox" className="checked"/>
										<span className="span">One Plus</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="left-side border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Ram</h3>
							<ul>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">Less than 512 MB</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">512 MB - 1 GB</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">1 GB</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">2 GB</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">3 GB</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">5 GB</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">6 GB</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">6 GB & Above</span>
								</li>
							</ul>
						</div>
						<div className="range border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Price</h3>
							<div className="w3l-range">
								<ul>
									<li>
										<Link to="#">Under $1,000</Link>
									</li>
									<li className="my-1">
										<Link to="#">$1,000 - $5,000</Link>
									</li>
									<li>
										<Link to="#">$5,000 - $10,000</Link>
									</li>
									<li className="my-1">
										<Link to="#">$10,000 - $20,000</Link>
									</li>
									<li>
										<Link to="#">$20,000 $30,000</Link>
									</li>
									<li className="mt-1">
										<Link to="#">Over $30,000</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="left-side border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Discount</h3>
							<ul>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">5% or More</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">10% or More</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">20% or More</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">30% or More</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">50% or More</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">60% or More</span>
								</li>
							</ul>
						</div>
						<div className="left-side border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Offers</h3>
							<ul>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">Exchange Offer</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">No Cost EMI</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">Special Price</span>
								</li>
							</ul>
						</div>
						<div className="left-side border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">Cash On Delivery</h3>
							<ul>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">Eligible for Cash On Delivery</span>
								</li>
							</ul>
						</div>
						<div className="left-side border-bottom py-2">
							<h3 className="agileits-sear-head mb-3">New Arrivals</h3>
							<ul>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">Last 30 days</span>
								</li>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">Last 90 days</span>
								</li>
							</ul>
						</div>
						<div className="left-side py-2">
							<h3 className="agileits-sear-head mb-3">Availability</h3>
							<ul>
								<li>
									<input type="checkbox" className="checked"/>
									<span className="span">Exclude Out of Stock</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="join-w3l1 py-sm-5 py-4">
		<div className="container py-xl-4 py-lg-2">
			<div className="row">
				<div className="col-lg-6">
					<div className="join-agile text-left p-4">
						<div className="row">
							<div className="col-sm-7 offer-name">
								<h6>Smooth, Rich & Loud Audio</h6>
								<h4 className="mt-2 mb-3">Branded Headphones</h4>
								<p>Sale up to 25% off all in store</p>
							</div>
							<div className="col-sm-5 offerimg-w3l">
								<img src="assets/images/off1.png" alt="" className="img-fluid"/>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6 mt-lg-0 mt-5">
					<div className="join-agile text-left p-4">
						<div className="row ">
							<div className="col-sm-7 offer-name">
								<h6>A Bigger Phone</h6>
								<h4 className="mt-2 mb-3">Smart Phones 5</h4>
								<p>Free shipping order over $100</p>
							</div>
							<div className="col-sm-5 offerimg-w3l">
								<img src="assets/images/off2.png" alt="" className="img-fluid"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</>
    );
}

export default Product;