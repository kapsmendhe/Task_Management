import React, { useState } from 'react'

function TaskBar(props) {

    const { setState, setDisabled, setControl } = props;

    const [task, setTask] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskTime, setTaskTime] = useState("");
    const [taskUser, setTaskUser] = useState("");
    // const [displayed, setDisplayed] = useState(false);

    const taskHandler = (e) => {
        setTask(e.target.value);
    }
    const dateHandler = (e) => {
        setTaskDate(e.target.value);
    }
    const timeHandler = (e) => {
        setTaskTime(e.target.value);
    }
    const userHandler = (e) => {
        setTaskUser(e.target.value);
    }

    const saveClick = () => {
        const newTaskDetails = [{ task: task, taskDate: taskDate, taskTime: taskTime, taskUser: taskUser }];
        setState(val => {
            return [...val, ...newTaskDetails]
        })

        setDisabled(false);

        setControl(false)
        // setDisplayed(true);

    }

    const cancelClick = () => {
        setControl(false);
        setDisabled(false);
    }

    return (
        <div className="task_bar">
            <div className="task_des">
                <label>Task Description</label><br />
                <input id="des_inp" placeholder="enter" onChange={taskHandler} value={task} name="Task Description" />
            </div>

            <div className="date_time">
                <div>
                    <label>Date</label><br />
                    <input type="date" name="Date" onChange={dateHandler} value={taskDate} />
                </div>

                <div className="time">
                    <label>Time</label><br />
                    <input type="time" name="Time" onChange={timeHandler} value={taskTime} />
                </div>

            </div>
            <div className="user">
                <label>Assign User</label><br />
                <input name="Assign User" onChange={userHandler} value={taskUser} />
            </div>

            <div className="btn_bar">
                <div className="btn-delete">
                    <p></p>
                    {/* <button><i className="fas fa-trash-alt"></i></button> */}
                </div>
                <div className="cancel_save1">
                    <button style={{ border: "none", marginRight: "10px", cursor: "pointer" }} onClick={cancelClick}>Cancel</button>
                    <button style={{ backgroundColor: "lightgreen", border: "none", cursor: "pointer" }} onClick={saveClick}>Save</button>
                </div>

            </div>
        </div>
    )
}

export default TaskBar
