import Data from "./Data";
const MovieDetail = ({ match }) => {
       
        const Id = match.params.id; 
        const movie = {
          id: Id,
          title: 'Sample Movie',
          description: 'Movie description goes here.',
          genre: 'Action',
          
        };
      
        return (
          <div className="movie-details">
            <h2>{movie.title} Details</h2>
            <p>{movie.description}</p>
            <p>Genre: {movie.genre}</p>
            {/* Link to booking page */}
            <a href={`/book/${movie.Id}`}>Book Seats</a>
          </div>
        );
      };
      
      

export default MovieDetail;