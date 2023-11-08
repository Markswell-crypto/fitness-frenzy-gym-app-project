import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import ExerciseDisplay from './components/ExerciseDisplay';
import ExerciseDetails from './components/ExerciseDetails'; 

function App() {
  const handleSearch = (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="Container">
      <div className="App">
        <h1 className="text-warning">FITNESS FRENZY GYM 💪🏋️🏋️‍♀️ 🤼‍♂️</h1>
        <br></br>
        <Router>
          <NavBar />
          <SearchBar onSearch={handleSearch} />
          <Routes>
            <Route path="/" exact element={<ExerciseDisplay/>} />
            <Route path="/exercise-details/:id" element={<ExerciseDetails />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

