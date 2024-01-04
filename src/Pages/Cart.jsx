import { useSelector } from "react-redux";

export const Cart = () => {
  const cart = useSelector((state) => state.cartSlice);
  console.log(cart?.length);

  return (
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
                        src={item.thumbnail}
                      />
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <i
                        style={{ fontSize: "1.5rem", cursor: "pointer" }}
                        className="fa-solid fa-trash text-danger"
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <div className="card p-3 text-start">
              <h1 className="pb-3 border-bottom">Cart Summary</h1>
              <h5 className="border-bottom text-secondary-emphasis py-3">
                Total Products : <span style={{ float: "right" }}>1</span>
              </h5>
              <h5 className="border-bottom">
                Total : <span style={{ float: "right" }}>$400</span>
              </h5>
              <button className="btn btn-success mt-4">Check Out</button>
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
  );
};
