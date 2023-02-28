import React from "react";

 const MovieList = (props) =>{
//     function handleClick(){
//     }
    return(
        <div className="row">
            {props.movies.map((movie)=>(

                <div className="col-lg-4" key={movie.id}> 
                {/* key property vermemizin nedeni ayrı ayrı component oluşturmak yerine map ile dönmemeiz. Map ile döndüğümüz için her birinin ayrı propsu yok bu yüzden bir card ı diğerinden ayırt etmek için key veriyoruz. Böylece card ile ilgili bir işlem yapmak istenildiğinde react onun hangi kart olduğunu bilecek. Bu yüzden id ile ile herbirine ayrı bir key prop atamış olduk*/}
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageURL} className="card-img-top" alt="sample movies"></img>
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{movie.overview}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" onClick={(event)=>props.deleteMovieProp(movie)} className="btn btn-outline-danger btn-md">Delete</button>
                                {/* deleteMovie function prop haline dönüştürüp onClick içinde kullandık burada aynı şekilde ne sileceğini belirtmek için movie parametresini gönderdik */}
                                <h2><span className="badge text-bg-info text-white">{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

           
        </div>
    )
}
export default MovieList