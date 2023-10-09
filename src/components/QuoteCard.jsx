import React from "react";
import "../styles/QuoteCard.css";

export default function QuoteCard({ quoteData }) {
  return (
    <div className="container">
      <p className="quote">{quoteData?.phrase}</p>
      <p className="author"> - {quoteData?.author}</p>
      <i className="bx bxs-quote-alt-right quoteIcon"></i>
    </div>
  );
}
