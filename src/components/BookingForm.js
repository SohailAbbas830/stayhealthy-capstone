import React, { useState } from 'react';

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', date: '', specialty: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${form.name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Your Name" onChange={handleChange} required />
      <input name="date" type="date" onChange={handleChange} required />
      <select name="specialty" onChange={handleChange} required>
        <option value="">Choose Specialty</option>
        <option value="cardiology">Cardiology</option>
        <option value="dermatology">Dermatology</option>
      </select>
      <button type="submit">Book Appointment</button>
    </form>
  );
}