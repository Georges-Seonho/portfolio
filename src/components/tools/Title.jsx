import React from 'react'

const Tiltle = (props) => {
    return (
        <div className='title'>
            <h1>{props.name}<span className='orange'>_</span></h1>
        </div>
    )
}

export default Tiltle
