import React, { useState, useEffect } from 'react';

const ExerciseDailyRoutine = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [routine, setRoutine] = useState([]);

  // Fetch exercise data
  useEffect(() => {
    fetch('http://localhost:3000/exercises')
      .then((response) => response.json())
      .then((data) => {
        setExercises(data);
      })
      .catch((error) => {
        console.error('Error fetching exercises:', error);
      });
  }, []);

  // Function to handle exercise selection
  const handleExerciseSelect = (event) => {
    const selectedExerciseId = parseInt(event.target.value);
    const exerciseToAdd = exercises.find((exercise) => exercise.id === selectedExerciseId);
    if (exerciseToAdd) {
      setRoutine([...routine, exerciseToAdd]);
    }
  };

  const handleRemoveExercise = (exerciseId) => {
    const updatedRoutine = routine.filter((exercise) => exercise.id !== exerciseId);
    setRoutine(updatedRoutine);
  };

  return (
    <div className="container mt-5" style={{ width: "70%" }}>
      <h2 className="text-warning">Daily Routine</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exerciseSelect" style={{ color: 'green', fontSize: '20px' }}>Select an Exercise</label>
            <select
              id="exerciseSelect"
              className="form-control"
              onChange={handleExerciseSelect}
              style={{ width: '50%' }}
            >
              <option value="">Select an exercise</option>
              {exercises.map((exercise) => (
                <option key={exercise.id} value={exercise.id}>
                  {exercise.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <br></br>
          <h3 className="text-primary">Selected Exercises</h3>
          <ul className="list-group" style={{ width: '70%' }}>
            {routine.map((exercise) => (
              <li key={exercise.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  {exercise.name}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveExercise(exercise.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDailyRoutine;