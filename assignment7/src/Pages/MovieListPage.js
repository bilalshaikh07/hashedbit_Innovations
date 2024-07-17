import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Data from './Data.js';

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(Data);
  }, []);


  return (
    <>

      <div className="container">
        <div className="row" >
          {
            movies.map((movie) => {
              return (
                <div className="col-md-4" key={Data.id}>
                  <div className="card text-center" style={{ width: "18rem" }}>
                    <img src={movie.imageUrl} className="card-img-top" alt={movie.title} />
                    <div className="card-body">
                      <h3 style={{ textAlign: "center" }}><p className="card-text"> {movie.title} </p></h3>
                      <div className="btn">
                        <Link to={`/movie/${movie.movieId}`} className="btn btn-primary" >Details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default MovieListPage;
