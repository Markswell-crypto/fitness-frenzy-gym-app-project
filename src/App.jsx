
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const handleSearch = (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="App">
 <h1>FITNESS FRENZY GYM 💪🏋️🏋️‍♀️ 🤼‍♂️</h1>
 

      <NavBar />
      <SearchBar onSearch={handleSearch} />
      
    </div>
  );
}

export default App;
