// src/components/App.js
import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import Main from './Main';
import Reservations from './Reservations';
import ConfirmedBooking from './ConfirmedBooking';

import './Main.css';

// Time logic
const fetchAvailableTimes = (date) => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
  if (action.type === 'update') {
    return fetchAvailableTimes(action.date);
  }
  return state;
};

const initializeTimes = () => {
  const today = new Date();
  return fetchAvailableTimes(today);
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/reservations"
          element={<Reservations availableTimes={availableTimes} dispatch={dispatch} />}
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
