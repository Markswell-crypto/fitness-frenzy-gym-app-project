
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import './App.css';
import ExerciseDisplay from './components/ExerciseDisplay';

function App() {
  const handleSearch = (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="Container">
 <h1>FITNESS FRENZY GYM</h1>
<div>
 <NavBar />
      <SearchBar onSearch={handleSearch} /> 
</div>
      <br></br>
      <div className='container'>
       <ExerciseDisplay /> 
      </div>
      
    </div>
  );
}

export default App;
