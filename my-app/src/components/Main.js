import React, { useReducer } from "react";
import { useNavigate } from 'react-router-dom'; // <- Import useNavigate
import "./Main.css";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import Reservations from "./Reservations";

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
  const navigate = useNavigate(); // <- Get navigate function

  // submitForm function that submits form data and navigates on success
  const submitForm = (formData) => {
    const success = window.submitAPI ? window.submitAPI(formData) : true;
    if (success) {
      navigate('/confirmed');  // Navigate to confirmation page
      return true;
    }
    return false;
  };

  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      {/* Pass submitForm as a prop */}
      <Reservations
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}
