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
      <div
        className="shadow-sm p-3 mb-5 bg-white rounded "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          className="shadow-lg p-3 mb-5 bg-white rounded"
          style={{ textDecoration: "none" }}
          href="https://www.aliveshoes.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={jrome}
            alt="j'Rome"
            style={{ height: "120px", paddingBottom: "15px" }}
          />{" "}
          GET YOURS!
        </a>
      </div>
      <h1
        style={{
          color: "lightBlue",
          padding: "5px",
          fontFamily: "Labrada",
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
              color: "lightBlue",
              padding: "5px",
              fontFamily: "Labrada",
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
