export const View = () => {
  return (
    <div style={{ marginTop: "10rem" }} className="container">
      <div className="row align-items-center">
        <div className="col-md-5">
          <img
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
            src="https://source.unsplash.com/random"
            alt="Product"
          />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <p>PID: 19slj2e93Sf2</p>
          <h1>Product Name</h1>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
          </p>
          <div className="d-flex w-100 justify-content-start gap-5">
            <button className="btn btn-outline-dark">
              <i className="fa-regular fa-heart"></i>
            </button>
            <button className="btn btn-outline-dark">
              <i className="fa-solid fa-cart-shopping mx-1"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
