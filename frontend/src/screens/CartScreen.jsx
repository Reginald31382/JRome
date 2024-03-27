import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
// import { BsArrowLeftShort } from "react-icons/bs";
import Message from "../components/Message";
import { addToCart } from "../slices/cartSlice";
import { removeFromCart } from "../slices/cartSlice";
import { LinkContainer } from "react-router-bootstrap";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  //selectedSize passed in parameter and property
  const addToCartHandler = (product, qty, selectedSize) => {
    dispatch(addToCart({ ...product, qty, selectedSize }));
  };

  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  return (
    <>
      <Row>
        <Col md={8}>
          <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item._id}`}>{item.name}</Link>
                    </Col>
                    <p>Cost:</p>
                    <Col md={2}>${item.price}</Col>
                    <hr />
                    <p>Size:</p>
                    <Col md={2}>{item.selectedSize}</Col>
                    <hr />
                    {""}
                    <Col md={2}>
                      <p>QTY</p>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          addToCartHandler(
                            item,
                            Number(e.target.value, item.selectedSize)
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>

                    <Col md={1}>
                      <hr style={{ color: "transparent" }} />
                      <Button
                        type="button "
                        variant="light"
                        onClick={() => removeFromCartHandler(item._id)}
                      >
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      {/*Create a back button to go back to shopping*/}
      <LinkContainer to="/">
        <div
          style={{
            display: "flex",
            lineHeight: ".9",
            textDecoration: "none",
            color: "gray",
          }}
        >
          {/* <BsArrowLeftShort />
          <p>Continue Shopping</p> */}
        </div>
      </LinkContainer>
    </>
  );
};

export default CartScreen;
