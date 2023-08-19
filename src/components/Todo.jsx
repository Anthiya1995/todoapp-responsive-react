import PropTypes from "prop-types"; // Import PropTypes for props validation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo w-[100%] flex items-center justify-between p-4  bg-[#634F40] rounded-md">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`cursor-pointer text-left text-xs w-[60%] bg-[#634F40] text-[#F3F0E9] ${
          task.completed ? "completed line-through" : ""
        }`}
      >
        {task.task}
      </p>
      <div className="flex w-[18%] items-end justify-end ">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
          className="bg-[#634F40] text-[#F3F0E9]"
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
          className="bg-[#634F40] text-[#F3F0E9] "
        />
      </div>
    </div>
  );
};

// Props validation using PropTypes
Todo.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default Todo;
