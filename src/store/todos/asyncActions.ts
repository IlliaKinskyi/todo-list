import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodosStatus',
    async function() {
        const { data } = await axios.get('https://6427149c46fd35eb7c397933.mockapi.io/list')
        return data
    }
)