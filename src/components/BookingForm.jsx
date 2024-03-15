import React from "react";
import { useState } from "react";

const BookingForm = () => {
  const [service, setService] = useState("Private Event");

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  return (
    <div className="form-container">
      <form className="booking-form">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="fname" />
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lname" />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" />
        <label for="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="123-456-7890"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <small>Format: 123-456-7890</small>
        <label for="service">Requested Service</label>
        <select id="service" name="service" onChange={handleServiceChange}>
          <option value="Private Event">Private Event</option>
          <option value="Meal Prep">Meal Prep</option>
        </select>
        <label for="date">Date of Service</label>
        <input type="date" id="date" name="date" />
        {service === "Private Event" && (
          <div>
            <label for="guests">Number of Guests:</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="2"
              max="6"
              defaultValue="2"
            />
            <small>2-6</small>
            <label for="description">Event Description</label>
            <textarea name="description" rows="10" cols="50" />
            <label for="allergies">Allergy Concerns & Preferences</label>
            <textarea name="allergies" rows="10" cols="50" />
          </div>
        )}
        {service === "Meal Prep" && (
          <div>
            <label for="mealCount">Number of Meals Per Week</label>
            <select id="mealCount" name="mealCount">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50+">50+</option>
            </select>
            <label for="description">Meal Description</label>
            <textarea name="description" rows="10" cols="50" />
            <label for="allergies">Allergy Concerns & Preferences</label>
            <textarea name="allergies" rows="10" cols="50" />
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
