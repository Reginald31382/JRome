import { Container, Row, Col } from "react-bootstrap";
import { LiaArrowCircleUpSolid } from "react-icons/lia";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { CgTwitter } from "react-icons/cg";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="https://www.instagram.com/smoov_cashus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoInstagramAlt
            style={{
              height: "30px",
              width: "30px",
              color: "black",
            }}
          />
        </a>
        <hr />
        <a href="/">
          <CgTwitter
            style={{
              height: "30px",
              width: "30px",
              color: "black",
              marginLeft: "5px",
            }}
          />
        </a>
        <a href="/">
          <FiFacebook
            style={{
              height: "30px",
              width: "30px",
              color: "black",
            }}
          />
        </a>
        <a href="https://www.linkedin.com/in/reginald-dixon-bb3431102/">
          <FaLinkedin
            style={{
              height: "30px",
              width: "30px",
              color: "black",
            }}
          />
        </a>
      </div>

      <footer onClick={handleScrollToTop}>
        <Container>
          <Row>
            <Col
              className="text-center py-3 linkHover"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              Scroll to Top
              <LiaArrowCircleUpSolid style={{ color: "black" }} />
              <p>jRome&trade; {currentYear}</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
