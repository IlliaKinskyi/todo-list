import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status, TodoState, TodoType } from './types'
import { fetchTodos } from './asyncActions'


const initialState:TodoState = {
    list: [],
    status: Status.LOADING,
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos(state, action: PayloadAction<TodoType[]>) {
            state.list = action.payload
        },
        toogleComplete(state, action: PayloadAction<string>) {
            const toogledTodo = state.list.find(todo => todo.id === action.payload)
            if (toogledTodo) {
                toogledTodo.completed = !toogledTodo.completed
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.status = Status.LOADING;
            state.list = [];
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.list = action.payload;
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.list = [];
        });
    }
})

export const { setTodos, toogleComplete } = todoSlice.actions

export default todoSlice.reducer