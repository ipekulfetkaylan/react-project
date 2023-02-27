import React from "react";

class Collapse extends React.Component{
  /*
  constructor(){
    super();
    this.state={
      showContent:false
    }
     
    this.showMore = () =>{
     console.log(this);    
    }
    
    // this.showMore = this.showMore.bind(this) bu yöntem pek kullanılmaz
  }
  */
  state={showContent:false} //constructor yazmadan da state i bu şekilde de gösterebiliriz.

  /*
  showMore(){
    this.setState({showContent: true})
  }
  */

  showMore = ()=>{
    this.setState({showContent: !this.state.showContent})
  }
  // arrow fun burada this'in ne olduğunu bilmiyor ancak bir üst scope a çıkıp bakıyor ve collapse componneti alıyor

  // Bir compopnent yazıldığında ilk önce constructor çalışır. constructor sayesinde state in ilk durumu oluşturulur ve sonrasında render metodu çalışır. Sonrasında onClick metodu çalışır. setSatate sayesinde state nesnesi güncellenir. setSatate metodu render metodunu tekrar tetikledi ve bu defa sayfa güncellenen satate hali ile geliyor.Jsx sayfada gösteriliyor


  componentDidMount(){
    console.log('component oluşturuldu');
  }
  componentDidUpdate(){
    console.log('component güncellendi');
  }
 


  render(){

    return (
      <>
          <button className="btn btn-primary w-100" onClick={this.showMore} >
           
            {/* (this.props.children.props.cardTitle) bu şekilde de gösterebiliriz ancak alt alta birden fazla component yazıldığında tek tek bulmak çok zor olacaktır. O yüzden children içini map ile gezip çekiyoruz  */}
            
            {React.Children.map(this.props.children, children => children.props.cardTitle)}
            
            

          </button>
          {
            this.state.showContent ? (
              <div className="collapse show">
                {/* {this.props.children} aynı şekilde burada da chilrenı bu şekilde alabiliriz ancak birden fazla componentte children ı map ile gezmek daha iyi sonuç verir*/}
                {React.Children.map(this.props.children, children => children)}

              </div>
            ): null
          }
     
      </>
    );
  }
}
export default Collapse;
