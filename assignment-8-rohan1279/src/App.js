import { useState } from 'react';
import './App.css';
import Activities from './Components/Activities/Activities';
import ActivitiesDetail from './Components/ActivitiesDetail/ActivitiesDetail';

function App() {
  const [selectedActivity, setSelectedActivity] = useState([])
  const addTimeList = (activity) =>[
    // console.log('added to list',activity);
    setSelectedActivity(activity)
  ] 
  // console.log(selectedActivity)
  return (
    <div className="App">
      <header></header>
      <main className='flex justify-between'>
        <Activities addTimeList={addTimeList}></Activities>
        <ActivitiesDetail 
        selectedActivity={selectedActivity}
        ></ActivitiesDetail>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
