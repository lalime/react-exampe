import React from 'react'
import { connect } from 'react-redux'
import DefaultLayout from '../layouts/DefaultLayout'

export const Article = (props) => {
    return (
        <DefaultLayout>
            
        </DefaultLayout>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
