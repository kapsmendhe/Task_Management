import React, { useState } from 'react';
import TaskBar from './TaskBar';
import SavedTask from "./SavedTask";

function AddTask(props) {
    const { state, setState } = props;
    const [inputList, setInputList] = useState([]);
    const [isDisabled, setDisabled] = useState(false);
    const [taskDisplayed, setTaskDisplayed] = useState(true)

    const addHandler = (e) => {
        // console.log("Hello")
        setInputList(inputList.concat(
            <TaskBar setState={setState} setDisabled={setDisabled} setTaskDisplayed={setTaskDisplayed} />
        ));
        setDisabled(true);
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
                        task={ele.task}
                        taskDate={ele.taskDate}
                        taskDisplayed={taskDisplayed}
                        state={state}
                        setState={setState}
                    />
                );
            })}
        </div>
    )
}

export default AddTask
