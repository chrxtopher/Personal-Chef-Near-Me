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

const BookingForm = () => {
  const baseInfo = {
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    serviceDate: "",
    guestCount: 0,
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
        parmTalapia: 0,
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
                  <div className="selection-btns-container">
                    <label for="brBurrito">Breakfast Burrito</label>
                    <select
                      id="brBurrito"
                      name="brBurrito"
                      onChange={handleBreakfastSelections}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div className="selection-btns-container">
                    <label for="brBowl">Breakfast Burrito Bowl</label>
                    <select
                      id="brBowl"
                      name="brBowl"
                      onChange={handleBreakfastSelections}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div className="selection-btns-container">
                    <label for="oatsAndFruit">Oats And Fruit</label>
                    <select
                      id="oatsAndFruit"
                      name="oatsAndFruit"
                      onChange={handleBreakfastSelections}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="meal-selections-container">
                  <h2>Lunch</h2>
                  <div className="selection-btns-container">
                    <label for="yakiStirFry">Teriyaki Stir Fry</label>
                    <select
                      id="yakiStirFry"
                      name="yakiStirFry"
                      onChange={handleLunchSelections}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div className="selection-btns-container">
                    <label for="sumSalad">Summer Crunch Salad</label>
                    <select
                      id="sumSalad"
                      name="sumSalad"
                      onChange={handleLunchSelections}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div className="selection-btns-container">
                    <label for="bbqPork">Pulled BBQ Pork</label>
                    <select
                      id="bbqPork"
                      name="bbqPork"
                      onChange={handleLunchSelections}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div className="selection-btns-container">
                    <label for="sumSalad">Southwest Chicken</label>
                    <select
                      id="southwChk"
                      name="southwChk"
                      onChange={handleLunchSelections}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div className="selection-btns-container">
                    <label for="cajunJamb">Cajun Jambalaya</label>
                    <select
                      id="cajunJamb"
                      name="cajunJamb"
                      onChange={handleLunchSelections}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="meal-selections-container">
                  <h2>Dinner</h2>
                  <div className="selection-btns-container">
                    <label for="carneAsada">Carne Asada Bowl</label>
                    <select
                      id="carneAsada"
                      name="carneAsada"
                      onChange={handleDinnerSelections}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div className="selection-btns-container">
                    <label for="searedPork">Pan Seared Pork</label>
                    <select
                      id="searedPork"
                      name="searedPork"
                      onChange={handleDinnerSelections}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div className="selection-btns-container">
                    <label for="medChkPasta">Mediterranean Chicken</label>
                    <select
                      id="medChkPasta"
                      name="medChkPasta"
                      onChange={handleDinnerSelections}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div className="selection-btns-container">
                    <label for="brisketMac">Brisket Macaroni</label>
                    <select
                      id="brisketMac"
                      name="brisketMac"
                      onChange={handleDinnerSelections}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div className="selection-btns-container">
                    <label for="parmTalapia">Parmesian Talapia</label>
                    <select
                      id="parmTalapia"
                      name="parmTalapia"
                      onChange={handleDinnerSelections}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div className="selection-btns-container">
                    <label for="atlcSalmon">Atlantic Salmon</label>
                    <select
                      id="atlcSalmon"
                      name="atlcSalmon"
                      onChange={handleDinnerSelections}
                    >
                      <option value={0}>0</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
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
                    <div className="selection-btns-container">
                      <label for="brBurrito">Breakfast Burrito</label>
                      <select
                        id="brBurrito"
                        name="brBurrito"
                        onChange={handleBreakfastSelections}
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div className="selection-btns-container">
                      <label for="brBowl">Breakfast Burrito Bowl</label>
                      <select
                        id="brBowl"
                        name="brBowl"
                        onChange={handleBreakfastSelections}
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div className="selection-btns-container">
                      <label for="oatsAndFruit">Oats & Fruit</label>
                      <select
                        id="oatsAndFruit"
                        name="oatsAndFruit"
                        onChange={handleBreakfastSelections}
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="meal-selections-container">
                    <h2>Lunch</h2>
                    <div className="selection-btns-container">
                      <label for="yakiStirFry">Teriyaki Stir Fry</label>
                      <select
                        id="yakiStirFry"
                        name="yakiStirFry"
                        onChange={handleLunchSelections}
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div className="selection-btns-container">
                      <label for="sumSalad">Summer Crunch Salad</label>
                      <select
                        id="sumSalad"
                        name="sumSalad"
                        onChange={handleLunchSelections}
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div className="selection-btns-container">
                      <label for="bbqPork">Pulled BBQ Pork</label>
                      <select
                        id="bbqPork"
                        name="bbqPork"
                        onChange={handleLunchSelections}
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div className="selection-btns-container">
                      <label for="sumSalad">Southwest Chicken</label>
                      <select
                        id="southwChk"
                        name="southwChk"
                        onChange={handleLunchSelections}
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div className="selection-btns-container">
                      <label for="cajunJamb">Cajun Jambalaya</label>
                      <select
                        id="cajunJamb"
                        name="cajunJamb"
                        onChange={handleLunchSelections}
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="meal-selections-container">
                    <h2>Dinner</h2>
                    <div className="selection-btns-container">
                      <label for="carneAsada">Carne Asada Bowl</label>
                      <select
                        id="carneAsada"
                        name="carneAsada"
                        onChange={handleDinnerSelections}
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div className="selection-btns-container">
                      <label for="searedPork">Pan Seared Pork</label>
                      <select
                        id="searedPork"
                        name="searedPork"
                        onChange={handleDinnerSelections}
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div className="selection-btns-container">
                      <label for="medChkPasta">Mediterranean Chicken</label>
                      <select
                        id="medChkPasta"
                        name="medChkPasta"
                        onChange={handleDinnerSelections}
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div className="selection-btns-container">
                      <label for="brisketMac">Brisket Macaroni</label>
                      <select
                        id="brisketMac"
                        name="brisketMac"
                        onChange={handleDinnerSelections}
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div className="selection-btns-container">
                      <label for="parmTalapia">Parmesian Talapia</label>
                      <select
                        id="parmTalapia"
                        name="parmTalapia"
                        onChange={handleDinnerSelections}
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                    <div className="selection-btns-container">
                      <label for="atlcSalmon">Atlantic Salmon</label>
                      <select
                        id="atlcSalmon"
                        name="atlcSalmon"
                        onChange={handleDinnerSelections}
                      >
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </div>
                  </div>
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
          {swipeCount === 7 && (
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
