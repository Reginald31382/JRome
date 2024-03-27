import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

import "../index.css";

const Product = ({ product }) => {
  return (
    <Card className="product-card p-3 rounded">
      <Link to={`/product/${product._id}`} style={{ textAlign: "center" }}>
        <div className="pro__img" style={{ flex: "1" }}>
          <Card.Img
            src={product.image}
            alt={product.name}
            variant="top"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </Link>
      <Card.Body
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
