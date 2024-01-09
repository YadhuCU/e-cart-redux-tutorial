import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Wishlist } from "./Pages/Wishlist";
import { View } from "./Pages/View";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
