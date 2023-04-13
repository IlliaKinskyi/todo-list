import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status, TodoState, TodoType } from './types'
import { fetchAddTodo, fetchTodos } from './asyncActions'


const initialState:TodoState = {
    list: [],
    status: Status.LOADING,
}

export const todosAdapter = createEntityAdapter()

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        toogleComplete(state, action: PayloadAction<string>) {
            const toogledTodo = state.list.find(todo => todo.id === action.payload)
            if (toogledTodo) {
                toogledTodo.completed = !toogledTodo.completed
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.status = Status.LOADING;
            state.list = [];
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.list = action.payload;
        });
        builder.addCase(fetchTodos.rejected, (state) => {
            state.status = Status.ERROR;
            state.list = [];
        });
        builder.addCase(fetchAddTodo.fulfilled, (state,action) => {
            if (action.payload?.title) {
                state.list.push({
                    id: new Date().toISOString(),
                    title: action.payload.title,
                    completed: false
                })
            }
        })
    }
})

export const { toogleComplete } = todoSlice.actions

export default todoSlice.reducer