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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Coming Soon
        </Modal.Title>
      </Modal.Header>
      {/* <Modal.Body></Modal.Body> */}
      <Modal.Footer>
        <Button variant="outline-none" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Portfolio;
