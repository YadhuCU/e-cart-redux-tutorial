/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/slices/prodcutSlice";

export const Header = ({ insideHome }) => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const { wishlist } = useSelector((state) => state.wishlistSlice);
  const cart = useSelector((state) => state.cartSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    setWishlistCount(wishlist?.length);
    const count = cart?.reduce(
      (prevValue, currValue) => currValue.quantity + prevValue,
      0,
    );
    console.log("count", count);
    setCartCount(count);
  }, [wishlist, cart]);

  return (
    <nav
      style={{ position: "fixed", top: "0", zIndex: "99" }}
      className="bg-primary text-light w-100 p-3"
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <Link to={"/"}>
            <h2 className="text-light" style={{ fontWeight: "bold" }}>
              <i className="fa-brands fa-shopify px-2"></i>
              E-Cart
            </h2>
          </Link>
        </div>
        {insideHome && (
          <div style={{ marginLeft: "auto" }}>
            <Form.Control
              onChange={(event) =>
                dispatch(productSearch(event.target.value.toLowerCase()))
              }
              type="text"
              placeholder="Search Product"
            />
          </div>
        )}

        <div className="text-light">
          <Link to={"/wishlist"}>
            <div
              style={{ position: "relative" }}
              className="btn border-2 text-light "
            >
              <i style={{ fontSize: "2rem" }} className="fa-solid fa-heart"></i>
              <span
                style={{ position: "absolute", top: "0", right: "0" }}
                className="badge bg-info mx-1"
              >
                {wishlistCount}
              </span>
            </div>
          </Link>
          <Link to={"/cart"}>
            <div
              style={{ position: "relative" }}
              className="btn border-2 text-light  mx-2"
            >
              <i
                style={{ fontSize: "2rem" }}
                className="fa-solid fa-cart-shopping"
              ></i>
              <span
                style={{ position: "absolute", top: "0", right: "0" }}
                className="badge  bg-info mx-1"
              >
                {cartCount}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
