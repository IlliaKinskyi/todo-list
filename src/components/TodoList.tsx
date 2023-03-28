import { useAppSelector } from '../hook';
import TodoItem from './TodoItem';

type Props = {};

const TodoList: React.FC = (props: Props) => {
  const todos = useAppSelector((state) => state.todo.list);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
