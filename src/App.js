import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import StorePage from "./pages/StorePage";
import Header from "./components/styles.js/Header";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";

// https://fakestoreapi.com/products

function App() {
  return (
    <div className="App-backGround">
      <Header />
      <Routes>
        <Route path="/" element={<StorePage />} />
        <Route path="/store-page" element={<StorePage />} />
        <Route path="/cart-page" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
