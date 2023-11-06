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
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          My Philosophy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        <p className="title" style={{ fontWeight: "bolder" }}>
          Innovative Visionary and Lifelong Creator, Pioneering the Intersection
          of Creativity and Development.
        </p>
        <p>
          "In my vision of success, the pursuit of prosperity is intertwined
          with unwavering dedication and ingenuity. I firmly hold the belief
          that every individual possesses the capacity to achieve greatness when
          they channel their efforts into a passion that resonates deeply with
          them."
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
