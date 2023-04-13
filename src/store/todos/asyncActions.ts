import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { TodoType } from './types'

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodosStatus',
    async function() {
        const { data } = await axios.get('https://6427149c46fd35eb7c397933.mockapi.io/list')
        return data
    }
)

export const fetchAddTodo = createAsyncThunk(
    'todos/fetchAddTodo',
    async (obj: TodoType) => {
        try {
            const { data } = await axios.post<TodoType>('https://6427149c46fd35eb7c397933.mockapi.io/list/', obj)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)
