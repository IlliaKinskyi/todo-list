import { createSlice } from '@reduxjs/toolkit'

type StateType = {
    isOpened: boolean;
}

const initialState: StateType = {
    isOpened: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpened = !state.isOpened
        }
    }
})

export const { openModal } = modalSlice.actions;

export default modalSlice.reducer;