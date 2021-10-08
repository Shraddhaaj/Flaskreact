import React from 'react'
import APIService from './APIService'

function UpdateForm(props) {
    const [task, setTask] = useState(props.todo.task)
    const [decsription, setDescription] = useState(props.todo.decsription)

    const updateTask = () => {
        APIService.UpdateTask(props.todo.id, {task, decsription})
        .then(res => props.updateData(res) )
        .catch(error => console.log(error))
    }
    return(
        <div>
            {props.todo ? <div className="mb-3">
                <label htmlFor="task" className="form-label">Task</label>
                <input type="text" className="form-control"
                value={task}
                onChange = {(e) => setTask(e.target.value)}
                 placeholder="ënter task"
                />

                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                 rows="5" 
                 value={decsription}
                onChange = {(e) => setDescription(e.target.value)}
                 className="form-control"
                 placeholder="ënter description"
                />
                <button onclick={updateTask}
                className="btn btn-success"
                >Update</button>
            </div> : null}
        </div>
    )
}

export default UpdateForm