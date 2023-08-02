import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    books : []
}

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers:{
        addBook: (state,action) => {
            state.books = [
                ...state.books,
                action.payload
            ]
        },
        deleteBook: (state,action) =>{
            state.books = [
                action.payload
            ]
        },
    }
})

export const { addBook , deleteBook} = bookSlice.actions;
export default bookSlice.reducer;