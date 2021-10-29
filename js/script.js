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

const modalLoc = document.getElementById("modal");
let moviesID = document.getElementById("movies");
function GetMovies(link) {
  fetch(link)
    .then((res) => res.json())
    .then((data) => {
      ShowMovies(data.results);
    });
}

GetMovies(API_URL);

let modalContent;
let modalTitle;
let modalDesc;
let modalMovie;
let modalThumbnail;
let modalInfo;
let modalCloseButton;



function takeID(x) {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      data.results.map((item) => {
        
        if (item.id === x) {
          
          modalLoc.innerHTML = "";
          
          modalLoc.style.display = "block";
          modalContent = `<div class="modal-content">`;
          modalCloseButton = `<div id="close-btn" class="close">&times;</div>`;
          modalMovie = ` <div class="modal-movie">`;
          modalThumbnail = `<div class="modal-movie-thumbnail" >`;
          modalImg = `<img src="${IMG_URL}${item.poster_path}" alt="" srcset=""></div>`;
          modalInfo = `<div class="modal-movie-info">`;
          modalTitle = `<div class="modal-movie-info-title"> <h2>${item.title}</h2></div>`;
          modalDesc = `<div class="modal-movie-info-description"><p>${item.overview}</p></div>`;

          modalLoc.innerHTML +=
            modalContent +
            modalCloseButton +
            modalMovie +
            modalThumbnail +
            modalImg +
            modalInfo +
            modalTitle +
            modalDesc +
            `</div></div></div>`;

            
            let closeButton = document.getElementById("close-btn");
            closeButton.addEventListener("click", () => {
              document.getElementById("modal").style.display = "none";
            });
        }
      });
    });
}
closeButton.addEventListener("click", () => {
  modalLoc.style.display = "none";
});
function ShowMovies(data) {
  let i = 0;
  movie.innerHTML = "";

  data.map((item) => {
    movies = `<article class="movies" onclick="takeID(${item.id})">`;
    moviesThumbnail = `<div class="moviesThumbnail">`;
    moviesImg = `<img class="moviesImg" src="${IMG_URL}${item.poster_path}" alt="film1"></div>`;
    moviesInfo = `<div class="moviesInfo">`;
    moviesTitle = `<h2 class="moviesTitle">${item.title}</h2>`;
    moviesRating = `<p class="moviesRating">Rating : &#9733;${item.vote_average}/10</p>`;
    moviesDesc = `<p class="moviesDesc">${item.overview}<span><a target="blank" href="https://www.themoviedb.org/movie/${item.id}" >Read More in TMDB</a></span></p>`;

    document.getElementById("movieLocate").innerHTML +=
      movies +
      moviesThumbnail +
      moviesImg +
      moviesInfo +
      moviesTitle +
      moviesRating +
      moviesDesc +
      `</div></article>`;

    document
      .getElementsByClassName("movies")
      [i].addEventListener("click", (e) => {
        e.preventDefault();
        console.log(item.id, item.title, item.overview);
      });
    i++;
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
