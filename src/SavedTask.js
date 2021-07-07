import React, { useState } from 'react'
import EditTask from './EditTask';
function SavedTask(props) {
    const { state } = props;
    const [taskBar, setTaskBar] = useState([]);
    const editHandler = () => {
        setTaskBar(taskBar.concat(
            <EditTask state={state} />
        ))
    }

    return (
        <div className="saved_task" style={{ display: props.taskDisplayed ? "none" : 'true' }}>
            <div>
                <p>{props.task}</p>
                <p>{props.taskDate}</p>
            </div>
            <button onClick={editHandler}><i className="fas fa-edit"></i></button>
            <div>{taskBar}</div>
        </div>
    )
}

export default SavedTask
