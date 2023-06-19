// import "./App.css";

import Announcement from "./Components/Announcement";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Toolbar from "./Components/Toolbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Signupb2b from "./Pages/Signupb2b";
import Queryb2b from "./Pages/b2bque";

import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "./Pages/Cart";
import Productdes from "./Components/Productsdes/Productdes";
import ProdDes2 from "./Components/ProdDes2/ProdDes2";
import ProductListing from "./Pages/ProductListing";

function App() {
  return (
    <BrowserRouter>
      <Announcement />
      <Header />
      <Toolbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupbtob" element={<Signupb2b />} />
        <Route path="/bulkquery" element={<Queryb2b />} />
        <Route path="/cart" element={<Cart />} />
        <Route exact path="/product" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProdDes2 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
