import { createSlice, current } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: 'header',
    initialState: { headerName: '' },
    reducers: {
        handleHeader: (state, action) => {
            console.log(action.payload)

            state.headerName = action.payload
            // console.log(current(action.headerName))
            // current(action.headerName) = action.payload
        }
    }
})

export const { handleHeader } = headerSlice.actions;
export default headerSlice.reducer;