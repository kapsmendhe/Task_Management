import React, { useState } from 'react';
import TaskBar from './TaskBar';
import SavedTask from "./SavedTask";
import EditTask from './EditTask';




function AddTask(props) {
    const { state, setState } = props;

    const [isDisabled, setDisabled] = useState(false);
    const [control, setControl] = useState(false)
    const [editControl, setEditControl] = useState(false)
    const [index, setIndex] = useState()


    const addHandler = (e) => {
        setControl(true);
        setDisabled(true);
    }


    return (
        <div>
            <div className='task_line'>
                <p className="task">Task {state.length}</p>
                <button onClick={addHandler} disabled={isDisabled} className="add" id="add">
                    <i className="fas fa-plus"></i>
                </button>
            </div>

            {!control ? (
                !editControl ? (
                    <SavedTask
                        setIndex={setIndex}
                        state={state}
                        setEditControl={setEditControl}
                    />
                ) : (
                    <EditTask
                        setEditControl={setEditControl}
                        state={state}
                        index={index}
                    />
                )
            ) : (
                <TaskBar
                    setDisabled={setDisabled}
                    setState={setState}
                    setControl={setControl}
                />
            )}
        </div>
    )
}

export default AddTask
