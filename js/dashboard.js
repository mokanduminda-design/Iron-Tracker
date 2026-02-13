const workouts = getWorkouts();

const totalWorkoutsEl = document.getElementById("total-workouts");
const totalWeightEl = document.getElementById("total-weight");
const recentWorkoutEl = document.getElementById("display-recent-workouts");

totalWorkoutsEl.textContent = workouts.length;

let totalWeight = 0;

workouts.forEach(function(workout) {
    totalWeight += workout.weight;
});

totalWeightEl.textContent = totalWeight + " kg";

if (workouts.length === 0) {

    recentWorkoutEl.innerHTML = "<p>No workouts yet.</p>";

} else {

    workouts.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });

    const recent = workouts[0];

    recentWorkoutEl.innerHTML = `
        <h3>${recent.name}</h3>
        <p>Sets: ${recent.sets}</p>
        <p>Reps: ${recent.reps}</p>
        <p>Weight: ${recent.weight} kg</p>
        <p>Date: ${recent.date}</p>
    `;
}
