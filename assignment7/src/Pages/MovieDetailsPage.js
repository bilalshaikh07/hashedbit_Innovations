import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Data from './Data.js';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const movieId = parseInt(id);

  useEffect(() => {
    const selectedMovie = Data.find(m => m.movieId === movieId);
    setMovie(selectedMovie);
  }, [movieId]);


  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container col-md-3 mx-auto">
        <div className="row">
          <div className="card text-center" style={{width: "50rem"}}>
            <div className="card-header"> <h3>{movie.title}</h3> </div>

            <img src={"../"+movie.imageUrl} className="card-img-top" alt={movie.title} />

            <div className="card-body">
              <h5><p>{movie.description}</p></h5>
              <h5><p>Genre: {movie.genre}</p></h5>
              <Link to={`/book/${movie.movieId}`} >
              <button className="btn btn-danger">Book Seats</button>   </Link>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default MovieDetailsPage;
