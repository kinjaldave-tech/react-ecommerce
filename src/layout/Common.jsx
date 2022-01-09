import Footer from "../components/Footer";
import Header from "../components/Header";

const Common = (props) => {
  return (
    <>
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </>
  );
};

export default Common;