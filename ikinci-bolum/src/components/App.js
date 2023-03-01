import React from "react";
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from "axios";
import AddMovie from "./AddMovie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditMovie from "./EditMovie";


class App extends React.Component{
    // ilerde alacağımız film sayısı değişebilceği için movies arryini state içine gömdük. State bir obje o yüzden movies bir property olarak geleceği için = değil : koyuyoruz
    state= {
       /* movies: [
            {
              'name': "The Matrix 3",
              'rating': "8.1",
              'overview':
                "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
              'imageURL':
                "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
              'id': 7,
            },
            {
              'name': "The Matrix Reloaded",
              'rating': "6.9",
              'imageURL':
                "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jBegA6V243J6HUnpcOILsRvBnGb.jpg",
              'overview':
                "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance. Neo himself has discovered his superpowers including super speed, ability to see the codes of the things ins'id'e the matrix and a certain degree of pre-cognition.",
              'id': 8,
            },
            {
              'name': "Saw 3D",
              'rating': "7.5",
              'overview':
                "SAW legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
              'imageURL':
                "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg",
              'id': 11,
            },
            {
              'name': "Blitz 007",
              'rating': "11",
              'overview':
                "A tough, renegade cop with a gay s'id'ekick is dispatched to take down a serial killer who has been targeting police officers. AÇIKLAMA AÇIKLAMA",
              'imageURL':
                "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qCPMjT8Ld8tvs1zs7LY2jpKlRIK.jpg",
              'id': 12,
            },
            {
              'name': "Hostage",
              'rating': "6.3",
              'imageURL':
                "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg",
              'overview':
                "When a mafia accountant is taken hostage on his beat, a police officer – wracked by guilt from a prior stint as a negotiator – must negotiate the standoff, even as his own family is held captive by the mob.",
              'id': 13,
            },
          ],
          movies i json dosyasından çekeceğimiz için şimdiye kadar kullandığımız bu movie arrayini kaldırıyoruz.
          */

          movies: [],
          searchQuery: ''
          // SearchBar daki property i buraya ekledik böylece tekrar state yazmak yerine var olan state içine yazdık ve bu stati güncelleyeceğiz
    }

    //dışarıdan bir istek yapacaksak eğer componentDidMount içinde yapmak en mantıklısıdır.componentDidMount UI componentleri Dom da yerini aldıktan hemen sonra çalışıyor. O yüzden bir http isteği yapacaksak bu metodun içinde yapmak en iyisi

    /*
    async componentDidMount(){
      const baseURL= "http://localhost:3002/movies"; //fetch bu url üzerinden yapacağız çünkü verilerimiz bu url de 
      const response=await fetch(baseURL);
      // fetch bize bir promise dönecek çünkü promise tabanlı. Ancak biz bir json istiyoruz o yüzden response.json() yapıyoruz datayı json a çeviriyoruz
      const data=await response.json();
      //fetch asenkron sorgular yapıyor bunu kabul etmek için function ı asenkron hale getirmek gerekiyor bunun için function ın başına ASYNC ekliyoruz ve aldığımız verilerin başına AWAIT ekliyoruz. Böylece dönen promise asenkron bir şekilde alabiliriz
      this.setState({movies: data})
      //sorgu sonrası gelen bilgiler ile stati güncelleyerek ekrana basabiliriz.
    }
    */

    async componentDidMount(){
      //aynısını fetch ile de yapıyoruz ancak fetch bize promise döndüğü için onu jsona çeviriyoruz axios ta ise direkt olarak veriyi tek basamakta çekebiliyoruz
      const response= await axios.get("http://localhost:3002/movies");
      this.setState({movies: response.data})
    }

    /*
    deleteMovie = (movie)=>{
      const newMovieList = this.state.movies.filter(m => m.id !== movie.id);

      /*this.setState({
        movies: newMovieList
      })
       bu şablon genelde önceki state durumu boş bir array olduğunda kullanılır.Yani bizim elimizde film nesnesi olmasaydı yukarıdaki şablonu kullanmak daha mantıklı
       Ama şuanda bizim state durumu boş değil içinde içerik var yani var olan filmler üzerinden stati güncelliyoruz. Bu yüzden var olan state i parametre olarak almak daha doğru 
       bir yöntem
     this.setState(state => ({movies: newMovieList}))
    }
    */

   //FETCH 
   /*
    deleteMovie = async (movie)=>{
      const baseURL= `http://localhost:3002/movies/${movie.id}`;
      await fetch(baseURL,{
        method: 'DELETE'
      })
      //yukarıdaki fetch yapısında get metodunu belirtmedik çünkü default olarak get ile geliyor ancak burada metodu delete diye belirtmemiz gerekiyor
      const newMovieList = this.state.movies.filter(m => m.id !== movie.id);
      this.setState(state =>({
        movies: newMovieList
      }))     
    }
    */

   //AXİOS DELETE MOVİE
    deleteMovie = async (movie)=>{
      axios.delete(`http://localhost:3002/movies/${movie.id}`)
      const newMovieList = this.state.movies.filter(m => m.id !== movie.id);
      this.setState(state =>({
        movies: newMovieList
      }))     
    }

    //SEARCH MOVİE
    searchMovie = (event) =>{
     this.setState({searchQuery : event.target.value})
    }

    //ADD MOVİE
    addMovie = async (movie) =>{
      await axios.post("http://localhost:3002/movies/", movie)
      this.setState(state => ({
        movies:state.movies.concat([movie])
      }))
    }

    render(){

      let filteredMovies = this.state.movies.filter(
        (movie)=>{
        return movie.name.toLocaleLowerCase().indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1
      }
      ).sort((a,b)=>{
        return a.id < b.id ? 1 : a.id > b.id ? -1 :0
      })
      // burada sort metodu yazmamızın sebebi en son eklediğimiz filmin en başta görünmesini istediğimiz için bu metodu yazmadan en son eklenen filmler en sonda yer alıyordu

        return(
          // sayfayı başka bir sayfaya yönlendirmek için router kullandık
              <Router>
                <Routes>
                  <Route path="/" element ={
                    <>
                      <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <SearchBar searchMovieProps= {this.searchMovie}></SearchBar>
                              {/* searchMovieProps searchMovie function ı çalıştırıyor */}
                          </div>
                      </div>
                      <MovieList 
                      movies={filteredMovies}
                      deleteMovieProp= {this.deleteMovie}
                      ></MovieList>
                    {/* deleteMovie function ile delete buttonunu birbirine bağlamak için (yani parent componentten child componente bir bilgi göndereceğiz) en kolay yol deleteMovie functionı PROPS haline dönüştürmektir. Bu yüzden deleteMovieProp adında bir prop yazdık. Bunun içinde this kullanmamızın nedeni de class component olduğu için. */}
                    </div>
                    </>
                  }>
                  </Route>
                  <Route path="add" element= { <AddMovie
                  onAddMovie = {(movie) =>{this.addMovie(movie)}}
                  
                  ></AddMovie>}></Route>

                  <Route path="edit/:id" element = {
                    <EditMovie></EditMovie>
                  }></Route>
                  
                </Routes>
                
              </Router>
        )

    }
}

export default App;
