import React, { useState } from "react";

function ExerciseDailyRoutine({ exercises }) {
    const [dailyRoutine, setDailyRoutine] = useState([]);  
    
    // function to add an exercise to the daily routine
    const handleAddToRoutine = (exercise) => {
        // creating a copy of current dailyroutine & add selected exercise with default sets and repetitions
        const updatedRoutine = [...dailyRoutine, {exercise, set: 0, repetitions: 0 }];
        setDailyRoutine(updatedRoutine);
    };

    // function to handle changes in sets and repetitions for a specific exercise in the daily routine
    const handleSetsRepetitionsChange = (index, field, value) => {
        // creating a copy of the current dailyroutine and update sets or repetitions value for selected exercise
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
                    {/* button to add exercise to daily routine */}
                    <button onClick={() => handleAddToRoutine(exercise)}>Add to Routine</button>
                    {dailyRoutine.map((item, itemIndex) => {
                        if (item.exercise.id === exercise.id) {
                            return(
                                <div key={itemIndex}>
                                    <label>Sets:</label>
                                    <input 
                                      type="number"
                                      value={item.set}
                                      onChange={(e) => handleSetsRepetitionsChange(itemIndex, 'set', e.target.value)}
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