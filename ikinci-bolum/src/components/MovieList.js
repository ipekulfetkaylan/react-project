import React from "react";
import { Link } from "react-router-dom";


 const MovieList = (props) =>{
    // overview deki açıklamanın belli bir karakterde görünmesini sağlamak için yazılan bir function. Bu funtionlara truncate funtion denir
    const truncateOverview = (string, maxLength)=>{
        if(!string) return null;
        if(string.length <= maxLength) return string
        return `${string.substring(0, maxLength)}...`

    }

    return(
        <div className="row">
            {props.movies.map((movie,i)=>(

                <div className="col-lg-4" key={i}>
                {/* key yerine id yazmak yerine i yazmamızın sebebi jsona otomatik olarak add butonu üzerinden eklenen filmelerde react jsonun eşşiz bir id verdiği bilgisine sahip olmadığı için map fonksiyonuna 2.parametre olarak i ekledik ve bu i artık id yerini alıyor */}

                {/* <div className="col-lg-4" key={movie.id}> */}
                {/* key property vermemizin nedeni ayrı ayrı component oluşturmak yerine map ile dönmemeiz. Map ile döndüğümüz için her birinin ayrı propsu yok bu yüzden bir card ı diğerinden ayırt etmek için key veriyoruz. Böylece card ile ilgili bir işlem yapmak istenildiğinde react onun hangi kart olduğunu bilecek. Bu yüzden id ile ile herbirine ayrı bir key prop atamış olduk*/}
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageURL} className="card-img-top" alt="sample movies"></img>
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{truncateOverview(movie.overview,100)}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" onClick={(event)=>props.deleteMovieProp(movie)} className="btn btn-outline-danger btn-md">Delete</button>
                                {/* deleteMovie function prop haline dönüştürüp onClick içinde kullandık burada aynı şekilde ne sileceğini belirtmek için movie parametresini gönderdik */}
                                <Link 
                                to= {`edit/${movie.id}`}
                                type="button" className="btn btn-outline-primary btn-md">
                                Edit</Link>
                                {/* buraya movie.id yazmamızın sebebi edite tıklandığında dinamik olarak tıklanan filmin gelmesi çünkü hangi filmdeki edite tıkladığımızı bildirmemzi gerek ki bize o filmi getirebilsin . Buraya tıkladığımızda bize editMovie yi açacak*/}
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