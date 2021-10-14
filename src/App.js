
import './App.css';
import {useState, useEffect} from 'react'
import TodoList from './components/TodoList'
import UpdateForm from './components/UpdateForm';

function App() {

  const [todos, setTodos] = useState([])
  const [editedTodo, setEditedTodo] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
      'method':'GET',
      headers: {
        'Çontent-type':'ápplication/json'
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.log(error))
  }, [])

  const editTodo = (todo) => {
    setEditedTodo(todo)
  }

  const updateData = (todo) => {
    const new_todo = todos.map(my_todo => {
      if(my_todo.id === todo.id){
        return todo
      } else {
        return my_todo
      }
    })
    setTodos(new_todo)
  }

  return (
    <div className="App">
      <TodoList todos = {todos} editTodo = {editTodo}/>
      <UpdateForm todo={editedTodo} updateData={updateData}></UpdateForm>
    </div>
  );
}

export default App;
