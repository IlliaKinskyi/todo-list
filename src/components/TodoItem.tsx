import axios from 'axios';
import { useAppDispatch } from '../hook';
import { toogleComplete } from '../store/todos/todoSlice';
import { TodoType } from '../store/todos/types';

const TodoItem: React.FC<TodoType> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  const deleteTask = async (id: string) => {
    await axios.delete(`https://6427149c46fd35eb7c397933.mockapi.io/list/${id}`);
  };

  return (
    <li className="mb-5 w-11/12 mx-auto ">
      <div className="flex items-center relative">
        <input type="checkbox" checked={completed} className="peer" />
        <span className="ml-1 mr-5 px-2 w-full rounded-md peer-checked:line-through">{title}</span>
        <span
          className="cursor-pointer text-primary-500 font-bold text-xl absolute right-0"
          onClick={() => deleteTask(id)}>
          &times;
        </span>
      </div>
      <hr className="mt-2" />
    </li>
  );
};

export default TodoItem;
