import React from 'react'
import Loader from './Loader'
import PinBoard from './PinBoard'

function Home({loading, pins, darkTheme}) {
    return (
        <>
            {loading ? <Loader /> :
                <PinBoard pins={pins} darkTheme={ darkTheme }/>}
        </>
    )
}

export default Home
