import React from "react";

class MovieList extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg" className="card-img-top card-fluid" alt="sample movies"></img>
                        <div className="card-body">
                            <h5 className="card-title">Sample Movies</h5>
                            <p className="card-text">Sample movies text. Sample movies text..</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-outline"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieList