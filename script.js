const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here
const team = players; // Reference to the array players
const team1 = [...players]; // Copy of the array players
const cap1 = { ...person }; // Copy of the object person

// DOM Manipulation
const playersList = document.getElementById("players-list");
const personDetails = document.getElementById("person-details");

// Display Players
players.forEach(player => {
  const li = document.createElement("li");
  li.textContent = player;
  playersList.appendChild(li);
});

// Display Person Details
personDetails.textContent = `Name: ${person.name}, Age: ${person.age}`;
