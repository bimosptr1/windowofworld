import React from 'react';
import Frame from '../image/Frame.png';
import ListBookComp from './ListBookComp'

function imgFrame() {
    return (
        <>
            <img className='img-fluid mb-4' src={Frame} alt='Frame' />
            <div className='m-3'>
                <h3 className='mb-5'>List Book</h3>
                <ListBookComp />
            </div>
        </>
    );
}

export default imgFrame;