import React, { useState } from 'react';

// ExerciseCard component receives props exercise data and callback functions
const ExerciseCard = ({ exercise, onLike, onDislike, onViewDetails, onAddToRoutine }) => {
  // State to track the number of likes and dislikes for this exercise
  const [likes, setLikes] = useState(exercise.likes);
  const [dislikes, setDislikes] = useState(exercise.dislikes);

  // Event handler for liking an exercise
  const handleLike = () => {
    // Update the likes count in the component's state and call the onLike callback
    setLikes(likes + 1);
    onLike(exercise.id);
  };

  // Event handler for disliking an exercise
  const handleDislike = () => {
    // Update the dislikes count in the component's state and call the onDislike callback
    setDislikes(dislikes + 1);
    onDislike(exercise.id);
  };

  // Render the exercise card with its details
  return (
    <div className="exercise-card">
      <h2>{exercise.name}</h2>
      <img src={exercise.image} alt={exercise.name} />
      <p>{exercise.description}</p>
      <div className="likes-dislikes">
        {/* Like button with an emoji and the current number of likes */}
        <button onClick={handleLike}>
          <span role="img" aria-label="Like">👍</span> {likes}
        </button>
        {/* Dislike button with an emoji and the current number of dislikes */}
        <button onClick={handleDislike}>
          <span role="img" aria-label="Dislike">👎</span> {dislikes}
        </button>
      </div>
      {/* Button to view exercise details */}
      <button onClick={() => onViewDetails(exercise)}>View Details</button>
      {/* Button to add exercise to a daily routine */}
      <button onClick={() => onAddToRoutine(exercise)}>Add to Routine</button>
    </div>
  );
};

export default ExerciseCard;
