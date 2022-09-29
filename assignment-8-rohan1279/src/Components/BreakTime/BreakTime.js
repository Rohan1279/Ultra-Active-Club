import React from 'react';

const BreakTime = (props) => {
    const {breakTime} = props
    return (
        <div>
            <div className='flex justify-between items-center px-3'>
            <h1 className='text-lg font-bold'>Break Time: </h1>
            <p className='font-semibold text-zinc-400'>{breakTime} seconds</p>
        </div>
        </div>
    );
};

export default BreakTime;