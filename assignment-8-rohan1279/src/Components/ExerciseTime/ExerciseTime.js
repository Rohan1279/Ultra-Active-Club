import React from 'react';

const ExerciseTime = (props) => {
    const {selectedActivity} = props
    const {time} = selectedActivity
    // console.log(props.selectedActivity);
    // console.log(selectedActivity.time)
    console.log(time);
    return (
        <div className='flex justify-between items-center px-3'>
            <h1 className='text-lg font-bold'>Exercise Time: </h1>
            <p className='font-semibold text-zinc-400'>{time} seconds</p>
        </div>
    );
};

export default ExerciseTime;