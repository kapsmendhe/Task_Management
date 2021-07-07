import React, { useState } from 'react';
import TaskBar from './TaskBar';
import SavedTask from "./SavedTask";
import EditTask from './EditTask';

function AddTask(props) {
    const { state, setState } = props;
    const [inputList, setInputList] = useState([]);
    const [isDisabled, setDisabled] = useState(false);
    const [edit, setEdit] = useState(false);
    const [taskDisplayed, setTaskDisplayed] = useState(true)

    const [editvalue, setEditvalue] = useState({
        tasktitle: "",
        editDate: "",
        editTime: "",
        editUser: "",
    });

    const addHandler = (e) => {
        // console.log("Hello")
        setInputList(inputList.concat(
            <TaskBar setState={setState} setDisabled={setDisabled} setTaskDisplayed={setTaskDisplayed} />
        ));
        setDisabled(true);
    }


    const editItem = (id) => {
        setEdit(true);
        setEditvalue({
            tasktitle: state[id].task,
            editDate: state[id].taskDate,
            editTime: state[id].taskTime,
            editUser: state[id].taskUser,
        })
    }

    return (
        <div>
            <div className='task_line'>
                <p className="task">Task <span>0</span></p>
                <button onClick={addHandler} disabled={isDisabled} className="add" id="add">
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            <div>{inputList}</div>

            {state.map((ele, index) => {
                return (
                    <SavedTask
                        key={index}
                        id={index}
                        task={ele.task}
                        taskDate={ele.taskDate}
                        taskDisplayed={taskDisplayed}
                        state={state}
                        setState={setState}
                        editItem={editItem}
                    />
                );
            })}
            {edit ? (<EditTask
                task={editvalue.tasktitle}
                taskDate={editvalue.editDate}
                taskTime={editvalue.editTime}
                taskUser={editvalue.editUser}
            // passNoteEdit={EditNote}
            />) : null}
        </div>
    )
}

export default AddTask
