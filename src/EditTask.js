import React, { useState } from 'react'

function EditTask(props) {

    const { index, state, setEditControl } = props;
    const [editState, setEditState] = useState(state);

    const [newData, setNewData] = useState({
        task: editState[index].task,
        taskDate: editState[index].taskDate,
        taskTime: editState[index].taskTime,
        taskUser: editState[index].taskUser,
    })

    const inputEvent = (e) => {
        setNewData({ ...newData, [e.target.name]: [e.target.value] })

    }

    const saveClick = (e) => {
        e.preventDefault();
        setEditState((state[index] = newData));
        setEditControl(false)
    }

    const cancelClick = () => {
        setEditControl(false)
    }

    const deleteClick = () => {
        state.splice(props.index, 1);
        setEditControl(false)
    }
    return (
        <div className="task_bar">
            <div className="task_des">
                <label>Task Description</label><br />
                <input id="des_inp" onChange={inputEvent} placeholder="enter" value={newData.task} name="task" />
            </div>

            <div className="date_time">
                <div>
                    <label>Date</label><br />
                    <input type="date" onChange={inputEvent} name="taskDate" value={newData.taskDate} />
                </div>

                <div className="time">
                    <label>Time</label><br />
                    <input type="time" onChange={inputEvent} name="taskTime" value={newData.taskTime} />
                </div>

            </div>
            <div className="user">
                <label>Assign User</label><br />
                <input type="text" name="taskUser" onChange={inputEvent} value={newData.taskUser} />
            </div>

            <div className="btn_bar">
                <div className="btn-delete">

                    <button onClick={deleteClick}><i className="fas fa-trash-alt"></i></button>
                </div>
                <div className="cancel_save">
                    <button style={{ border: "none", marginRight: "10px", cursor: "pointer" }} onClick={cancelClick}>Cancel</button>
                    <button style={{ backgroundColor: "lightgreen", border: "none", cursor: "pointer" }} onClick={saveClick}>Save</button>
                </div>

            </div>
        </div>
    )
}

export default EditTask
