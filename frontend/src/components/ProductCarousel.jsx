import { Link } from "react-router-dom";
import Loader from "./Loader";
import { Carousel, Image } from "react-bootstrap";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel
      pause="hover"
      className="bg-dark shadow-lg mb-1 rounded"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link
            to={`/product/${product._id}`}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                width: "auto",
                height: "12rem",
                display: "flex",
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fluid
                className="top__gear__image"
              />
            </div>
            <Carousel.Caption className="carousel-caption">
              <h4 className="text-black">
                {product.name} ${product.price}
              </h4>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
