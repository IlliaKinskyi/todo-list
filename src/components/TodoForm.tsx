import React from 'react';
import ActionButton from '../styles/ActionButton';

type TodoFormProps = {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ value, updateText, handleAction }) => {
  return (
    <label>
      <input
        placeholder="Write todo here"
        value={value}
        onChange={(event) => updateText(event.target.value)}
        className="h-[100px] w-[300px] rounded-lg p-1 outline-none"
      />
      <button onClick={handleAction} className={`mx-2 + ${ActionButton}`}>
        Add todo
      </button>
    </label>
  );
};

export default TodoForm;
