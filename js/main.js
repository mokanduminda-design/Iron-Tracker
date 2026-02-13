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
    
}