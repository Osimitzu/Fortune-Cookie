import { useState } from "react";
import "../styles/App.css";
import Title from "./Title";
import QuoteCard from "./QuoteCard";
import Button from "./Button";
import quoteR from "../data/quotes.json";
import backgroundR from "../data/backgrounds.json";

function App() {
  const [index, setIndex] = useState(Math.floor(Math.random() * 157));
  const [indexB, setIndexB] = useState(Math.floor(Math.random() * 8));

  const updateQuote = () => {
    let newIndex = 0;

    do {
      newIndex = Math.floor(Math.random() * 157);
    } while (newIndex === index);

    setIndex(newIndex);
    // console.log(newIndex);
    setIndexB(updateBackground);
  };

  const updateBackground = () => {
    let newIndex = 0;

    do {
      newIndex = Math.floor(Math.random() * 8);
    } while (newIndex === indexB);

    setIndexB(newIndex);
    // console.log(newIndex);
    return indexB;
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("${backgroundR[indexB].image}")`,
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
