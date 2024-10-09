document.getElementById("getWeatherBtn").addEventListener("click", function () {
  const location = document.getElementById("locationInput").value;
  const apiKey = "553fb256b47efde6b11d83e7c9068d17"; // Remplacez par votre clé API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ville non trouvée");
      }
      return response.json();
    })
    .then((data) => {
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const result = `Il fait ${temp}°C avec ${description} à ${data.name}.`;
      document.getElementById("weatherResult").innerText = result;
    })
    .catch((error) => {
      document.getElementById("weatherResult").innerText = error.message;
    });
});
