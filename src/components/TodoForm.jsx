import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for props validation

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);
    setValue("");
  };

  return (
    <form
      className="TodoForm flex w-[100%] bg-[#f3f0e9] border-4 border-[#634F40] rounded-md"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="todo-input"
        className="todo-input p-3 focus:outline-none"
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        type="submit"
        className="todo-btn w-[40%] bg-[#634F40] text-[#F3F0E9] text-md"
      >
        Add Task
      </button>
    </form>
  );
};

// Props validation using PropTypes
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
