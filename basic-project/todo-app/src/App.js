import { useState } from 'react';
import './App.css';
import Form from './components/Form';


function App() {
  const [inputText, setInputText]= useState("");
  

  return (
    <div className="App">
      <Form  inputText={inputText} setInputText={setInputText} />
    </div>
  );
}

export default App;
