// import { addTimeList } from '../../utilities/manageDB';

const ExerciseTime = (props) => {
    const {activityList} = props

    let totalTime = 0
    for (const activity of activityList) {
        totalTime +=activity.time
        // addTimeList(totalTime)
    }
    return (
        <div className=' flex justify-between items-center px-3'>
            <h1 className='text-lg font-bold'>Exercise Time: </h1>
            <p id="totalExerciseTime" className='font-semibold text-zinc-400'>{totalTime} seconds</p>
        </div>
    );
};

export default ExerciseTime;