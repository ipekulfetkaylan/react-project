import Todo from "./Todo";

function TodoList({todos, setTodos, filteredTodos}){

    return(
        <div>
          <ul data-filter="0" className="todo-list" id="todo-list">
            {
                filteredTodos.map((todo)=>{
                   return <Todo key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo={todo} />
                })
            }
          </ul>
        </div>
    )
}
export default TodoList