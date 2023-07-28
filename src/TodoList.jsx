import { TodoItem } from "./TodoItem";

export function TodoList({todos, toggleTodo, deleteTodo}) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        //Key is useful because react wants to know which todo is changed if we wanted to edit it
        return (
            <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      
        );
      })}
    </ul>
  );
}
