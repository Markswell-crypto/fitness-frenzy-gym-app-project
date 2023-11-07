
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
 <NavBar />
    <div className="App">
 <h1 className="text-warning">FITNESS FRENZY GYM 💪🏋️🏋️‍♀️ 🤼‍♂️</h1>
   <div className="Container">
    <br></br>
    <div className='container'>
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
