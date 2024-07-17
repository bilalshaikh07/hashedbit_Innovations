import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieListPage from './Pages/MovieListPage';
import MovieDetailsPage from './Pages/MovieDetailsPage';
import BookingFormPage from './Pages/BookingFormPage';
import BookingConfirmationPage from './Pages/BookingConfirmationPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/book/:id" element={<BookingFormPage />} />
        <Route path="/confirmation" element={<BookingConfirmationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
