import React, { useState } from 'react'

function EditTask(props) {

    const [update, setUpdate] = useState({
        task: props.task,
        taskDate: props.taskDate,
        taskTime: props.taskTime,
        taskUser: props.taskUser,
    })
    // const { task, taskDate, taskTime, taskUser, setState, state } = props;

    const [displayed, setDisplayed] = useState(false);

    const inputEvent = (e) => {
        const { task1, taskDate1, taskTime1, taskUser1 } = e.target;

        setUpdate((prev) => {
            return {
                ...prev,
                [task1]: taskDate1,
                [taskTime1]: taskUser1,
            };
        });
    }

    const saveClick = () => {

        // const newTaskDetails = [{ task: task1, taskDate: taskDate1, taskTime: taskTime1, taskUser: taskUser1 }];
        // setState(val => {
        //     return [...val, ...newTaskDetails]
        // })

        // setDisabled((e) => {
        //     return false;
        // });

        // setTaskDisplayed((e) => {
        //     return false;
        // });

        setDisplayed(true);

    }
    return (
        <div className="task_bar" style={{ display: displayed ? "none" : 'true' }}>
            <div className="task_des">
                <label>Task Description</label><br />
                <input id="des_inp" onChange={inputEvent} placeholder="enter" value={update.task} name="Task Description" />
            </div>

            <div className="date_time">
                <div>
                    <label>Date</label><br />
                    <input type="date" onChange={inputEvent} name="Date" value={update.taskDate} />
                </div>

                <div className="time">
                    <label>Time</label><br />
                    <input type="time" onChange={inputEvent} name="Time" value={update.taskTime} />
                </div>

            </div>
            <div className="user">
                <label>Assign User</label><br />
                <input name="Assign User" onChange={inputEvent} value={update.taskUser} />
            </div>

            <div className="btn_bar">
                <div className="btn-delete">

                    <button><i className="fas fa-trash-alt"></i></button>
                </div>
                <div className="cancel_save">
                    <button style={{ border: "none", marginRight: "10px", cursor: "pointer" }}>Cancel</button>
                    <button style={{ backgroundColor: "lightgreen", border: "none", cursor: "pointer" }} onClick={saveClick}>Save</button>
                </div>

            </div>
        </div>
    )
}

export default EditTask
