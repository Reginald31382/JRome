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
      <Modal.Header>
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
        <ul style={{ display: "flex", flexDirection: "column" }}>
          <li>React JS</li>
          <li>Angular</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>MERN Stack</li>
          <li>Version Control (Git & Github)</li>
          <li>Web Services/Restful API's</li>
          <li>Jest</li>
          <li>Redux/toolkit</li>
          <li>CI/CD</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>Jenkins</li>
          <li>Linux</li>
          <li>Terraform</li>
          <li>Azure</li>
          <li>PostgreSQL</li>
        </ul>
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
