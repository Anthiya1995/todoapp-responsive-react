import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for props validation

export const EditTodoForm = ({ task, editTodo }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form
      className="EditTodoForm TodoForm flex w-[100%] bg-[#f3f0e9] border-4 border-[#634F40] rounded-md"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="edit-todo-input"
        className="edit-todo-input p-3 focus:outline-none"
        placeholder="Do you want to update task?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        type="submit"
        className="edit-todo-btn w-[40%] bg-[#634F40] text-[#F3F0E9] text-md"
      >
        Update Task
      </button>
    </form>
  );
};

// Props validation using PropTypes
EditTodoForm.propTypes = {
  task: PropTypes.shape({
    task: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  editTodo: PropTypes.func.isRequired,
};
