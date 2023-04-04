import { useAppDispatch, useAppSelector } from '../hook';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const list = useAppSelector((state) => state.todo.list);

  return (
    <ul>
      {list.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default TodoList;
