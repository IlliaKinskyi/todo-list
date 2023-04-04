import React from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import TodoList from './components/TodoList';
import { useAppDispatch, useAppSelector } from './hook';
import ActionButton from './styles/ActionButton';
import { openModal } from './store/modalSlice';
import { useEffect } from 'react';
import { fetchTodos } from './store/todos/asyncActions';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.modal.isOpened);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      {selector && <Modal />}
      <Header />
      <button
        className={`my-[50px] mx-[50px] + ${ActionButton}`}
        onClick={() => {
          dispatch(openModal());
        }}>
        Add todo
      </button>

      <TodoList />
    </div>
  );
};

export default App;
