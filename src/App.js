import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import StorePage from "./pages/StorePage";

// https://fakestoreapi.com/products

function App() {
  return (
    <div className="App-backGround">
      <StorePage />
    </div>
  );
}

export default App;
