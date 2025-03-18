document.getElementById("searchBar").addEventListener("input", function () {
  let searchItem = this.textContent.toLowerCase();
  let items = document.getElementsByClassName("listItem").textContent;

  for (let i = 0; i < items.lenght; i++) {
    // filter - hide uncsearched
  }
});

document.getElementById("buttonSubmit").addEventListener("click", function () {
  let newItem = document.getElementById("textBoxNewItem").textContent;

  if (!newItem) {
    //add new item
  }
});

document.getElementById("buttonDelete").addEventListener("click", function () {
  this.parentElement.remove();
});
