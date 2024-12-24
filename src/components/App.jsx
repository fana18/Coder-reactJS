import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemDetailsContainer from "./ItemDetailsContainer";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <BrowserRouter>
      <NavBar cartCount={cartCount} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              greeting="Bienvenido a PowerTechnology!"
              setCartCount={setCartCount}
            />
          }
        />
        <Route
          path="/category/:categoryId"
          element={
            <ItemListContainer
              greeting="Categoria"
              setCartCount={setCartCount}
            />
          }
        />
        <Route path="/item/:itemId" element={<ItemDetailsContainer />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
