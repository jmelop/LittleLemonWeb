import React from "react";
import "./Reservation.css";

export default function Reservation() {
  const minimumDate = new Date().toISOString().split('T')[0];
  const today = new Date();
  today.setDate(today.getDate() + 10);
  const maxDate = today.toISOString().split('T')[0];
  const [formData, setFormData] = React.useState({
    email: "",
    phone: "",
    date: minimumDate,
    time: "16:00",
    guests: 1,
  });

  const availableTimes = [
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="reservation-section">
      <form onSubmit={handleSubmit}>
        <h1>Table reservation</h1>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            minLength="3"
            maxLength="15"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={minimumDate}
            max={maxDate}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <select
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">16:00</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="10"
            required
          />
        </div>
        <button type="submit">Make your reservation</button>
      </form>
    </section>
  );
}
