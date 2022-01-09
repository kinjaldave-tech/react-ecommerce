const Contact = () => {
    return (
      <>
	<div className="page-head_agile_info_w3l"></div>
	
	<div className="services-breadcrumb">
		<div className="agile_inner_breadcrumb">
			<div className="container">
				<ul className="w3_short">
					<li>
						<a href="index.html">Home</a>
						<i>|</i>
					</li>
					<li>Contact Us</li>
				</ul>
			</div>
		</div>
	</div>

	<div className="contact py-sm-5 py-4">
		<div className="container py-xl-4 py-lg-2">
			<h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
				<span>C</span>ontact
				<span>U</span>s
			</h3>
			<div className="row contact-grids agile-1 mb-5">
				<div className="col-sm-4 contact-grid agileinfo-6 mt-sm-0 mt-2">
					<div className="contact-grid1 text-center">
						<div className="con-ic">
							<i className="fas fa-map-marker-alt rounded-circle"></i>
						</div>
						<h4 className="font-weight-bold mt-sm-4 mt-3 mb-3">Address</h4>
						<p>1PO Box 8568954 Melbourne
							<label>Australia.</label>
						</p>
					</div>
				</div>
				<div className="col-sm-4 contact-grid agileinfo-6 my-sm-0 my-4">
					<div className="contact-grid1 text-center">
						<div className="con-ic">
							<i className="fas fa-phone rounded-circle"></i>
						</div>
						<h4 className="font-weight-bold mt-sm-4 mt-3 mb-3">Call Us</h4>
						<p>+(0121) 121 121
							<label>+(0121) 121 122</label>
						</p>
					</div>
				</div>
				<div className="col-sm-4 contact-grid agileinfo-6">
					<div className="contact-grid1 text-center">
						<div className="con-ic">
							<i className="fas fa-envelope-open rounded-circle"></i>
						</div>
						<h4 className="font-weight-bold mt-sm-4 mt-3 mb-3">Email</h4>
						<p>
							<a href="mailto:info@example.com">info@example1.com</a>
							<label>
								<a href="mailto:info@example.com">info@example2.com</a>
							</label>
						</p>
					</div>
				</div>
			</div>
			<form action="#" method="post">
				<div className="contact-grids1 w3agile-6">
					<div className="row">
						<div className="col-md-6 col-sm-6 contact-form1 form-group">
							<label className="col-form-label">Name</label>
							<input type="text" className="form-control" name="Name" placeholder="" required />
						</div>
						<div className="col-md-6 col-sm-6 contact-form1 form-group">
							<label className="col-form-label">E-mail</label>
							<input type="email" className="form-control" name="Email" placeholder="" required />
						</div>
					</div>
					<div className="contact-me animated wow slideInUp form-group">
						<label className="col-form-label">Message</label>
						<textarea name="Message" className="form-control" placeholder="" required> </textarea>
					</div>
					<div className="contact-form">
						<input type="submit" value="Submit"/>
					</div>
				</div>
			</form>
		</div>
	</div>

	<div className="map mt-sm-0 mt-4">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805196.5077734194!2d144.49270863101745!3d-37.97015423820711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne+VIC%2C+Australia!5e0!3m2!1sen!2sin!4v1474020956974"
		    allowfullscreen></iframe>
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
  };
  
export default Contact;