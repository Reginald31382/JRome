import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Technical = (props) => {
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
          Front-End Development / DevOps Engineering
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          display: "flex",
          flexDirection: "rows",
          flexWrap: "wrap",
          gap: "3px 10px",
        }}
      >
        <p>*React JS</p>
        <p>*Angular</p>
        <p>*HTML/CSS</p>
        <p>*JavaScript</p>
        <p>*MERN Stack</p>
        <p>*Version Control (Git & Github)</p>
        <p>*Web Services/Restful API's</p>
        <p>*Jest</p>
        <p>*Redux/toolkit</p>
        <p>*CI/CD</p>
        <p>*Docker</p>
        <p>*Kubernetes</p>
        <p>*Jenkins</p>
        <p>*Linux</p>
        <p>*Terraform</p>
        <p>*Azure</p>
        <p>*PostgreSQL</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-none" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Technical;
