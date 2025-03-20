import { createMovieElement } from "./movieElements.js";

const fetchMovies = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

function populateMovies(movies) {
  console.log("populate");
  let mainSection = document.getElementById("mainSection");
  console.log(mainSection);
  for (let index = 0; index < movies.length; index++) {
    const movie = movies[index];

    console.log("foreach");
    const temp = createMovieElement(movie);
    console.log(temp);
    mainSection.appendChild(temp);
  }
}

const fetchAndPopulateMovies = function () {
  fetchMovies(
    "https://jsonblob.com/api/jsonBlob/1351950892655632384/",
    "Targeted Movies URL Not found"
  ).then((data) => {
    console.log("data");
    populateMovies(data.movies);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  console.log("Loaded");
  fetchAndPopulateMovies();
});

document.getElementById("buttonSearch").addEventListener("click", function () {
  let searchItem = document
    .getElementById("serachBar")
    .textContent.toLowerCase();
  // filter based on title, genre
});
