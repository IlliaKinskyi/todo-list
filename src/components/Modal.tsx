import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import { useAppDispatch } from '../hook';
import { openModal } from '../store/modalSlice';
import { fetchAddTodo } from '../store/todos/asyncActions';

type Props = {};

const Modal: React.FC<Props> = () => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleAction = async () => {
    if (text.trim().length) {
      await dispatch(
        fetchAddTodo({
          title: text,
          id: new Date().toISOString(),
          completed: false,
        }),
      ).unwrap();
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
