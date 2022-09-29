import React from 'react';

const Break = (props) => {
    
    return (
        <div>
            <button className='active:bg-blue-400 active:text-white bg-white p-2 rounded-full font-medium'>{props.breakTime}s</button>
        </div>
    );
};

export default Break;