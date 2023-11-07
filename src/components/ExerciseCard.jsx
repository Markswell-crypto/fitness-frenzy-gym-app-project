import React, { useState } from 'react';

const ExerciseCard = ({ exercise, onLike, onDislike }) => {
  const [likes, setLikes] = useState(exercise.likes);
  const [dislikes, setDislikes] = useState(exercise.dislikes);

  const handleLike = () => {
    setLikes(likes + 1);
    onLike(exercise.id, likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    onDislike(exercise.id, dislikes + 1);
  };

  return (
    <div className="col-md-2 mb-3"> 
      <div className="card">
        <img
          src={exercise.image}
          alt={exercise.name}
          className="card-img-top"
          style={{ height: '100px', objectFit: 'cover' }} 
        />
        <div className="card-body">
          <h5 className="card-title">{exercise.name}</h5>
          {/* <p className="card-text">{exercise.description}</p> */}
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={handleLike}>
            <span role="img" aria-label="Like">👍</span> {likes}
          </button>
          <button className="btn btn-danger ml-2" onClick={handleDislike}>
            <span role="img" aria-label="Dislike">👎</span> {dislikes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
