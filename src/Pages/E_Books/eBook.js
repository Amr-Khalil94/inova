import { useEffect } from 'react'

//chil
import BookCard from "./bookCard"

//styles
import './e_book.css'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { handleHeader } from "../../Store/headerSlice"
import { booksThunk } from "../../Store/bookThunk"

export default () => {
    //redux
    const dispatch = useDispatch()
    const { booksData } = useSelector(state => state.booksThunk)

    //send get requist and header name
    useEffect(() => {
        dispatch(handleHeader('E-Books'))
        dispatch(booksThunk({ url: 'api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book' }))
    }, dispatch)

    return (
        <div className='e-books'>
            <div className='row col-12'>
                <div className='col-4 book_parent'>
                    {booksData.map(book => {
                        console.log(book)
                        return (
                            <BookCard book={book} />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}