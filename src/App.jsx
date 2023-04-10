import Header from "./components/Header";
import Summary from "./components/Summary";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import CartProvider from "./store/CartProvider";

import { createPortal } from "react-dom";
import { useState } from "react";

export default function App() {
  const meals = [
    {
      id: 1,
      name: "Sushi",
      description: "Finest Fish and veggies",
      price: 22.99,
    },
    {
      id: 2,
      name: "Schnitzel",
      description: "Finest Fish and veggies",
      price: 22.99,
    },
    {
      id: 3,
      name: "Barbeque Burger",
      description: "Finest Fish and veggies",
      price: 22.99,
    },
    {
      id: 4,
      name: "Green Bowl",
      description: "Finest Fish and veggies",
      price: 22.99,
    },
  ];

  const [isCartVisible, setIsCartVisible] = useState(false);

  function cartClickHandler() {
    setIsCartVisible((isCartVisible) => !isCartVisible);
  }

  return (
    <CartProvider>
      <Header cartClickHandler={cartClickHandler} />
      <Summary />
      <Meals meals={meals} />
      {isCartVisible &&
        createPortal(
          <Cart cartClickHandler={cartClickHandler} />,
          document.getElementById("cart")
        )}
    </CartProvider>
  );
}
