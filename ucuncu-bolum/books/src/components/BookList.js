import React from "react";
import './BookList.css'
import Book from './Book'
import {BookContext} from '../context/BookContext'


/*class BookList extends React.Component{
    // ilk olarak contexti kullanmak için statik bir context type oluşturmamız gerek.Bu context type BookContent e eşit olmak zorunda
    // static contextType= BookContext;(1.yöntem)
    render(){
        // const books= this.context (1.yöntem)

        /*const bookList= this.props.books.map((book,i)=>{
            return <Book book= {book} key= {i}></Book>
        gelen veriyi teker teker map metodundan geçirip props yöntemi ile book komponentine gönderiyoruz
            ARTIK PROPSTAN GELMEDİĞİ İÇİN MAP İÇİN BUNA GEREK YOK
        })
       

        return(
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">BookFolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">

                    {/* {bookList} propstan bilgi almadığımız için booklisti burada dönmüyoruz artık }

                    {/* contexten aldığımız veriyi bu şekilde dönüyoruz  }
                    {books.map((book, i)=>{
                        return <Book book={book} key={i}></Book>
                    })}

                </div>
            </div>
        </section>
        )
        
        
    }

}
*/

class BookList extends React.Component{
    render(){
        //artık this.context ile veriyi almıyoruz. Veriyi consumer ile alıyoruz
        return(
            <BookContext.Consumer>
                {value =>{
                    return(
                        <section className="page-section bg-light" id="portfolio">
                        <div className="container">
                            <div className="text-center">
                                <h2 className="section-heading text-uppercase">BookFolio</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                            <div className="row">
                               
                                {value.books.map((book, i)=>{
                                    return <Book book={book} key={i}></Book>
                                })}
            
                            </div>
                        </div>
                    </section>
                        

                    )
                }}
            </BookContext.Consumer>
        )
    }
}
export default BookList