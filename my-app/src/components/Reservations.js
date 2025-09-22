import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Reservations = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const todayDateString = new Date().toISOString().split("T")[0];

  // Validation logic to check if form is valid
  useEffect(() => {
    // Basic validation conditions
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
      alert('Please fill in the form correctly.');
      return;
    }

    const formData = { date, time, guests, occasion };
    const success = window.submitAPI ? window.submitAPI(formData) : true;

    if (success) {
      setDate('');
      setTime('');
      setGuests(1);
      setOccasion('');
      dispatch({ type: "update", date: '' });
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
          min={todayDateString}
          aria-label="Choose reservation date"
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-label="Choose reservation time"
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
          aria-label="Number of guests"
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          aria-label="Select occasion"
        >
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Dinner Date">Dinner Date</option>
        </select>

        <input
          type="submit"
          value="Make Your Reservation"
          disabled={!isFormValid}  // Disabled until form is valid
          aria-label="Submit reservation form"
        />
      </form>
    </div>
  );
};

export default Reservations;
