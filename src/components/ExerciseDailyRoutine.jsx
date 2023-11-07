import React, { useState } from "react";

function ExerciseDailyRoutine({ exercises }) {
    const [dailyRoutine, setDailyRoutine] = useState([]);

    const handleAddToRoutine = (exercise) => {
        const updatedRoutine = [...dailyRoutine, {exercise, set: 0, repetitions: 0 }];
        setDailyRoutine(updatedRoutine);
    };

    const handleSetsRepetitionsChange = (index, field, value) => {
        const updatedRoutine = [...dailyRoutine];
        updatedRoutine[index][field] = value;
        setDailyRoutine(updatedRoutine);
    };

    return (
        <div>
            <h2>Daily Routine</h2>
            {exercises.map((exercise, index) => (
                <div key={exercise.id}>
                    <h3>{exercise.name}</h3>
                    <button onClick={() => handleAddToRoutine(exercise)}>Add to Routine</button>
                    {dailyRoutine.map((item, itemIndex) => {
                        if (item.exercise.id === exercise.id) {
                            return(
                                <div key={itemIndex}>
                                    <label>Sets:</label>
                                    <input 
                                      type="number"
                                      value={item.set}
                                      onChange={(e) => handleSetsRepetitionsChange(itemIndex, 'sets', e.target.value)}
                                      />
                                    <label>Repetitions:</label>
                                    <input
                                      type="number"
                                      value={item.repetitions}
                                      onChange={(e) => handleSetsRepetitionsChange(itemIndex, 'repetitions', e.target.value)}
                                      />  
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            ))}
        </div>
    );
}

export default ExerciseDailyRoutine;