import React, { useState, useEffect } from "react";
import "./assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontendLayout from "./layouts/FrontendLayout";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Preloader from "./components/utils/Preloader";
import Categories from "./pages/Categories";
import SingleProduct from "./pages/SingleProduct";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader/>; 

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FrontendLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:name" element={<Categories />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
