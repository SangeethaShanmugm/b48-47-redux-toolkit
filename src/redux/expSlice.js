import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    expenditure: []
}

const expSlice = createSlice({
    name: "expenditure",
    initialState,
    reducers: {
        addExp: (state, action) => {
            state.expenditure.push({ id: Date.now(), category: action.payload })
            console.log(state, action)
            console.log(action.payload)
        },
        deleteExp: (state, action) => {
            state.expenditure = state.expenditure.filter((expend) => expend.id !== action.payload)
            console.log(action.payload)
            console.log(state.expenditure)
        }
    }
})

export const { addExp, deleteExp } = expSlice.actions

export default expSlice.reducer