import { useState } from 'react';
import './App.css';
import Activities from './Components/Activities/Activities';
import ActivitiesDetail from './Components/ActivitiesDetail/ActivitiesDetail';

function App() {
  // const [selectedActivity, setSelectedActivity] = useState([])
  const [activityList, setActivityList] = useState([])

  // click handler
  const addTimeList = (activity) =>{
    const newList = [...activityList,activity]
    setActivityList(newList)
    // setSelectedActivity(activity)
}
  return (
    <div className="App">
      <header></header>
      <main className='flex justify-between'>
        <Activities addTimeList={addTimeList}></Activities>
        <ActivitiesDetail 
        activityList={activityList}
        ></ActivitiesDetail>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
