import './App.css';
import Activities from './Components/Activities/Activities';
import ActivitiesDetail from './Components/ActivitiesDetail/ActivitiesDetail';

function App() {
  return (
    <div className="App">
      <header></header>
      <main className='flex justify-between'>
        <Activities></Activities>
        <ActivitiesDetail></ActivitiesDetail>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
