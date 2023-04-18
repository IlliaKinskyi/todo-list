import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { Status, TodoState } from './types'
import { fetchAddTodo, fetchChangeToogle, fetchDeleteTodo, fetchTodos } from './asyncActions'


const initialState:TodoState = {
    list: [],
    status: Status.LOADING,
}

export const todosAdapter = createEntityAdapter()

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
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
        });
        builder.addCase(fetchDeleteTodo.fulfilled, (state, action) => {
            state.list = state.list.filter(obj => obj.id !== action.payload.id)
        });
        builder.addCase(fetchChangeToogle.fulfilled, (state, action) => {

            const toogledTodo = state.list.find(obj => obj.id === action.payload.id)
            if (toogledTodo) {
                toogledTodo.completed = !toogledTodo.completed
            }
        });
    }
})


export default todoSlice.reducer