import React, { useState } from 'react';
import { useAppDispatch } from '../hook';
import TodoForm from '../components/TodoForm';
import { addTodo } from '../store/todoSlice';
import { openModal } from '../store/modalSlice';

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
        <button className="text-white" onClick={() => dispatch(openModal())}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
