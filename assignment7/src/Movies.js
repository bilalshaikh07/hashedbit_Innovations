import Data from "./Data";
import MovieDetail from "./MovieDetail";
function Movies() {
    

    return (
        <div class="container mt-5">
            <div class="row">
                {
                    Data.map(movie => (
                        <div className="card col-md-4 mb-4" key={Data.id} style={{}}>
                            <img src={movie.imageUrl} class="card-img-top" alt={movie.title} />
                            <div className="card-body">
                                <h1 style={{textAlign:"center"}}><p className="card-text"> {movie.title} </p></h1>
                                <div className="btn">
                                <a href={`/MovieDetail/${movie.Id}`}  onClick={() => alert(movie.Id)} className="btn btn-primary">Details</a>

                                    </div>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>

    )
}
export default Movies;