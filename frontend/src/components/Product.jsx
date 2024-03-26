import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

import "../index.css";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded" style={{ height: "95%" }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
          style={{ height: "300px", objectFit: "contain" }}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="product.title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.numReviews}`} />
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
