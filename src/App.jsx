import React, { useState, useEffect } from "react";
import "./assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontendLayout from "./layouts/FrontendLayout";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Preloader from "./components/utils/Preloader";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600); // Duration of the preloader (2.5 seconds)
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader/>; // ⬅️ Show preloader before content

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FrontendLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
