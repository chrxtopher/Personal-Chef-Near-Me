import React from "react";
import BookingForm from "../components/BookingForm";

const Booking = () => {
  return (
    <div className="page">
      <section className="page-info">
        <p></p>
        <h1>Let's Get Started</h1>
        <p></p>
        <p>
          Complete and submit the form below to begin the booking process. I
          will receive your inquiry information and will be in contact via email
          and/or phone call soon. Event and food descriptions do not need to
          include every detail, as we will cover all specifications during our
          phone appointment and consultation.
        </p>
        <hr />
      </section>
      <BookingForm />
    </div>
  );
};

export default Booking;
