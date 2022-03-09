import './App.scss';
import { useState } from "react"
import { render } from '@testing-library/react';
import Todo from './components/Todo';


function App() {
  const [todos, setTodos] = useState([])
  const [todoShow, setTodoShow] = useState([{
    id: "0",
    p: "This is a todo"
  }])
  
  let text = "";
  const addTodo = ()=>{
    const todoList = [...todos, text]
    setTodos(todoList)
    todos.map((todo, index)=>{
      console.log(todo);
    })
  }

  
  console.log(todos);
  return (
    <div className="App">

      <div className="input">
        <input 
        type="text"
        onChange={(e)=>{
          text = e.target.value
        }}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
        <h1>To do List</h1>
        {todos.map((todo, index)=>{
          return(
            <Todo id={index} text={todo}/>
          )
        })}
        
    </div>
  );
}

export default App;
