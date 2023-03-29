import { useAppDispatch } from '../hook';
import { removeTodo, TodoType, toogleComplete } from '../store/todoSlice';

const TodoItem: React.FC<TodoType> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li className="mb-5 w-11/12 mx-auto ">
      <div className="flex items-center relative">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toogleComplete(id))}
          className="peer"
        />
        <span className="ml-1 mr-5 px-2 w-full rounded-md peer-checked:line-through">{title}</span>
        <span
          onClick={() => dispatch(removeTodo(id))}
          className="cursor-pointer text-primary-500 font-bold text-xl absolute right-0">
          &times;
        </span>
      </div>
      <hr className="mt-2" />
    </li>
  );
};

export default TodoItem;
