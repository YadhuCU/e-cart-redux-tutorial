export const Cart = () => {
  return (
    <div style={{ marginTop: "10rem" }} className="container">
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
              <tr>
                <th scope="row">0</th>
                <td>iPhone</td>
                <td>
                  <img
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                    src="https://source.unsplash.com/random"
                  />
                </td>
                <td>$400</td>
                <td>
                  <i
                    style={{ fontSize: "1.5rem", cursor: "pointer" }}
                    className="fa-solid fa-trash text-danger"
                  ></i>
                </td>
              </tr>
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
    </div>
  );
};
