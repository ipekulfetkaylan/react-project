import React from "react";
import { Link } from "react-router-dom";

class SeacrhBar extends React.Component{

    /*
    state = {
        searchQuery: ""
    }
    bu da bir şablon olarak kullanılabilir ancak app.js de bir state var ve searchQuery o state içine gönderirsek burada tekrar state yazmamıza gerek kalmaz bu yüzden burada bu 
    şablonu kullanmak yerine searchQuery i app.js de yazdık ve app.js de güncelledik. Bu şablonu kullandığımızda state i onChange içinde güncellemiştik. Ancak diğer durumda 
    onChange props olarak gönderilen bilgiyi çalıştırıyor. Props olarak app.js den gelen bilgi de statei güncelleyen function bilgisi

    */

    // form elemanı enter tuşuna bastığında sayfanın yenilenmesine sebep olduğu için bu davranışını durdurmak için onSubmit metodunu yazdık. Böylece arama yapıp enter a basıldığında davranış engellenmiş oldu
    handleFormSubmit= (e)=>{
        e.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <div className="row mb-5 mt-3 ">
                    <div className="col-9">
                        <input 
                        // onChange={(event) =>this.setState({searchQuery:event.target.value})} 
                        onChange={this.props.searchMovieProps}
                        // onChange searchMovieProps dan geleni çalıştırıyor
                        type='text'
                        className="form-control" 
                        placeholder="Search a movie"
                        // value= {this.state.searchQuery}
                        >
                        </input>
                        {/* girdiğimiz film isimlerinin yakalanmasını istediğimiz için onchange metodunu kullandık. Bu componente girilen texti bu componentin state bilgisi 
                         olarak düşünebiliriz.
                         İnputun içine direkt value değeri verdiğimizde o value değerini düzenleyemiyoruz. O yüzden bu value değerini dinamik hale getirmemiz gerek. Value 
                         değerine searchQuery gönderdiğimiz de state durumu value olarak atanıyor böylece artık searchBar ı react tarafından kontrol edebilir hale geliyoruz.
                         searchMovie function da value değerini searchQuery : event.target.value şeklinde güncelleme yaptığımız için de value değerini burada kaldırıyoruz.
                        */}
                    </div> 
                    <div className="col-3">
                        <Link 
                        to= "/add"
                        type="button"
                        className="btn btn-md btn-danger">Add Movie</Link>
                    </div>
                </div>
            </form>
        )
    }
}
export default SeacrhBar;