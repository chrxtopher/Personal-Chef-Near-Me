import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "./Loading";
import { sendBookingEmail } from "../utility";
import RequestSentResponse from "./RequestSentResponse";
import "../styles/bookingForm.css";
import "swiper/css";
import { Navigation } from "swiper/modules";
import SwiperButtonNext from "./SwiperButtonNext";
import SwiperButtonPrev from "./SwiperButtonPrev";
import SelectMealCount from "./SelectMealCount";

const BookingForm = () => {
  const baseInfo = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    serviceDate: "",
    guestCount: 0,
    courseCount: 0,
    mealsPerWeek: {
      weeklyTotal: 0,
      breakfast: {
        breakfastCount: 0,
        brBurrito: 0,
        brBowl: 0,
        oatsAndFruit: 0,
      },
      lunch: {
        lunchCount: 0,
        yakiStirFry: 0,
        sumSalad: 0,
        bbqPork: 0,
        southwChk: 0,
        cajunJamb: 0,
      },
      dinner: {
        dinnerCount: 0,
        carneAsada: 0,
        searedPork: 0,
        medChkPasta: 0,
        brisketMac: 0,
        parmTilapia: 0,
        atlcSalmon: 0,
      },
    },
    description: "",
    allergies: "",
  };
  const [swipeCount, setSwipeCount] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");
  const [formInfo, setFormInfo] = useState(baseInfo);

  const handleBreakfastSelections = (e) => {
    setFormInfo({
      ...formInfo,
      mealsPerWeek: {
        ...formInfo.mealsPerWeek,
        breakfast: {
          ...formInfo.mealsPerWeek.breakfast,
          [e.target.name]: parseInt(e.target.value),
        },
      },
    });
  };

  const handleCourseCountChange = (e) => {
    setFormInfo({
      ...formInfo,
      courseCount: parseInt(e.target.value),
    });
  };

  const handleLunchSelections = (e) => {
    setFormInfo({
      ...formInfo,
      mealsPerWeek: {
        ...formInfo.mealsPerWeek,
        lunch: {
          ...formInfo.mealsPerWeek.lunch,
          [e.target.name]: parseInt(e.target.value),
        },
      },
    });
  };

  const handleDinnerSelections = (e) => {
    setFormInfo({
      ...formInfo,
      mealsPerWeek: {
        ...formInfo.mealsPerWeek,
        dinner: {
          ...formInfo.mealsPerWeek.dinner,
          [e.target.name]: parseInt(e.target.value),
        },
      },
    });
  };

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
      guestCount: parseInt(e.target.value),
    });
  };

  const handleMealsPerWeekChange = (e) => {
    setFormInfo({
      ...formInfo,
      mealsPerWeek: {
        ...formInfo.mealsPerWeek,
        weeklyTotal: parseInt(e.target.value),
      },
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

  const handleNextClick = () => {
    swipeCount < 7 ? setSwipeCount(swipeCount + 1) : setSwipeCount(7);
  };

  const handleBackClick = () => {
    swipeCount > 0 ? setSwipeCount(swipeCount - 1) : setSwipeCount(0);
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
          speed={800}
          modules={[Navigation]}
        >
          <SwiperButtonPrev btnTitle="Back" handler={handleBackClick} />
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
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                  <label for="courseCount">Number of Courses</label>
                  <select
                    id="courseCount"
                    name="courseCount"
                    onChange={handleCourseCountChange}
                  >
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
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
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                  </select>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="meal-selections-container">
                  <h2>Breakfast</h2>
                  <SelectMealCount
                    label="Breakfast Burrito"
                    formID="brBurrito"
                    handler={handleBreakfastSelections}
                  />
                  <SelectMealCount
                    label="Breakfast Burrito Bowl"
                    formID="brBowl"
                    handler={handleBreakfastSelections}
                  />
                  <SelectMealCount
                    label="Oats and Fruit"
                    formID="oatsAndFruit"
                    handler={handleBreakfastSelections}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="meal-selections-container">
                  <h2>Lunch</h2>
                  <SelectMealCount
                    label="Teriyaki Stir Fry"
                    formID="yakiStirFry"
                    handler={handleLunchSelections}
                  />
                  <SelectMealCount
                    label="Summer Crunch Salad"
                    formID="sumSalad"
                    handler={handleLunchSelections}
                  />
                  <SelectMealCount
                    label="Pulled BBQ Pork"
                    formID="bbqPork"
                    handler={handleLunchSelections}
                  />
                  <SelectMealCount
                    label="Southwest Chicken"
                    formID="southwChk"
                    handler={handleLunchSelections}
                  />
                  <SelectMealCount
                    label="Cajun Jambalaya"
                    formID="cajunJamb"
                    handler={handleLunchSelections}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="meal-selections-container">
                  <h2>Dinner</h2>
                  <SelectMealCount
                    label="Carne Asada Bowl"
                    formID="carneAsada"
                    handler={handleDinnerSelections}
                  />
                  <SelectMealCount
                    label="Pan Seared Pork"
                    formID="searedPork"
                    handler={handleDinnerSelections}
                  />
                  <SelectMealCount
                    label="Mediterranean Chicken"
                    formID="medChicken"
                    handler={handleDinnerSelections}
                  />
                  <SelectMealCount
                    label="Brisket Macaroni"
                    formID="brisketMac"
                    handler={handleDinnerSelections}
                  />
                  <SelectMealCount
                    label="Parmesan Tilapia"
                    formID="parmTilapia"
                    handler={handleDinnerSelections}
                  />
                  <SelectMealCount
                    label="Atlantic Salmon"
                    formID="atlcSalmon"
                    handler={handleDinnerSelections}
                  />
                </div>
              </SwiperSlide>
            </>
          )) ||
            (service === "" && (
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
                      <option value="15">15</option>
                      <option value="20">20</option>
                      <option value="25">25</option>
                      <option value="30">30</option>
                    </select>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="meal-selections-container">
                    <h2>Breakfast</h2>
                    <SelectMealCount
                      label="Breakfast Burrito"
                      formID="brBurrito"
                      handler={handleBreakfastSelections}
                    />
                    <SelectMealCount
                      label="Breakfast Burrito Bowl"
                      formID="brBowl"
                      handler={handleBreakfastSelections}
                    />
                    <SelectMealCount
                      label="Oats and Fruit"
                      formID="oatsAndFruit"
                      handler={handleBreakfastSelections}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="meal-selections-container">
                    <h2>Lunch</h2>
                    <SelectMealCount
                      label="Teriyaki Stir Fry"
                      formID="yakiStirFry"
                      handler={handleLunchSelections}
                    />
                    <SelectMealCount
                      label="Summer Crunch Salad"
                      formID="sumSalad"
                      handler={handleLunchSelections}
                    />
                    <SelectMealCount
                      label="Pulled BBQ Pork"
                      formID="bbqPork"
                      handler={handleLunchSelections}
                    />
                    <SelectMealCount
                      label="Southwest Chicken"
                      formID="southwChk"
                      handler={handleLunchSelections}
                    />
                    <SelectMealCount
                      label="Cajun Jambalaya"
                      formID="cajunJamb"
                      handler={handleLunchSelections}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="meal-selections-container">
                    <h2>Dinner</h2>
                    <SelectMealCount
                      label="Carne Asada Bowl"
                      formID="carneAsada"
                      handler={handleDinnerSelections}
                    />
                    <SelectMealCount
                      label="Pan Seared Pork"
                      formID="searedPork"
                      handler={handleDinnerSelections}
                    />
                    <SelectMealCount
                      label="Mediterranean Chicken"
                      formID="medChicken"
                      handler={handleDinnerSelections}
                    />
                    <SelectMealCount
                      label="Brisket Macaroni"
                      formID="brisketMac"
                      handler={handleDinnerSelections}
                    />
                    <SelectMealCount
                      label="Parmesan Tilapia"
                      formID="parmTilapia"
                      handler={handleDinnerSelections}
                    />
                    <SelectMealCount
                      label="Atlantic Salmon"
                      formID="atlcSalmon"
                      handler={handleDinnerSelections}
                    />
                  </div>
                </SwiperSlide>
              </>
            ))}
          <SwiperSlide>
            <div className="input-container-vert">
              <label for="allergies">
                Allergies and/or Dietary Restrictions
              </label>
              <textarea
                name="allergies"
                rows="8"
                cols="50"
                onChange={handleAllergiesChange}
              />
            </div>
            {loading && (
              <div className="page-info">
                <Loading />
                <small>Sending your request. This may take a moment.</small>
              </div>
            )}
          </SwiperSlide>
          {swipeCount < 7 && (
            <SwiperButtonNext btnTitle="Next" handler={handleNextClick} />
          )}
          {swipeCount >= 7 && (
            <button
              type="button"
              className="swiper-btn nxt-btn"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </Swiper>
      </div>
    );
  }
};

export default BookingForm;
