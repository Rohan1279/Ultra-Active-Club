// use local storage to manage cart data
const addToDb = duration =>{
    localStorage.setItem('selected-break-time', JSON.stringify(duration));
}
const storeTotalTime = (totalTime) =>{
    localStorage.setItem('total-activity-time', JSON.stringify(totalTime));
    console.log(totalTime);
}




export {
    addToDb,
    storeTotalTime
}