import { useAppDispatch } from '../hook';
import { removeTodo, TodoType, toogleComplete } from '../store/todoSlice';

const TodoItem: React.FC<TodoType> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={() => dispatch(toogleComplete(id))} />
      <span>{title}</span>
      <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;
