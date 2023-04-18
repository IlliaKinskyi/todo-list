import React from 'react';
import ActionButton from '../styles/ActionButton';
import { useAppDispatch } from '../hook';
import { openModal } from '../store/modalSlice';

type TodoFormProps = {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ value, updateText, handleAction }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <div className="h-[30px] bg-primary-100 flex mx-auto font-bold items-center justify-between px-2 text-secondary-100">
        <p>New todo</p>
        <button className="" onClick={() => dispatch(openModal())}>
          &times;
        </button>
      </div>
      <div className="flex flex-col bg-white">
        <label>
          <textarea
            autoFocus
            placeholder="Write todo here"
            value={value}
            onChange={(event) => updateText(event.target.value)}
            className="h-[300px] w-[500px] p-1 outline-none resize-none"
          />
        </label>
        <button onClick={handleAction} className={`mx-2 my-2 + ${ActionButton}`}>
          Add todo
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
