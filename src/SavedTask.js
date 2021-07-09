import React from 'react';

function SavedTask(props) {

    const { setIndex, state, setEditControl } = props

    return (
        <div>
            {state.map((ele, index) => (
                <div className="saved_task">
                    <div>
                        <p>{ele.task}</p>
                        <p>{ele.taskDate}</p>
                    </div>
                    <button onClick={() => {
                        setIndex(index);
                        setEditControl(true)
                    }}>
                        <i className="fas fa-edit"></i></button>
                </div>
            ))}

        </div>
    )
}

export default SavedTask
