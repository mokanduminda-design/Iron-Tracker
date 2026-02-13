const  form = document.getElementById("workout-form");

form.addEventListener("submit",function (e) {
e.preventDefault();

const name = document.getElementById("name").value; 
const sets = document.getElementById("sets").value; 
const reps = document.getElementById("reps").value; 
const weight = document.getElementById("weight").value; 
const date = document.getElementById("date").value; 
const notes = document.getElementById("notes").value;

const workout = { 
    id: Date.now(),  
    name: name, 
    sets: Number(sets), 
    reps: Number(reps), 
    weight: Number(weight), 
    date: date, 
    notes: notes 
};

const workouts = getWorkouts("workouts")

workouts.push(workout);

saveWorkouts(workouts);

form.reset();

alert("Workout Added Successfully 💪")

});