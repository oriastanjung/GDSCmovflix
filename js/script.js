const API_KEY = `api_key=d769bee82cb0d71d5739396b64c7be50`;
const BASE_URL = `https://api.themoviedb.org/3`;
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const IMG_URL = `https://image.tmdb.org/t/p/w500`;
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;

const movie = document.getElementById("movieLocate");
let movies;
let moviesThumbnail;
let moviesImg;
let moviesInfo;
let moviesTitle;
let moviesRating;
let moviesDesc;

const form = document.getElementById("form");
const search = document.getElementById("search");





function GetMovies(link) {
  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      ShowMovies(data.results);
    });
}
GetMovies(API_URL);


function ShowMovies(data) {
  movie.innerHTML = '';
  data.map((item) => {
    const { title, overview, vote_average, poster_path } = item;
    movies = `<article class="movies">`;
    moviesThumbnail = `<div class="moviesThumbnail">`;
    moviesImg = `<img class="moviesImg" src="${IMG_URL}${item.poster_path}" alt="film1"></div>`;
    moviesInfo = `<div class="moviesInfo">`;
    moviesTitle = `<h2 class="moviesTitle">${item.title}</h2>`;
    moviesRating = `<p class="moviesRating">Rating : &#9733;${item.vote_average}/10</p>`;
    moviesDesc = `<p class="moviesDesc">${item.overview}<span><a href="page404.html">See More</a></span></p></div></article>`;

    document.getElementById("movieLocate").innerHTML +=
      movies +
      moviesThumbnail +
      moviesImg +
      moviesInfo +
      moviesTitle +
      moviesRating +
      moviesDesc;
  });
}

document.querySelector(".navTitle").addEventListener("click", () => {
  document.location = "index.html";
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const searchTerm = search.value;
  console.log(SEARCH_URL + "&query=" + searchTerm);
  if (searchTerm) {
    
    GetMovies(SEARCH_URL + "&query=" + searchTerm);
  }else{
    GetMovies(API_URL);
  }
})