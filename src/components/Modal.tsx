import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import { addTodo } from '../store/todoSlice';
import { useAppDispatch } from '../hook';
import { openModal } from '../store/modalSlice';

type Props = {};

const Modal: React.FC<Props> = () => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText('');
      dispatch(openModal());
    }
  };

  return (
    <div
      className="w-full h-[100vh] absolute z-10 bg-black bg-opacity-70 flex justify-center items-center"
      onClick={() => dispatch(openModal())}>
      <TodoForm value={text} updateText={setText} handleAction={handleAction} />
    </div>
  );
};

export default Modal;
