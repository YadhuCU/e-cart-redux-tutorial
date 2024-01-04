import { useEffect } from "react";
import { Col, Row, Card, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../redux/slices/prodcutSlice";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productSlice);
  const { wishlist } = useSelector((state) => state.wishlistSlice);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleWishlist = (product) => {
    const existingProduct = wishlist.find((item) => item.id == product.id);
    if (existingProduct) {
      alert("Product already exist.");
    } else {
      dispatch(addToWishlist(product));
    }
  };
  return (
    <div style={{ marginTop: "10rem" }} className="container mx-auto">
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Row>
          {products?.length > 0 &&
            products.map((item) => (
              <Col sm={12} md={6} lg={3} key={item.id}>
                <Card style={{ width: "18rem", marginBottom: "2rem" }}>
                  <Link to={`/view/${item.id}`}>
                    <Card.Img
                      style={{ height: "150px", objectFit: "cover" }}
                      variant="top"
                      src={`${item.images[0]}`}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <div className="d-flex w-100 justify-content-between">
                      <Button
                        onClick={() => handleWishlist(item)}
                        variant="info"
                      >
                        <i className="fa-regular fa-heart"></i>
                      </Button>
                      <Button
                        onClick={() => dispatch(addToCart(item))}
                        variant="primary"
                      >
                        <i className="fa-solid fa-cart-shopping"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      )}
    </div>
  );
};
