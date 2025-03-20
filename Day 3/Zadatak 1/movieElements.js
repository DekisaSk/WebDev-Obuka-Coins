const HTML = {
  P: "p",
  DIV: "div",
  H3: "h3",
  A: "a",
  IMG: "img",
  BUTTON: "button",
  BODY: "body",
  INPUT: "input",
  MAIN: "main",
  HEADER: "header",
};

export function createMovieElement(movie) {
  if (!movie) {
    console.log("Movie data is empty.");
    return;
  }

  // Create MovieCard
  let movieCard = createElement(HTML.DIV, "id", "movieCard");

  // Create Movie Poster
  let moviePoster = createElement(HTML.IMG, "src", movie.img);

  // Create Container for movie
  let container = createElement(HTML.DIV, "id", "container");

  // Create movie information elements
  let movieTitle = createTextElement(HTML.H3, movie.title);
  let movieYear = createTextElement(HTML.P, movie.year);
  let movieGenre = createTextElement(HTML.P, movie.genre);
  let movieRating = createTextElement(HTML.P, movie.rating);

  // Append to container
  container.appendChild(movieTitle);
  container.appendChild(movieYear);
  container.appendChild(movieGenre);
  container.appendChild(movieRating);

  // Append poster and container to movieCard
  movieCard.appendChild(moviePoster);
  movieCard.appendChild(container);

  return movieCard;
}

// Create element with attribute
function createElement(elementName, attributeName, attributeValue) {
  if (!elementName || !attributeName || !attributeValue) {
    console.log("Error: Missing parameters in createElement.");
    return;
  }

  let element = document.createElement(elementName);
  element.setAttribute(attributeName, attributeValue);

  return element;
}

// Creates a text elemnt
function createTextElement(elementName, textContent) {
  let element = document.createElement(elementName);
  element.textContent = textContent;

  return element;
}
