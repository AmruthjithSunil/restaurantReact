import { useState } from "react";
import CartContext from "./cart-context";

export default function CartProvider(props) {
  const [items, setItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const cartContext = {
    items,
    totalAmount,
    totalQuantity,
    addItem(item) {
      setTotalQuantity((totalQuantity) => totalQuantity + item.quantity);
      setTotalAmount((totalAmount) => totalAmount + item.quantity * item.price);
      setItems((items) => {
        const index = items.findIndex((el) => el.id === item.id);
        if (index === -1) return [...items, item];
        items[index].quantity += item.quantity;
        return items;
      });
    },
    removeItem: (id) => {},
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
