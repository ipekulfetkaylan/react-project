function Todo({text, todos, setTodos, todo}){
    const deleteHandler= ()=>{
        setTodos(todos.filter((el)=> el.id !== todo.id))
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
        </div>
    )
}
<i class="fa-solid fa-check"></i>

export default Todo