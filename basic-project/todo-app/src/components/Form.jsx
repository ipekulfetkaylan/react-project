import { useEffect, useState } from "react";
import TodoList from "./TodoList";

function Form({inputText, setInputText}) {
  const [todos, setTodos]= useState([]);
  const [status, setStatus]= useState([]);
  const [filteredTodos, setFilteredTodos]= useState([]);

  const filterHandler= ()=>{
    switch(status){
       case "fa-check": 
       setFilteredTodos(todos.filter((todo)=>todo.completed === true))
       break;
       case "fa-square": 
       setFilteredTodos(todos.filter((todo)=>todo.completed === false))
       break;
       default:
       setFilteredTodos(todos)
       break;
    }
  }

  const inputTextHandler = (e)=>{
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {text:inputText, completed:false, id:Math.random()}]);
    setInputText("")
  };

  useEffect(()=>{
    filterHandler(todos)
  },[todos])


  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2> Yapılacaklar</h2>
          <button className="todoBtn">
           <i id="todo-filter" className="far fa-square"></i>
          </button>
        </div>
        <div className="card-body has-scrollbar">
          <TodoList todos={todos} setTodos={setTodos}/>
        </div>
        <div className="card-footer ">
          <input type="text" id="todo-input" placeholder="Yeni todo ekle" 
          value={inputText}  
          onChange={inputTextHandler} />

          <button type="submit" id="todo-button" onClick={submitTodoHandler}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Form;
