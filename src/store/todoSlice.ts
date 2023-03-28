import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TodoType = {
    id: string,
    title: string,
    completed: boolean,
}

type TodoState = {
    list: TodoType[]
}

const initialState: TodoState = {
    list: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            })
        },
        toogleComplete(state, action:PayloadAction<string>) {
            const toogledTodo = state.list.find(todo => todo.id === action.payload);
            if (toogledTodo) {
                toogledTodo.completed = !toogledTodo.completed;
            }
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        },
    },
});

export const { addTodo, toogleComplete, removeTodo } = todoSlice.actions

export type {TodoType};

export default todoSlice.reducer;