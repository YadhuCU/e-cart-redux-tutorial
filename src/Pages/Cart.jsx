import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  decrementQuantity,
  emptyCart,
  incrementQuantity,
  removeFromCart,
} from "../redux/slices/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../Components/Header";

export const Cart = () => {
  const cart = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart?.length > 0) {
      setTotal(
        cart
          .map((product) => product.grandTotal)
          .reduce((prev, curr) => prev + curr, 0),
      );
    } else {
      setTotal(0);
    }
  }, [cart]);

  const handleCheckout = () => {
    alert("Thank you for the purchasing ...!");
    dispatch(emptyCart());
    navigate("/");
  };

  return (
    <>
      <Header />
      <div style={{ marginTop: "10rem" }} className="container">
        {cart?.length > 0 ? (
          <div className="row">
            <div className="col-md-8">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.title}</td>
                      <td>
                        <img
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                          src={item?.thumbnail}
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => dispatch(decrementQuantity(item?.id))}
                          className="btn"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={item?.quantity}
                          readOnly
                          style={{
                            width: "4ch",
                            paddingBlock: ".2em",
                            textAlign: "center",
                          }}
                          className="rounded border-dark"
                        />
                        <button
                          className="btn"
                          onClick={() => dispatch(incrementQuantity(item?.id))}
                        >
                          +
                        </button>
                      </td>
                      <td>${item?.grandTotal}</td>
                      <td>
                        <i
                          onClick={() => dispatch(removeFromCart(item?.id))}
                          style={{ fontSize: "1.5rem", cursor: "pointer" }}
                          className="fa-solid fa-trash text-danger"
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="float-end">
                <Link to={"/"} className="btn btn-primary mx-4">
                  shop more
                </Link>
                <button
                  onClick={() => dispatch(emptyCart())}
                  className="btn btn-danger"
                >
                  Clear Cart
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 text-start">
                <h1 className="pb-3 border-bottom">Cart Summary</h1>
                <h5 className="border-bottom text-secondary-emphasis py-3">
                  Total Products :{" "}
                  <span style={{ float: "right" }}>{cart?.length}</span>
                </h5>
                <h5 className="border-bottom">
                  Total : <span style={{ float: "right" }}>${total}</span>
                </h5>
                <button
                  onClick={handleCheckout}
                  className="btn btn-success mt-4"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <img
              src={
                "https://assets.materialup.com/uploads/87d4df96-a55f-4f4b-9a17-a696eded97f3/preview.gif"
              }
            />
            <h1>Your cart is empty..</h1>
          </div>
        )}
      </div>
    </>
  );
};
