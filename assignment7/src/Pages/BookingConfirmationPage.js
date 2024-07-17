import React from 'react';
import { useLocation } from 'react-router-dom';


const BookingConfirmationPage = () => {
  const location = useLocation();
  const { name, email, mobile, bookingId } = location.state;

  return (
    <><div class="card col-md-4 mx-auto">
      <div class="card-body">
        <div className="booking-confirmation">
          <h2>Booking Confirmation</h2>
          <br></br>
          <h6><p>Booking ID: {bookingId}</p></h6>
          <h6><p>Name: {name}</p></h6>
          <h6><p>Email: {email}</p></h6>
          <h6><p>Mobile: {mobile}</p></h6>
          <h5 style={{color:"green"}}><p>Seats successfully booked!</p></h5>
        </div>
      </div>
    </div></>

  );
};

export default BookingConfirmationPage;
