import React from 'react'

export default function TodoList(props) {
    const editTodo = (todo) => {
        props.editTodo(todo)
    }
    return(
        <div>
            {props.todos && props.todos.map(todo => {
        return(
        <div key={todo.id}>
          <h3>{todo.task}</h3>
          <p>{todo.description}</p>
          <p>{todo.date}</p>
          <div className="row">
            <div className="col-md-1">
                <button className="btn btn-primary" onClick= {() => editTodo(todo)}>Update</button>
            </div>
            <div className="col">
                <button className="btn btn-danger" onClick= {() => editTodo(todo)}>Delete</button>
            </div>

          </div>
        </div>
        )
      })}

        </div>
    )
}