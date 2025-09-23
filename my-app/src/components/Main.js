import React, { useReducer } from "react";
import "./Main.css";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

// Fetch available times from API or mock
const fetchAvailableTimes = (date) => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
  if (action.type === "update") {
    return fetchAvailableTimes(action.date);
  }
  return state;
};

const initializeTimes = () => {
  const today = new Date();
  return fetchAvailableTimes(today);
};

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="footer-logo">Little Lemon</div>
        <div className="footer-text">© 2025 Little Lemon. All rights reserved.</div>
        <div className="footer-nav">
          <a href="/">Home</a>
          <a href="/reservations">Reservations</a>
          <a href="/about">About</a>
        </div>
      </footer>
    </main>
  );
}
