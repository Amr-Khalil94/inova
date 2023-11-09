import React from "react";

import { Link } from "react-router-dom";

export default (props) => {
    console.log(props.book.attributes.name)
    return (
        <div className="book_cont ">
            <Link className="center-text" to={`${props.book.id}`} target="_blank">props.book.attributes.name</Link>
        </div>
    )
}