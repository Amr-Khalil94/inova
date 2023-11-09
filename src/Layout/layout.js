//components
import Navbar from './navBar'
import Footer from "./footer"

//redux
import { useSelector } from "react-redux";


//dom route 
import { Outlet } from 'react-router-dom'

//styles
import './layout.css'

export default () => {
    //redux
    const { headerName } = useSelector((state) => state.header)

    console.log(headerName)
    return (
        <div className='layout_parent'>
            <Navbar />
            <h1 className='my-4'>{headerName}</h1>
            <Outlet />
            <Footer />
        </div>
    )
}
