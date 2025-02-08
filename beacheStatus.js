const beachAddresses = [
  "Wagah Beach, Goa, India",
  "Anjuna Beach, Goa, India",
  "Baga Beach, Goa, India",
  "Calangute Beach, Goa, India",
  "Vagator Beach, Goa, India",
  "Palolem Beach, Goa, India",
  "Candolim Beach, Goa, India",
  "Colva Beach, Goa, India",
  "Dona Paula Beach, Goa, India",
  "Miramar Beach, Panaji, Goa, India"
];

const dangerousConditions = {
  windSpeed: 5, // m/s (anything above this is dangerous)
  cloudCover: 80, // percentage of clouds
  nightTime: true // true if nighttime is considered dangerous
};

// Function to get coordinates (returns a promise)
function getCoordinates(address) {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      if (data.length > 0) {
        const location = data[0];
        return {
          lat: location.lat,
          lon: location.lon
        };
      } else {
        throw new Error("No results found for the given address.");
      }
    })
    .catch(error => {
      console.error("Error with geocoding request: ", error);
      return null; // Return null if error occurs
    });
}

// Event listener for the submit button
const submit_button = document.getElementById('submit-button');
submit_button.addEventListener('click', () => {
  const userInput = document.getElementById('beachSearch').value.toLowerCase();
  const selectedBeach = beachAddresses.find(beach => beach.toLowerCase() === userInput);

  if (selectedBeach) {
    getCoordinates(selectedBeach).then(latlon => {
      if (latlon) {
        const apiKey = '992ea1336a4c08da4ff2b0aa507c6bd0';
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latlon.lat}&lon=${latlon.lon}&appid=${apiKey}`;

        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then(data => {
            const firstForecast = data.list[0];
            document.getElementById('give-data-user').style.display = 'block';

            const det = document.getElementById('details').style.display="block";
            gsap.from(det, { 
              opacity:0,
              x:-1000,
              duration:2,
              ease: 'power3.out'


             });

            let is_visitable = "";
            if (firstForecast.wind.speed >= dangerousConditions.windSpeed && firstForecast.clouds.all >= dangerousConditions.cloudCover) {
              is_visitable = "Beach is not safe to visit";
            } else {
              is_visitable = "Yes, the weather is safe to visit the beach";
            }

            const details = document.getElementById('details');
            details.innerHTML = `
             <div id="swipper">
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><img src="https://th.bing.com/th/id/OIP.MaVmulMQdRhKvfVYlYG60wHaE8?rs=1&pid=ImgDetMain" />
                                </div>
                                <div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                </div>
                                <div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                </div>
                                <div class="swiper-slide"><img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
              <h2>Weather for ${selectedBeach}</h2>
              <p class="para"><strong>Weather:</strong> ${firstForecast.weather[0].description}</p>
              <p class="para"><strong>Wind Speed:</strong> ${firstForecast.wind.speed} m/s</p>
              <p class="para"><strong>Cloud Cover:</strong> ${firstForecast.clouds.all}%</p>
              <p class="para"><strong>Is safe:</strong> ${is_visitable}</p>
            `;

            // Apply GSAP animation after content is injected
            const datalist = document.querySelectorAll('.para');
            gsap.from(datalist, {
              x: 100,
              opacity: 0,
              duration: 1,
              stagger: 0.2,
              ease: 'power3.out'
            });
          })
          .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
          });
      } else {
        alert("No coordinates found for the selected beach.");
      }
    });
  } else {
    alert("Beach not found in the list. Please select a valid beach.");
  }
});
