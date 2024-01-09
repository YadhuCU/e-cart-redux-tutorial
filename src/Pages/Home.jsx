import { useEffect } from "react";
import { Col, Row, Card, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProducts,
  onNavigateNext,
  onNavigatePrev,
} from "../redux/slices/prodcutSlice";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { Header } from "../Components/Header";

export const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error, productsPerPage, currentPage } =
    useSelector((state) => state.productSlice);
  const { wishlist } = useSelector((state) => state.wishlistSlice);

  const totalPages = Math.ceil(products?.length / productsPerPage);
  const indexOfLastItem = currentPage * productsPerPage;
  const indexOfFirstItem = indexOfLastItem - productsPerPage;
  const visibleCards = products?.slice(indexOfFirstItem, indexOfLastItem);

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

  const navigateNext = () =>
    currentPage != totalPages && dispatch(onNavigateNext());
  const navigatePrev = () => currentPage != 1 && dispatch(onNavigatePrev());

  return (
    <>
      <Header insideHome />
      <div style={{ marginTop: "10rem" }} className="container mx-auto">
        {!loading && error && <div className="text-danger">{error}</div>}
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <Row>
            {products?.length > 0
              ? visibleCards.map((item) => (
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
                ))
              : !error && (
                  <div
                    style={{ fontSize: "2rem" }}
                    className="text-center fw-bolder"
                  >
                    Product not found..!!
                  </div>
                )}
          </Row>
        )}
        <div className="d-flex justify-content-center gap-2 align-items-center">
          <button onClick={navigatePrev} className="btn btn-outline-primary">
            Prev
          </button>
          <span>
            {currentPage} of {totalPages}
          </span>
          <button onClick={navigateNext} className="btn btn-outline-primary">
            Next
          </button>
        </div>
      </div>
    </>
  );
};
