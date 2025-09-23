import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Step 1: import useNavigate

const Reservations = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const navigate = useNavigate();  // Step 1: get navigate function

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "update", date: selectedDate }); // update available times on date change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !time) {
      alert('Please select date and time.');
      return;
    }

    const formData = { date, time, guests, occasion };
    const success = window.submitAPI ? window.submitAPI(formData) : true;

    if (success) {
      // Clear form
      setDate('');
      setTime('');
      setGuests(1);
      setOccasion('');
      dispatch({ type: "update", date: '' }); // reset available times

      // Step 2: Navigate to confirmed booking page
      navigate('/confirmed');
    } else {
      alert('Reservation failed.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Make a Reservation</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '250px', gap: '20px' }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
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

        <input type="submit" value="Make Your Reservation" />
      </form>
    </div>
  );
};

export default Reservations;
