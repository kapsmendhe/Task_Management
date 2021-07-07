import React, { useState } from 'react'

function SavedTask(props) {
    const { state, setState } = props;
    const [taskBar, setTaskBar] = useState([]);
    const editHandler = () => {

        props.editItem(props.id);
        // setTaskBar(taskBar.concat(
        //     <EditTask
        //         task={state[props.id].task}
        //         taskDate={state[props.id].taskDate}
        //         taskTime={state[props.id].taskTime}
        //         taskUser={state[props.id].taskUser}
        //         setState={setState}
        //         state={state}
        //     />
        // )
        // )
    }

    return (
        <div className="saved_task" style={{ display: props.taskDisplayed ? "none" : 'true' }}>
            <div>
                <p>{props.task}</p>
                <p>{props.taskDate}</p>
            </div>
            <button onClick={editHandler}><i className="fas fa-edit"></i></button>
            {/* <div>{taskBar}</div> */}
        </div>
    )
}

export default SavedTask
