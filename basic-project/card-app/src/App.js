import './App.css';
import {useState} from "react"
import Card from './components/card/Card';
import Button from './components/button/Button';

function App() {
  const [products] = useState([{
    id:1,
    title: "Lorem",
    images: "https://picsum.photos/200/300",
    text: "Lorem ipsum dolar sit amet",
    adet:1
  },
  {
    id:2,
    title: "Lorem Ipsum",
    images: "https://picsum.photos/200/300",
    text: "Lorem ipsum dolar sit amet amet",
    adet:1
  },
  {
    id:3,
    title: "Lorem Ipsum",
    images: "https://picsum.photos/200/300",
    text: "Lorem ipsum dolar sit amet amet ",
    adet:1
  },
  {
    id:4,
    title: "Lorem Ipsum Dolar",
    images: "https://picsum.photos/200/300",
    text: "Lorem ipsum dolar sit amet amet ",
    adet:1
  },
]);

const [basket, setBasket] = useState([]);
  

  return (
    <div className="App">
      <h1 className="mt-5">Hoş Geldiniz</h1>

      <div className="container mt-3 d-flex align-items-center justify-content-center  flex-wrap">
      {
        products.map((product, index)=>{
          return <Card title={product.title} text={product.text} 
                  images= {product.images} key={index}>
                   <Button
                   onClick ={()=>{
                    const arr=[...basket];
                    if(arr.findIndex((ind)=>{return ind.id === 
                      product.id})===-1){
                        arr.push(product)
                        setBasket(arr)
                    }else{
                      arr.map((item)=>{
                        if(item.id === product.id){
                          return (product.adet += 1)
                        }
                        setBasket(arr)
                      })
                    }
                   }}
                   />
                  </Card>
        })
      }
      </div>
      <div className='mt-3 fs-3'>Sepet
        {
          basket.map((product, index)=>{
            return <div  key={index}>
              {product.title + "=" + product.text + "= Adet " + product.adet}
            </div>
          })
        }
      {
        basket.length > 0 ? (
          <button className='btn btn-danger' onClick={()=>{setBasket([])}}> Sepeti Temizle</button>
        ) : ( <h2>Sepette Ürün Bulunmuyor</h2>)
      }
      </div>
    </div>

  );
}

export default App;

