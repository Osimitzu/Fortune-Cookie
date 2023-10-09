import { useState } from "react";
import "../styles/App.css";
import Title from "./Title";
import QuoteCard from "./QuoteCard";
import Button from "./Button";
import quoteR from "../data/phrases.json";
import backgroundR from "../data/backgrounds.json";

function App() {
  const [index, setIndex] = useState(0);

  const updateQuote = () => {
    let newIndex = 0;

    do {
      newIndex = Math.floor(Math.random() * 15);
    } while (newIndex === index);

    setIndex(newIndex);
    console.log(newIndex);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("/fortuneBackgrounds/background7.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <Title />
      <QuoteCard quoteData={quoteR[index]} />
      <Button update={updateQuote} />
    </div>
  );
}

export default App;
