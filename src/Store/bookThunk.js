import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//axios
import axios from "axios";

export const booksThunk = createAsyncThunk(
    'booksThunk/books',
    async (bookData, thunkApi) => {
        const options = {
            baseURL: `http://3.65.32.166/`,
            url: `${bookData.url}`,
            method: "GET",
        };
        return axios(options)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    return response.data.data;
                }
            })


    }
)

const booksSlice = createSlice({
    name: 'books',
    initialState: { booksData: [] },
    extraReducers: {
        [booksThunk.rejected]: (state, action) => {
            console.log(action);
        },
        [booksThunk.pending]: (state, action) => {
            console.log(action);
        },
        [booksThunk.fulfilled]: (state, action) => {
            state.booksData = action.payload
            console.log(action.payload);
        },
    },

})

export default booksSlice.reducer;