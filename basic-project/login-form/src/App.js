import React, { useState } from "react";
import "./App.css";
import Form from "./Components/form/Form";
import Input from "./Components/input/Input";
import Button from "./Components/button/Button";

function App() {
  const [user, setUser] = useState({ name: "", password: "" });

 
  const handleChange = (e) => {
    if(e.target.type=== 'text'){
      setUser({...user, name: e.target.value });
    }else if(e.target.type==='password'){
      setUser({...user, password: e.target.value });
    }
  };

  const handleClick = ()=>{
    if(user.name ===""){
      alert("Kullanıcı adı boş bırakılamaz")
    }else if(user.password === ""){
      alert("Şifre boş bırakılamaz")
    }else{
      alert("Tebrikler giriş yaptınız")
    }
  }

  return (
    <div className="App">
      <Form>
        <h3 className="title">Login</h3>
        <Input type={"text"} placeholder={"Ad Soyad"} value={user.name} onChange={handleChange} />
        <Input type={"password"} placeholder={"Şifre"} value={user.password} onChange={handleChange}/>
        <p className="text">Forget Password?</p>
        <Button type={"submit"} onClick={handleClick} />
        {/* burafa arrow şeklinde fonksiyon yazmadığında sürekli olarak çağırdığından sonsuz bir döngüye giriyor çünkü direk olarak çağırmış oluyoruz o yüzden function yazdık */}
      </Form>
    </div>
  );
}

export default App;
