const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

const input = document.getElementById("country");
const suggestionsDiv = document.getElementById("suggestions");

input.addEventListener("input", function() {
  const value = this.value.toLowerCase();
  const matchingCountries = countryList.filter(country => {
    const countryLowerCase = country.toLowerCase();
    return countryLowerCase.startsWith(value) && countryLowerCase !== value;
  });
  const suggestions = matchingCountries.map(country => {
    return `<div class="suggestion">${country}</div>`;
  });
  suggestionsDiv.innerHTML = suggestions.join("");
});

suggestionsDiv.addEventListener("click", function(event) {
  const target = event.target;
  if (target.classList.contains("suggestion")) {
    input.value = target.innerText;
    suggestionsDiv.innerHTML = "";
  }
});
