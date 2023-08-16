import { Container, Row, Col } from "react-bootstrap";
import { LiaArrowCircleUpSolid } from "react-icons/lia";
import Button from "react-bootstrap/Button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer onClick={handleScrollToTop}>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <Button className="footer" variant="outline-danger">
              <LiaArrowCircleUpSolid />
            </Button>
            <p>jRome&trade; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
