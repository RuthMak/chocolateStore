import React from "react";
import "./App.css";
import candies from "./data/candies";
import CandyContainer from "./components/CandyContainer";

export default function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>React-ive Chocolate Candy Boxes</h1>
        <p className="app-subtitle">
          Pick a chocolate and tap “View Calories” to learn more!
        </p>
      </header>

      <CandyContainer candies={candies} />
      
      <footer className="app-footer">
        <small>Ruth's Web Design - React-ive Chocolate Candy Store</small>
      </footer>
    </main>
  );
}
