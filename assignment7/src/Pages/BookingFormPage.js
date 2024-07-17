import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingFormPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const navigate = useNavigate();
  const movieId = parseInt(id);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 1000000);
    navigate('/confirmation', {
      state: { ...formData, bookingId }
    });
  };

  return (
    <div className="booking-form col-md-4 mx-auto class">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label for="exampleFormControlInput1">Name address</label>
          <input type="text" id="name" class="form-control" name="name" value={formData.name} onChange={handleInputChange} required />

        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" id="email" class="form-control" name="email" value={formData.email} onChange={handleInputChange} required />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Phone Number</label>
          <input type="text" id="mobile" class="form-control" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
          </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  );
};

export default BookingFormPage;
