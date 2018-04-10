import Head from "next/head";
// import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import banner from "../../../images/edee-cms-01.png";

export default () => (
  <div>
    <img src={banner} alt="Edee CMS banner" style={styles.banner} />
  </div>
);

const styles = {
  banner: {
    maxWidth: "100%"
  }
};
