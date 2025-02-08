const beachNames  = [
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


const searchInput = document.getElementById('beachSearch');
const dataList = document.getElementById('beachSuggestions');

searchInput.addEventListener('input', () => {
    // Clear previous suggestions
    dataList.innerHTML = '';
    const input = searchInput.value.toLowerCase();

    // Filter beach names
    const filteredBeaches = beachNames.filter(beach => beach.toLowerCase().includes(input));

    // Create and append options
    filteredBeaches.forEach(beach => {
        const option = document.createElement('option');
        option.value = beach;
        dataList.appendChild(option);
    });
});
