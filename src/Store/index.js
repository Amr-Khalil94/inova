import { configureStore } from "@reduxjs/toolkit";

//slices
import header from './headerSlice'
import getBooks from "./bookThunk"

export default configureStore({
    reducer: {
        header: header,
        booksThunk: getBooks
    }
})