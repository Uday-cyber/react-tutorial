import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-600 text-black p-4 rounded-lg font-mono mb-4">
        Tailwind Test
      </h1>
      <Card username = "Alina D'Cruz"/>
      <Card username = "Anglina Joseph" btnText="Text me"/>

    </>
  );
}

export default App;


