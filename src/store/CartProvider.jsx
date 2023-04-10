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
        const quantity = items[index].quantity + item.quantity;
        return items.map((el) => {
          if (el.id !== item.id) {
            return el;
          }
          return {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            quantity: quantity,
          };
        });
      });
    },
    removeItem: (id) => {
      setTotalQuantity((totalQuantity) => totalQuantity - 1);
      setTotalAmount(
        (totalAmount) => totalAmount - items.find((el) => el.id === id).price
      );
      setItems((items) => {
        const item = items.find((el) => el.id === id);
        if (item.quantity === 1) {
          return items.filter((el) => el.id !== id);
        }
        const quantity = item.quantity - 1;
        return items.map((el) => {
          if (el.id !== item.id) {
            return el;
          }
          return {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            quantity: quantity,
          };
        });
      });
    },
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
