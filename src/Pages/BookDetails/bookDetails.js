import { useEffect } from "react"

import { useParams } from "react-router-dom"

//redux
import { useDispatch, useSelector } from "react-redux"
import { booksThunk } from "../../Store/bookThunk"
import { handleHeader } from "../../Store/headerSlice"

export default () => {

    //redux
    const dispatch = useDispatch()
    const { booksData } = useSelector(state => state.booksThunk)

    //route
    const params = useParams()

    //send get requist and header name
    useEffect(() => {

        dispatch(handleHeader(`${booksData.attributes?.name}`))

        if (booksData.length === 0) {
            dispatch(booksThunk({ url: `api/v2/storefront/products/${params.EBooksId}` }))
        }

    }, [dispatch, booksData])


    if (booksData.length !== 0) {
        console.log(booksData.attributes
        )
    }


    return (
        <div className="bookDetails-parent">

            <h3></h3>
            <p>
                {booksData.length !== 0 &&
                    booksData.attributes.book.description
                }

            </p>
        </div>
    )
}