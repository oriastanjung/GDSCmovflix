const API_KEY = `api_key=d769bee82cb0d71d5739396b64c7be50`;
const BASE_URL = `https://api.themoviedb.org/3`;
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const IMG_URL = `https://image.tmdb.org/t/p/w500`;
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;
const API_URL_HIGH_RATED = `${BASE_URL}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&${API_KEY}`;
const movie = document.getElementById("movieLocate");
const form = document.getElementById("form");
const search = document.getElementById("search");

let movies;
let moviesThumbnail;
let moviesImg;
let moviesInfo;
let moviesTitle;
let moviesRating;
let moviesDesc;

function GetMovies(link) {
  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      ShowMovies(data.results);
    });
}
function GetMoviesHighRated(link) {
  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      ShowMoviesHighRated(data.results);
    });
}
GetMovies(API_URL);
GetMoviesHighRated(API_URL_HIGH_RATED);

function ShowMoviesHighRated(data) {
  document.getElementById("moviePopular").innerHTML = "";

  data.map((item) => {
    movies = `<article class="moviesHigh">`;
    moviesThumbnail = `<div class="moviesThumbnailHigh">`;
    moviesImg = `<img class="moviesImgHigh" src="${IMG_URL}${item.poster_path}" alt="film1"></div>`;
    moviesInfo = `<div class="moviesInfo">`;
    moviesTitle = `<h2 class="moviesTitle">${item.title}</h2>`;
    moviesRating = `<p class="moviesRating">Rating : &#9733;${item.vote_average}/10</p>`;
    moviesDesc = `<p class="moviesDesc"><span><a target="blank" href="https://www.themoviedb.org/movie/${item.id}" >Read More in TMDB</a></span></p></div></article>`;

    document.getElementById("moviePopular").innerHTML +=
      movies +
      moviesThumbnail +
      moviesImg +
      moviesInfo +
      moviesTitle +
      moviesRating +
      moviesDesc;
  });
}

function ShowMovies(data) {
  movie.innerHTML = "";

  data.map((item) => {
    movies = `<article class="movies">`;
    moviesThumbnail = `<div class="moviesThumbnail">`;
    moviesImg = `<img class="moviesImg" src="${IMG_URL}${item.poster_path}" alt="film1"></div>`;
    moviesInfo = `<div class="moviesInfo">`;
    moviesTitle = `<h2 class="moviesTitle">${item.title}</h2>`;
    moviesRating = `<p class="moviesRating">Rating : &#9733;${item.vote_average}/10</p>`;
    moviesDesc = `<p class="moviesDesc">${item.overview}<span><a target="blank" href="https://www.themoviedb.org/movie/${item.id}" >Read More in TMDB</a></span></p></div></article>`;

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

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  console.log(SEARCH_URL + "&query=" + searchTerm);
  if (searchTerm) {
    GetMovies(SEARCH_URL + "&query=" + searchTerm);
  } else {
    GetMovies(API_URL);
  }
});
