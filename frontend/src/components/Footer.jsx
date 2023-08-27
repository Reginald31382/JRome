import { Container, Row, Col } from "react-bootstrap";
import { LiaArrowCircleUpSolid } from "react-icons/lia";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { CgTwitter } from "react-icons/cg";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer onClick={handleScrollToTop}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <BiLogoInstagramAlt
          style={{
            height: "30px",
            width: "30px",
            color: "black",
          }}
        />
        <CgTwitter
          style={{
            height: "30px",
            width: "30px",
            color: "black",
          }}
        />
        <FiFacebook
          style={{
            height: "30px",
            width: "30px",
            color: "black",
          }}
        />
      </div>
      <Container>
        <Row>
          <Col
            className="text-center py-3"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            Scroll to Top
            <LiaArrowCircleUpSolid style={{ color: "black" }} />
            <p>jRome&trade; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
