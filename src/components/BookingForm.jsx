import React from "react";
import { useState } from "react";
import Loading from "./Loading";
import { sendBookingEmail } from "../utility";
import "../styles/bookingForm.css";

const BookingForm = () => {
  const baseInfo = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    service: "Private Event",
    serviceDate: "",
    guestCount: "default",
    mealsPerWeek: "default",
    description: "",
    allergies: "",
  };
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("Private Event");
  const [formInfo, setFormInfo] = useState(baseInfo);

  const handleFirstNameChange = (e) => {
    setFormInfo({
      ...formInfo,
      firstName: e.target.value,
    });
  };

  const handleLastNameChange = (e) => {
    setFormInfo({
      ...formInfo,
      lastName: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setFormInfo({
      ...formInfo,
      email: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    setFormInfo({
      ...formInfo,
      phone: e.target.value,
    });
  };

  const handleServiceChange = (e) => {
    setService(e.target.value);
    setFormInfo({
      ...formInfo,
      service: e.target.value,
      guestCount: "N/A",
      mealsPerWeek: "N/A",
    });
  };

  const handleServiceDateChange = (e) => {
    setFormInfo({
      ...formInfo,
      serviceDate: e.target.value,
    });
  };

  const handleGuestCountChange = (e) => {
    setFormInfo({
      ...formInfo,
      guestCount: e.target.value,
    });
  };

  const handleMealsPerWeekChange = (e) => {
    setFormInfo({
      ...formInfo,
      mealsPerWeek: e.target.value,
    });
  };

  const handleDescriptionChange = (e) => {
    setFormInfo({
      ...formInfo,
      description: e.target.value,
    });
  };

  const handleAllergiesChange = (e) => {
    setFormInfo({
      ...formInfo,
      allergies: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await sendBookingEmail(formInfo);
    setLoading(false);
  };

  return (
    <div className="form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input-section">
            <label for="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className="input-section">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Smith"
              onChange={handleLastNameChange}
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
              onChange={handleEmailChange}
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
              onChange={handlePhoneChange}
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
            <label for="serviceDate">Date of Service</label>
            <input
              type="date"
              id="serviceDate"
              name="serviceDate"
              onChange={handleServiceDateChange}
              required
            />
          </div>
        </div>

        {service === "Private Event" && (
          <div className="input-container">
            <div className="input-section">
              <label for="guestCount">Guest Count</label>
              <select
                id="guestCount"
                name="guestCount"
                onChange={handleGuestCountChange}
              >
                <option value="default">Select</option>
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
              <label for="mealsPerWeek">Number of Meals Per Week</label>
              <select
                id="mealsPerWeek"
                name="mealsPerWeek"
                onChange={handleMealsPerWeekChange}
              >
                <option value="default">Select</option>
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
            <textarea
              name="description"
              rows="10"
              cols="50"
              onChange={handleDescriptionChange}
              required
            />
            <small>
              Basis of expectations for menu and services. Please provide some
              brief information on the type of event (if applicable), preferred
              ingredients for plates/meals (ie. proteins and veggies), or any
              information that will help us curate the perfect experience.
            </small>
          </div>
          <div className="input-section large-text">
            <label for="allergies">Allergy Concerns</label>
            <textarea
              name="allergies"
              rows="10"
              cols="50"
              onChange={handleAllergiesChange}
              required
            />
            <small>
              Include any allergy information for all guests that I will be
              cooking for.
            </small>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading ? true : false}
          className="submit-button"
        >
          Send Request
        </button>
        {loading && (
          <div className="page-info">
            <Loading />
            <small>Sending your request. This may take a moment.</small>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
