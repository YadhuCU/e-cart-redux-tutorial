import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToWishlist } from "../redux/slices/wishlistSlice";

export const View = () => {
  const { id } = useParams();
  const { loading } = useSelector((state) => state.productSlice);
  const { wishlist } = useSelector((state) => state.wishlistSlice);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"));
    setProduct(products.find((item) => item.id == id));
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
    <div style={{ marginTop: "10rem" }} className="container">
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <div className="row align-items-center">
          <div className="col-md-5">
            <img
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
              src={product?.thumbnail}
              alt="Product"
            />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <p>PID: {product?.id}</p>
            <h1>{product?.title}</h1>
            <h1>$ {product?.price}</h1>
            <p>{product?.description}</p>
            <div className="d-flex w-100 justify-content-start gap-5">
              <button
                onClick={() => handleWishlist(product)}
                className="btn btn-outline-dark"
              >
                <i className="fa-regular fa-heart"></i>
              </button>
              <button className="btn btn-outline-dark">
                <i className="fa-solid fa-cart-shopping mx-1"></i>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
