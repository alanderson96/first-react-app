import React from "react";
import "./ToDo.css";

function ToDo({ task, handleTaskDelete }) {
  const [isComplete, setIsComplete] = React.useState(false);
  function handleCheckboxClick(event) {
    const isChecked = event.target.checked;

    setIsComplete(isChecked);
  }
  return (
    <div
      className={
        isComplete ? "to-do-container task-complete" : "to-do-container"
      }
    >
      <input
        type="checkbox"
        checked={isComplete}
        onChange={handleCheckboxClick}
      />
      <p className={isComplete ? "complete" : ""}>{task}</p>
      <button onClick={() => handleTaskDelete(task)} className="delete">
        X
      </button>
    </div>
  );
}

export default ToDo;
