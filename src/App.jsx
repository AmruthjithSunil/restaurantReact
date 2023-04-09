import Header from "./components/Header";
import Summary from "./components/Summary";
import Meals from "./components/Meals";

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

  return (
    <>
      <Header />
      <Summary />
      <Meals meals={meals} />
    </>
  );
}
