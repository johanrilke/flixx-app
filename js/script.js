// Declare global variables
const global = {
    currentPage: window.location.pathname,
    api: {
        apiKey: 'af263e97bf87c1567fa2a4b289e5228a',
        apiUrl: 'https://api.themoviedb.org/3/',
    }
}

// Display popular movies
async function displayPopularMovies() {
    const {results} = await fetchAPIData('movie/popular');

    results.forEach((movie) => {
        const div = document.createElement('div');
        div.classList.add('card');
        
        div.innerHTML = `
            <a href="movie-details.html?id=${movie.id}">
            ${
                movie.poster_path ?
                `
                <img
                src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                class="card-img-top"
                alt="${movie.title}"
                />
                `
                :
                `
                <img
                src="images/no-image.jpg"
                class="card-img-top"
                alt="${movie.title}"
                />
                `
            }
            </a>
            <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
            <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
            </div>
        `
        document.querySelector('#popular-movies').appendChild(div);
    })
}

// Display popular tv shows
async function displayPopularShows() {
    const {results} = await fetchAPIData('tv/popular');

    results.forEach((show) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <a href="tv-details.html?id=${show.id}">
            ${
                show.poster_path ?
                `
                <img
                src="https://image.tmdb.org/t/p/w500${show.poster_path}"
                class="card-img-top"
                alt="${show.name}"
                />
                `
                :
                `
                <img
                src="images/no-image.jpg"
                class="card-img-top"
                alt="${show.name}"
                />
                `
            }
            </a>
            <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">
            <small class="text-muted">Aired: ${show.first_air_date}</small>
            </p>
        </div>
        `
        document.querySelector('#popular-shows').appendChild(div);
    })
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
    const API_KEY = global.api.apiKey;
    const API_URL = global.api.apiUrl;


    showSpinner();

    const response = await fetch(
        `${API_URL}${endpoint}?api_key=${API_KEY}`
    );

    const data = await response.json();

    hideSpinner()

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

// Show and hide spinner

function showSpinner() {
    document.querySelector('.spinner').classList.add('show');
}

function hideSpinner() {
    document.querySelector('.spinner').classList.remove('show');
}

// Initialize Application
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            displayPopularMovies();
            break;
        case '/shows.html':
            displayPopularShows();
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

