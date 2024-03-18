import React from "react";
import { useState } from "react";
import { sendBookingEmail } from "../utility";
import "../styles/bookingForm.css";

const BookingForm = () => {
  const [service, setService] = useState("Private Event");

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendBookingEmail();
  };

  return (
    <div className="form-container">
      <form className="booking-form">
        <div className="input-container">
          <div className="input-section">
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="John"
              required
            />
          </div>
          <div className="input-section">
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Smith"
              required
            />
          </div>
        </div>
        <div className="input-container">
          <div className="input-section">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john.smith@example.com"
              required
            />
          </div>
          <div className="input-section">
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
            <small>Format: 123-456-7890</small>
          </div>
        </div>
        <div className="input-container">
          <div className="input-section">
            <label for="service">Requested Service</label>
            <select id="service" name="service" onChange={handleServiceChange}>
              <option value="Private Event">Private Event</option>
              <option value="Meal Prep">Meal Prep</option>
            </select>
          </div>
          <div className="input-section">
            <label for="date">Date of Service</label>
            <input type="date" id="date" name="date" required />
          </div>
        </div>

        {service === "Private Event" && (
          <div className="input-container">
            <div className="input-section">
              <label for="guests">Guest Count</label>
              <select id="guests" name="guests">
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>
        )}
        {service === "Meal Prep" && (
          <div className="input-container">
            <div className="input-section">
              <label for="mealCount">Number of Meals Per Week</label>
              <select id="mealCount" name="mealCount">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50+">50+</option>
              </select>
            </div>
          </div>
        )}
        <div className="input-container">
          <div className="input-section large-text">
            <label for="description">Event & Food Description</label>

            <textarea name="description" rows="10" cols="50" />
            <small>
              Basis of expectations for menu and services. Please provide some
              brief information on the type of event (if applicable), preferred
              ingredients for plates/meals (ie. proteins and veggies), or any
              information that will help us curate the perfect experience.
            </small>
          </div>
          <div className="input-section large-text">
            <label for="allergies">Allergy Concerns</label>
            <textarea name="allergies" rows="10" cols="50" />
            <small>
              Include any allergy information for all guests that I will be
              cooking for.
            </small>
          </div>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
