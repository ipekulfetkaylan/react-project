import { useState } from 'react';
import './App.css';
import Card from './components/card/Card';

function App() {
  const [products] = useState([{
    id:1,
    title: "Ekran Kartı",
    image:"https://picsum.photos/200/300",
    info: "lorem ipsum dolar",
    adet:1
  },
  {
    id:2,
    title: "Ekran Kartı",
    image:"https://picsum.photos/200/300",
    info: "lorem ipsum dolar",
    adet:1

  },
  {
    id:3,
    title: "Ekran Kartı",
    image:"https://picsum.photos/200/300",
    info: "lorem ipsum dolar",
    adet:1

  },
  {
    id:4,
    title: "Ekran Kartı",
    image:"https://picsum.photos/200/300",
    info: "lorem ipsum dolar",
    adet:1

  },
  {
    id:5,
    title: "Ekran Kartı",
    image:"https://picsum.photos/200/300",
    info: "lorem ipsum dolar",
    adet:1
  },
]);

const [basket, setBasket]= useState([])
  

  return (
    <div className="App">
      <h1>React Sepet Uygulaması</h1>
      <h3>Listelenen Ürünler</h3>

      <div className='urunler'>
        {
          products.map((product, index)=>{
            return <Card 
            onClick={()=>{
              const arr= [...basket]; 
              if(arr.findIndex((ind)=>{return product.id === ind.id }) === -1){
                arr.push(product);
                setBasket(arr)
              }
              else{
                arr.map((item)=>{
                   if(item.id === product.id){
                    return (product.adet +=1);
                  }
                  setBasket(arr)
                })
              }
            }} 
            key={index} 
            title={product.title} 
            info={product.info} 
            image={product.image}/>
          })
        }
      </div>
      <div className='sepet'>
        <h2>Sepet</h2>
        <ul className='items'>
          {
            basket.map((product,index)=>{
              return <li key={index}>
                {product.title + "------>" + product.info + "-----> Adet:" + product.adet}
              </li>

            })
          }
        </ul>
        {
          basket.length >0 ? (
          <button 
          onClick= {()=>{
            setBasket([])
          }}
           >Sepeti Temizle</button> 
          ): (
          <h2>Sepette Ürün Bulunmuyor</h2>)
        }
      </div>
    </div>
  );
}

export default App;
