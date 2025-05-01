import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "./Loading";
import { sendBookingEmail } from "../utility";
import RequestSentResponse from "./RequestSentResponse";
import "../styles/bookingForm.css";
import "swiper/css";
import { Navigation, EffectCreative } from "swiper/modules";
import SwiperButtonNext from "./SwiperButtonNext";
import SwiperButtonPrev from "./SwiperButtonPrev";

const BookingForm = () => {
  const baseInfo = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    serviceDate: "",
    guestCount: "",
    mealsPerWeek: "",
    description: "",
    allergies: "",
  };
  const [formSent, setFormSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");
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

  // const handleServiceChange = (e) => {
  //   setService(e.target.value);
  //   setFormInfo({
  //     ...formInfo,
  //     service: e.target.value,
  //     guestCount: "N/A",
  //     mealsPerWeek: "N/A",
  //   });
  // };

  const handleMealPrepSelection = (e) => {
    setService("Meal Prep");
    setFormInfo({
      ...formInfo,
      service: "Meal Prep",
    });
  };

  const handlePrivateEventSelection = (e) => {
    setService("Private Event");
    setFormInfo({
      ...formInfo,
      service: "Private Event",
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
    console.log(formInfo);
    // setLoading(true);
    // await sendBookingEmail(formInfo);
    // setLoading(false);
    // setFormSent(true);
  };

  if (formSent) {
    return <RequestSentResponse />;
  } else {
    return (
      <div>
        <Swiper
          grabCursor={false}
          allowTouchMove={false}
          creativeEffect={{
            prev: {
              shadow: false,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          speed={800}
          modules={[Navigation, EffectCreative]}
        >
          <SwiperButtonPrev btnTitle="Back" />
          <SwiperSlide>
            <div className="input-container-vert">
              <label for="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="input-container-vert">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Smith"
                onChange={handleLastNameChange}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="input-container-vert">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.smith@example.com"
                onChange={handleEmailChange}
              />
            </div>
            <div className="input-container-vert">
              <label for="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={handlePhoneChange}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="selection-btns-container">
              <button
                type="button"
                className={`selection-btn ${
                  service === "Meal Prep" ? "active-btn" : ""
                }`}
                onClick={handleMealPrepSelection}
              >
                Meal Prep
              </button>
              <button
                type="button"
                className={`selection-btn ${
                  service === "Private Event" ? "active-btn" : ""
                }`}
                onClick={handlePrivateEventSelection}
              >
                Private Event
              </button>
            </div>
          </SwiperSlide>
          {service === "Private Event" && (
            <>
              <SwiperSlide>
                <div className="input-container-vert">
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
                <div className="input-container-vert">
                  <label for="serviceDate">Date of Event</label>
                  <input
                    type="date"
                    id="serviceDate"
                    name="serviceDate"
                    onChange={handleServiceDateChange}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="input-container-vert">
                  <label for="description">Event Description</label>
                  <textarea
                    name="description"
                    rows="8"
                    cols="50"
                    onChange={handleDescriptionChange}
                  />
                </div>
              </SwiperSlide>
            </>
          )}
          {(service === "Meal Prep" && (
            <>
              <SwiperSlide>
                <div className="input-container-vert">
                  <label for="mealsPerWeek">Number of Meals Per Week</label>
                  <select
                    id="mealsPerWeek"
                    name="mealsPerWeek"
                    onChange={handleMealsPerWeekChange}
                  >
                    <option value="default">Select</option>
                    <option value="10">10</option>
                    <option value="10">15</option>
                    <option value="20">20</option>
                    <option value="10">25</option>
                    <option value="30">30</option>
                    <option value="40">35</option>
                    <option value="10">40</option>
                    <option value="50+">50+</option>
                  </select>
                </div>
              </SwiperSlide>
            </>
          )) ||
            (service === "" && (
              <>
                <SwiperSlide>
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
                </SwiperSlide>
              </>
            ))}
          <SwiperSlide>
            <div className="input-container-vert">
              <label for="allergies">Allergy Concerns</label>
              <textarea
                name="allergies"
                rows="8"
                cols="50"
                onChange={handleAllergiesChange}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            Double check info
            {loading && (
              <div className="page-info">
                <Loading />
                <small>Sending your request. This may take a moment.</small>
              </div>
            )}
          </SwiperSlide>
          <SwiperButtonNext />
        </Swiper>
      </div>
    );
  }
};

export default BookingForm;
