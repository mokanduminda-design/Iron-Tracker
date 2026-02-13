const historyContainer = document.getElementById("history-container")

const workouts = getWorkouts();

if(workouts.length === 0) {
    historyContainer.innerHTML = "<p>No workouts logged yet.</p>";
}

workouts.forEach(function(workout) {
    const workoutCard = document.createElement("div");
    workoutCard.classList.add("workout-card");

    workoutCard.innerHTML = `
        <h3>${workout.name}</h3>
        <p><strong>Sets:</strong> ${workout.sets}</p>
        <p><strong>Reps:</strong> ${workout.reps}</p>
        <p><strong>Weight:</strong> ${workout.weight} kg</p>
        <p><strong>Date:</strong> ${workout.date}</p>
        <p><strong>Notes:</strong> ${workout.notes || "None"}</p>
        <button data-id="${workout.id}" class="delete-btn">
            Delete
        </button>
    `;

    historyContainer.appendChild(workoutCard);

});

const deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const id = Number(this.getAttribute("data-id"));

        deleteWorkout(id);

        location.reload();

    });

});