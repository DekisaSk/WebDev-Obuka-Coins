import { createMovieElement } from "./movieElements.js";

const fetchMovies = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

function populateMovies(movies) {
  let mainSection = document.getElementById("mainSection");

  movies.forEach((movie) => {
    mainSection.appendChild(createMovieElement(movie));
  });
}

const fetchAndPopulateMovies = function () {
  fetchMovies(
    "https://jsonblob.com/api/jsonBlob/1351950892655632384/",
    "Targeted Movies URL Not found"
  ).then((data) => {
    populateMovies(data.movies);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  fetchAndPopulateMovies();
});

document.getElementById("buttonSearch").addEventListener("click", function () {
  let searchFilter = document
    .querySelector("input[type='text']")
    .value.toLowerCase();
  let movies = Array.from(document.querySelectorAll("#mainSection .movieCard"));

  if (!searchFilter) {
    movies.forEach((movie) => (movie.style.display = "flex"));
    return;
  }

  movies.forEach((movie) => {
    const title = movie.querySelector("h3").textContent.toLowerCase();
    const genre = movie.querySelectorAll("p")[1]?.textContent.toLowerCase();

    movie.style.display =
      title.includes(searchFilter) || genre?.includes(searchFilter)
        ? "flex"
        : "none";
  });
});
