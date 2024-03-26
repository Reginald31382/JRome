import { Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import jrome from "../assets/jRomeSide.png";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="shadow-sm p-3 mb-5 bg-white rounded advertise"
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s",
            cursor: "pointer",
            overflow: "hidden",
          }}
        >
          <a
            className="shadow-lg p-3 bg-white rounded"
            style={{ textDecoration: "none", display: "block" }}
            href="https://www.aliveshoes.com/jrome"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={jrome}
              alt="j'Rome"
              style={{ height: "120px", paddingBottom: "15px" }}
            />
            <span style={{ fontSize: "0.8em", maxWidth: "200px" }}>
              GET AN EXCLUSIVE PAIR DIRECTLY FROM THE ALIVE SHOES WEBSITE.
            </span>
            <img
              src={jrome}
              alt="j'Rome"
              style={{
                height: "120px",
                paddingBottom: "15px",
                transform: "scaleX(-1)",
              }}
            />
          </a>
        </div>
      </div>

      <h1
        style={{
          padding: "5px",
        }}
      >
        Top Gear
      </h1>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1
            style={{
              padding: "5px",
            }}
          >
            Latest Products
          </h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
