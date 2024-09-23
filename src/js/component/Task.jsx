import React from "react";

const Task = ({task, deleteTask}) => {

    return (
        <li className="list-group-item">{task}
            <span onClick={deleteTask} className="delete-icon">X</span>
        </li>
    )
}

export default Task