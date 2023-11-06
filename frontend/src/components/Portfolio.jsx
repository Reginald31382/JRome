import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Portfolio = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ color: "black", backgroundColor: "rgba(55, 156, 238, 0.7)" }}
    >
      <Modal.Header closeButton style={{ backgroundColor: "black" }}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: "white" }}
        >
          My Project(s)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>
            <strong>
              <a
                href="https://sallyquosto.github.io/covid-cocktails/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black", textDecoration: "none" }}
              >
                covid cocktail (Group Project @GrandCircus)
              </a>
            </strong>
          </li>
          <li>
            <strong>
              <a
                href="https://jrome-weather.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black", textDecoration: "none" }}
              >
                weather application
              </a>
            </strong>
          </li>
        </ul>
        <a
          href=""
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
          Visit my Portfolio page for more..
        </a>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "black" }}>
        <Button
          variant="outline-none"
          style={{ color: "white" }}
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Portfolio;
