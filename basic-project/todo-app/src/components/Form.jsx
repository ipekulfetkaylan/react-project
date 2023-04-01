import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const [inputText, setInputText]= useState("");
  const [todos, setTodos]= useState([]);
  const [status, setStatus]= useState("all");
  const [filteredTodos, setFilteredTodos]= useState([]);
 
  useEffect(()=>{
    getLocalTodo()
  },[])
  
  
  useEffect(()=>{
    filterHandler(todos)
    saveLocalTodos();
  },[todos, status])//eslint-disable-line

  
  const filterHandler= ()=>{
    switch(status){
       case "complated": 
       setFilteredTodos(todos.filter((todo)=>todo.completed === true))
       break;
       case "uncomplated": 
       setFilteredTodos(todos.filter((todo)=>todo.completed === false))
       break;
       default:
       setFilteredTodos(todos)
       break;
    }
  }


  const statusHandler= (e)=>{
     setStatus(e.target.value);
  }

  const inputTextHandler = (e)=>{
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    const isEmpty= str => !str.trim().length;
    if(isEmpty(inputText)){
      toast.error("Boş Todo Ekleyemezsiniz!")
    }else{
      setTodos([...todos, {text:inputText, completed:false, id:Math.random()}]);
      toast.success("Süüpeerrr! Yeni Görev Eklendi")
    }
    setInputText("")
  };


  const saveLocalTodos = ()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodo = () =>{
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }

 


  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2> Yapılacaklar</h2>
           <select name="todos" className="todoBtn" onChange={statusHandler}>
            <option value="all">Hepsi</option>
            <option value="complated">Tamamlanmış</option>
            <option value="uncomplated">Tamamlanmamış</option>
           </select>
        </div>
        <div className="card-body has-scrollbar">
          <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
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
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" 
      />
    </div>
  );
}
export default Form;
