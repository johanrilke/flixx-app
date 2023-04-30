// Declare global variables
const global = {
    currentPage: window.location.pathname,
    api: {
        apiKey: 'af263e97bf87c1567fa2a4b289e5228a',
        apiUrl: 'https://api.themoviedb.org/3/',
    }
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
    const API_KEY = global.api.apiKey;
    const API_URL = global.api.apiUrl;

    const response = await fetch(
        `${API_URL}${endpoint}?api_key=${API_KEY}`
    );

    const data = await response.json();

    return data;
}

// Highlight active link
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if(link.getAttribute('href') === global.currentPage) {
            link.classList.add('active');
        }
    })
}

// Initialize Application
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            console.log('index.html');
            break;
        case '/shows.html':
            console.log('shows.html');
            break;
        case '/movie-details.html':
            console.log('movie-details.html');
            break;
        case '/tv-details.html':
            console.log('tv-details.html');
            break;
        case '/search.html':
            console.log('search.html');
            break;
    }

    highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);