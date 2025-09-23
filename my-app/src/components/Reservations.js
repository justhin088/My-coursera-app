import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css"; // Uses your reservation-page CSS

const Reservations = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const todayDateString = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const isDateValid = date !== '' && date >= todayDateString;
    const isTimeValid = time !== '';
    const isGuestsValid = guests >= 1 && guests <= 10;
    const isOccasionValid = occasion !== '';
    setIsFormValid(isDateValid && isTimeValid && isGuestsValid && isOccasionValid);
  }, [date, time, guests, occasion, todayDateString]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "update", date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert("Please fill in the form correctly.");
      return;
    }

    // Reset form and navigate to confirmation
    setDate('');
    setTime('');
    setGuests(1);
    setOccasion('');
    dispatch({ type: "update", date: '' });
    navigate("/confirmed");
  };

  return (
    <div className="reservation-page">
      <div className="reservation-box">
        <h1>Make a Reservation</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            required
            min={todayDateString}
          />

          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Select a time</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            required
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option value="">Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Dinner Date">Dinner Date</option>
          </select>

          <button type="submit" disabled={!isFormValid}>
            Make Your Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservations;
