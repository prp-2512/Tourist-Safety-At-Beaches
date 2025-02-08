const lat = 45;
const lon = 55;

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=992ea1336a4c08da4ff2b0aa507c6bd0`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the JSON from the response
  })
  .then((data) => {
    // Loop through the list array to extract weather, wind, clouds, and sys
    data.list.forEach((item) => {
      console.log(`Date: ${item.dt_txt}`);
      console.log(`Weather: ${item.weather[0].description}`);
      console.log(`Wind: Speed ${item.wind.speed} m/s, Degree ${item.wind.deg}`);
      console.log(`Clouds: ${item.clouds.all}%`);
      console.log(`Sys: Pod ${item.sys.pod}`);
      console.log('-----------------------------------');
    });
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });


  const dangerousConditions = {
    windSpeed: 10, // m/s (anything above this is dangerous)
    cloudCover: 80, // percentage of clouds
    nightTime: true // true if nighttime is considered dangerous
  };