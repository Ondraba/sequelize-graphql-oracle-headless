import Head from "next/head";
// import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import EdeeBanner from "../layout/EdeeBanner";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";

export default () => (
  <div>
    <Row>
      <Col sm={4} smPush={2}>
        <EdeeBanner />
      </Col>
      <Col sm={4} smPush={2}>
        <EdeeBanner />
      </Col>
    </Row>
  </div>
);

const styles = {
  wrapper: {}
};
