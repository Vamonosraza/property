'use client'
import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const loadingPage = ({loading}) => {
    const override = {
        display: 'block',
        margin: '0 auto',
        
    }
    return (
        <ClipLoader color={'#3b82f6'} loading={loading} size={150}
            cssOverride={override}/>
    )
}

export default loadingPage