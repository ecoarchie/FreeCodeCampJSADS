// Remove Elements from an Array Using slice Instead of splice

function nonMutatingSplice(cities) {
  return cities.slice(0, 3);
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);