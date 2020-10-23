// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const selectedCountry = document.querySelector(".js-country");
const COUNTRY = "country";

function saveCountry(value) {
  localStorage.setItem(COUNTRY, value);
}

function handleChange(event) {
  const country = event.target.value;
  saveCountry(country);
}

function init() {
  selectedCountry.addEventListener("change", handleChange);
}

init();
