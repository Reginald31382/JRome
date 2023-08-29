import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Literature = (props) => {
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
          My Philosophy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          display: "flex",
          flexDirection: "rows",
          justifyContent: "center",
          flexWrap: "wrap",
          fontStyle: "italic",
        }}
      >
        <p>I am a lifelong Creator and Developer.</p>
        <p>
          "My vision of success engulfs prosperity and ingenuity. I truly
          believe everyone can strive for greatness once you apply yourself in
          'that' something you love."
        </p>
        <p>~Reggie</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-none" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Literature;
