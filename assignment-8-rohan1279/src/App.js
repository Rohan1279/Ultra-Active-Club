import './App.css';
import Activities from './Components/Activities/Activities';
import ActivitiesDetail from './Components/ActivitiesDetail/ActivitiesDetail';

function App() {
  const addTimeList = (activity) =>[
    console.log('added to list',activity)
  ] 
  
  return (
    <div className="App">
      <header></header>
      <main className='flex justify-between'>
        <Activities addTimeList={addTimeList}></Activities>
        <ActivitiesDetail 
        ></ActivitiesDetail>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
