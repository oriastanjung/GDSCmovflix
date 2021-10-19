const moviesList = [
  {
    title: "Free Guy",
    thumbnail: "./images/movie1.jpeg",
    rating: "7.3/10",
    description:
      "Seorang kasir bank yang menyadari ia hanyalah salah satu karakter latar belakang dalam sebuah permainan video terbuka, memutuskan untuk menjadi pahlawan dalam kisahnya sendiri…",
    link: "",
  },
  {
    title: "Avengers : Endgame",
    thumbnail: "./images/movie2.jpeg",
    rating: "8.4/10",
    description:
      "Melanjutkan Avengers Infinity War, dimana kejadian setelah Thanos berhasil mendapatkan semua infinity stones dan memusnahkan 50% semua mahluk hidup di alam semesta. Akankah para Avengers berhasil mengalahkan Thanos?",
    link: "",
  },
  {
    title: "Squid Game",
    thumbnail: "./images/movie3.jpeg",
    rating: "8.2/10",
    description:
      "Squid Game bercerita tentang sebuah permainan dimana para peserta dituntut untuk mampu bertahan hidup dan akan mendapatkan hadiah uang tunai sebesar 45,6 Miliar Won jika pemain dapat memenangkan permainan tersebut. Pertempuran yang sangat sengit ini membuat para kandidat memiliki rasa takut yang luar biasa dalam mempertaruhkan nyawa mereka hanya untuk bertahan hidup.",
    link: "",
  },
  {
    title: "Hacksaw Ridge",
    thumbnail: "./images/movie4.jpeg",
    rating: "8.1/10",
    description:
      "Diangkat dari kisah nyata penerima Medali Kehormatan. Desmond Doss mendaftar sebagai petugas medis di tentara AS pada masa Perang Dunia II, namun ia menolak untuk memegang senjata ataupun membunuh.",
    link: "",
  },
  {
    title: "Black Hawk Down",
    thumbnail: "./images/movie5.jpg",
    rating: "7.7/10",
    description:
      "Kapten Mike Steele memimpin sekelompok pasukan elit yang dikirim ke Somalia dalam misi untuk menangkap dua panglima perang kejam - di mana rezim mereka yang korup telah menyebabkan bencana kelaparan.",
    link: "",
  },
  {
    title: "Lone Survivor",
    thumbnail: "./images/movie6.jpeg",
    rating: "7.5/10",
    description:
      "Marcus Luttrell dan timnya ditugasi untuk memburu pimpinan pembunuh Taliban terkenal, Ahmad Shah, pada akhir Juni 2005. Tapi situasi malah jadi bumerang dan mereka pontang-panting menyelamatkan diri.",
    link: "",
  },
  {
    title: "Extraction",
    thumbnail: "./images/movie7.jpg",
    rating: "6.7/10",
    description:
      "Extraction menceritakan tentang penculikan seorang agen CIA di Rusia yang dilakukan kelompok teroris. Leonard Turner merupakan agen CIA yang sedang menjalankan misi dan menyamar di Rusia. Sayangnya, penyamarannya sudah diketahui oleh kelompok sindikat penjualan senjata.",
    link: "",
  },
];

const movie = document.getElementById("movieLocate");
let movies;
let moviesThumbnail;
let moviesImg;
let moviesInfo;
let moviesTitle;
let moviesRating;
let moviesDesc;

for (let i = 0; i < moviesList.length; i++) {
  movies = `<article class="movies">`;
  moviesThumbnail = `<div class="moviesThumbnail">`;
  moviesImg = `<img class="moviesImg" src=${moviesList[i].thumbnail} alt="film1"></div>`;
  moviesInfo = `<div class="moviesInfo">`;
  moviesTitle = `<h2 class="moviesTitle">${moviesList[i].title}</h2>`;
  moviesRating = `<p class="moviesRating">Rating : ${moviesList[i].rating}</p>`;
  moviesDesc = `<p class="moviesDesc">${moviesList[i].description}<span><a href="">See More</a></span></p></div></article>`;

  document.getElementById("movieLocate").innerHTML +=
    movies +
    moviesThumbnail +
    moviesImg +
    moviesInfo +
    moviesTitle +
    moviesRating +
    moviesDesc;
}
