// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];


// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};
// Get references to the HTML elements
const houseSelect = document.getElementById("house");
const charactersList = document.getElementById("characters");

// Fill the house dropdown list during page load
houses.forEach(house => {
const option = document.createElement("option");
option.value = house.code;
option.text = house.name;
houseSelect.appendChild(option);
});

// Show the list of characters whenever the user selects a new house from the dropdown
houseSelect.addEventListener("change", () => {
const selectedHouseCode = houseSelect.value;
const characters = getCharacters(selectedHouseCode);
charactersList.innerHTML = ""; // Clear the characters list

characters.forEach(character => {
  const li = document.createElement("li");
  li.textContent = character;
  charactersList.appendChild(li);
});
});  