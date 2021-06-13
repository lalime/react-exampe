import React from 'react'
import Header from '../components/partials/Header/Header'
import Footer from '../components/partials/Footer/Footer'

function DefaultLayout(props) {
    return (
        <>
            <Header/>
                {props.children}
            <Footer/>
        </>
    )
}

export default DefaultLayout
