import React from "react";
import BookingForm from "../components/BookingForm";

const Booking = () => {
  return (
    <div className="page">
      <section className="page-info">
        <h1>Booking</h1>
        <p>
          Complete and submit the form below to begin the booking process. I
          will receive your inquiry information and will be in contact via email
          and/or phone call soon. Event and food descriptions do not need to
          include every detail, as we will cover all specifications during our
          phone appointment and consultation.
        </p>
        <p>
          Please double check that all contact information provided is correct.
        </p>
        <hr />
      </section>
      <BookingForm />
    </div>
  );
};

export default Booking;
