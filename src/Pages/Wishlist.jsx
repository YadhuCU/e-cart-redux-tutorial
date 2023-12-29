import { Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Wishlist = () => {
  return (
    <div style={{ marginTop: "10rem" }} className="container">
      <Row>
        <Col sm={12} md={6} lg={3}>
          <Card style={{ width: "18rem" }}>
            <Link to={"/view/1"}>
              <Card.Img
                style={{ height: "150px", objectFit: "cover" }}
                variant="top"
                src="https://source.unsplash.com/random"
              />
            </Link>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <div className="d-flex w-100 justify-content-between">
                <Button variant="danger">
                  <i className="fa-solid fa-heart-circle-xmark"></i>
                </Button>
                <Button variant="primary">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
