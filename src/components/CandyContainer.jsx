import React from "react";
import CandyCard from "./CandyCard";
import "../App.css";

export default function CandyContainer({ candies }) {
  return (
    <section className="container">
      <div className="candy-grid">
        {candies.map((candy) => (
          <CandyCard key={candy.id} candy={candy} />
        ))}
      </div>
    </section>
  );
}
