import { Col, Row, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { Header } from "../Components/Header";

export const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.wishlistSlice);
  const dispatch = useDispatch();

  const handleCart = (product) => {
    dispatch(removeFromWishlist(product.id));
    dispatch(addToCart(product));
  };
  return (
    <>
      <Header />
      <div style={{ marginTop: "10rem" }} className="container">
        <Row>
          {wishlist?.length > 0 ? (
            wishlist.map((item, index) => (
              <Col
                style={{ marginBottom: "15px" }}
                sm={12}
                key={index}
                md={6}
                lg={3}
              >
                <Card style={{ width: "18rem" }}>
                  <Link to={"/view/1"}>
                    <Card.Img
                      style={{ height: "150px", objectFit: "cover" }}
                      variant="top"
                      src={item.thumbnail}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <div className="d-flex w-100 justify-content-between">
                      <Button
                        onClick={() => dispatch(removeFromWishlist(item.id))}
                        variant="danger"
                      >
                        <i className="fa-solid fa-heart-circle-xmark"></i>
                      </Button>
                      <Button
                        onClick={() => handleCart(item)}
                        variant="primary"
                      >
                        <i className="fa-solid fa-cart-shopping"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div className="text-center">
              <img
                src={
                  "https://assets.materialup.com/uploads/87d4df96-a55f-4f4b-9a17-a696eded97f3/preview.gif"
                }
              />
              <h1>Your Wishlist is empty..</h1>
            </div>
          )}
        </Row>
      </div>
    </>
  );
};
