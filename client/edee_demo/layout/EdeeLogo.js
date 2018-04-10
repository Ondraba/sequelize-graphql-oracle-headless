import Head from "next/head";
// import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import logo from "../../../images/logo.gif";

export default () => (
  <div>
    <img src={logo} alt="Edee CMS logo" style={styles.logo} />
  </div>
);

const styles = {
  logo: {
    marginLeft: "60px",
    marginBottom: "30px",
    marginTop: "30px"
  }
};
