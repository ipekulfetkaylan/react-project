import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Todo({text, todos, setTodos, todo}){

    const deleteHandler= ()=>{
        setTodos(todos.filter((el)=> el.id !== todo.id))
        toast.warning("Bir Todo Silindi!")
    }

    const completedHandler= ()=>{
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
        toast.success("Görev Tamamlandı! Tebriklerrr")

    }
    return(
        <div className="todo-item todo">
              <li>{text}</li>
              <button className="todoBtn" onClick={completedHandler}>
              <i className={`${todo.completed ? "fa-solid fa-check" : "fas fa-square"}`}></i>
              </button>

              <button className="todoBtn"  onClick={deleteHandler}>
              <i className="fas fa-trash-alt"></i>
              </button>
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
    )
}


export default Todo