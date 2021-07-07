import React, { useState } from 'react'

function EditTask(props) {

    const { state, setState, setDisabled, setTaskDisplayed } = props;

    const [displayed, setDisplayed] = useState(false);



    const saveClick = () => {


        setDisabled((e) => {
            return false;
        });

        setTaskDisplayed((e) => {
            return false;
        });

        setDisplayed(true);

    }
    return (
        <div className="task_bar" style={{ display: displayed ? "none" : 'true' }}>
            <div className="task_des">
                <label>Task Description</label><br />
                <input id="des_inp" placeholder="enter" value={state.task} name="Task Description" />
            </div>

            <div className="date_time">
                <div>
                    <label>Date</label><br />
                    <input type="date" name="Date" value={state.taskDate} />
                </div>

                <div className="time">
                    <label>Time</label><br />
                    <input type="time" name="Time" value={state.taskTime} />
                </div>

            </div>
            <div className="user">
                <label>Assign User</label><br />
                <input name="Assign User" value={state.taskUser} />
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
