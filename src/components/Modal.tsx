import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import { addTodo } from '../store/todoSlice';
import { useAppDispatch } from '../hook';

type Props = {};

const Modal: React.FC<Props> = () => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="w-full h-[100vh] absolute z-10 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="relative">
        <TodoForm value={text} updateText={setText} handleAction={handleAction} />
      </div>
    </div>
  );
};

export default Modal;
