// Declare global variables
const global = {
    currentPage: window.location.pathname,
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
}

document.addEventListener('DOMContentLoaded', init);