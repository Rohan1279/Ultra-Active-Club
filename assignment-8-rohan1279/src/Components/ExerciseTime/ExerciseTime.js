
const ExerciseTime = (props) => {
    const {activityList} = props
    // console.log(activityList.time);


    let totalTime = 0
    for (const activity of activityList) {
        totalTime +=activity.time
    }
    // console.log(totalTime)



    // const {selectedActivity} = props
    // const {time} = selectedActivity

    // totalTime += time;
    // const [totalTime, setTotalTime] = useState(0)
    
       
    

    // console.log(time);
    return (
        <div className=' flex justify-between items-center px-3'>
            <h1 className='text-lg font-bold'>Exercise Time: </h1>
            <p id="totalExerciseTime" className='font-semibold text-zinc-400'>{totalTime} seconds</p>
        </div>
    );
};

export default ExerciseTime;