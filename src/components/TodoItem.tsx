import { useAppDispatch } from '../hook';
import { TodoType } from '../store/todos/types';
import { fetchChangeToogle, fetchDeleteTodo } from '../store/todos/asyncActions';

const TodoItem: React.FC<TodoType> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  const deleteTask = async (id: string) => {
    await dispatch(fetchDeleteTodo(id));
  };

  const changeToogle = async ({ id, completed, title }: TodoType) => {
    await dispatch(fetchChangeToogle({ id, completed, title }));
  };

  return (
    <li className="mb-5 w-11/12 mx-auto ">
      <div className="flex items-center relative">
        <input
          type="checkbox"
          checked={completed}
          className="peer"
          onChange={() => changeToogle({ id, completed, title })}
        />
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
