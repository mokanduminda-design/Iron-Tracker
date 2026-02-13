function Workout(name, sets, reps, weight, date, notes) {
    this.id = Date.now();
    this.name = name;
    this.sets = sets;
    this.reps = reps;
    this.weight = weight;
    this.date = date;
    this.notes = notes;
}

function getWorkouts () {
    return JSON.parse(localStorage.getItem("workouts")) || [];
}

function saveWorkouts (workouts) {
    const workoutsString = JSON.stringify(workouts);
    localStorage.setItem("workouts", workoutsString);
}

function deleteWorkout(id) {
    let workouts = getWorkouts();
    workouts = workouts.filter(function(workout) {
    return workout.id !== id;
    });
    saveWorkouts(workouts);
}