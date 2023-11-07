import React, { useEffect, useState } from 'react';
import ExerciseCard from './ExerciseCard';

const ExerciseDisplay = () => {
  // State to hold the list of exercises
  const [exercises, setExercises] = useState([]);

  // Function to fetch exercises from the server
  const fetchExercises = () => {
    fetch('http://localhost:3000/exercises') 
      .then((response) => response.json())
      .then((data) => {
        setExercises(data);
      })
      .catch((error) => {
        console.error('Error fetching exercises:', error);
      });
  };

  // Fetch exercises when the component mounts
  useEffect(() => {
    fetchExercises();
  }, []);

  // Function to handle liking an exercise and updating it on the server
  const handleLike = (exerciseId, updatedLikes) => {
    // Use a normal fetch without async
    fetch(`http://localhost:3000/exercises/${exerciseId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ likes: updatedLikes }),
    })
      .then((response) => {
        if (response.ok) {
          const updatedExercise = exercises.map((exercise) => {
            if (exercise.id === exerciseId) {
              return { ...exercise, likes: updatedLikes };
            }
            return exercise;
          });
          setExercises(updatedExercise);
        } else {
          throw new Error('Failed to update likes');
        }
      })
      .catch((error) => {
        console.error('Error updating likes:', error);
      });
  };

  // Function to handle disliking an exercise and updating it on the server
  const handleDislike = (exerciseId, updatedDislikes) => {
    // Use a normal fetch without async
    fetch(`http://localhost:3000/exercises/${exerciseId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dislikes: updatedDislikes }),
    })
      .then((response) => {
        if (response.ok) {
          const updatedExercise = exercises.map((exercise) => {
            if (exercise.id === exerciseId) {
              return { ...exercise, dislikes: updatedDislikes };
            }
            return exercise;
          });
          setExercises(updatedExercise);
        } else {
          throw new Error('Failed to update dislikes');
        }
      })
      .catch((error) => {
        console.error('Error updating dislikes:', error);
      });
  };

  // Render the list of exercises using ExerciseCard components
  return (
    <div className="exercise-display container">
        <div className='row'>
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          exercise={exercise}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      ))}
        </div>
    </div>
  );
};

export default ExerciseDisplay;
