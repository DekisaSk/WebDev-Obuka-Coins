document.getElementById("searchBar").addEventListener("keypress", function (e) {
  let searchItem = this.value.toLowerCase();

  if (e.key !== "Enter") {
    return;
  }

  let items = Array.from(
    document.getElementById("itemList").getElementsByTagName("li")
  );

  if (!isNullOrEmpty(searchItem)) {
    items.forEach((item) => {
      let p = item.getElementsByTagName("p")[0];
      let itemName = p.textContent.toLowerCase();
      if (itemName !== searchItem) {
        item.style.display = "none";
      } else {
        item.style.display = "flex";
      }
    });
  } else {
    items.forEach((item) => {
      item.style.display = "flex";
    });
  }
});

document.getElementById("buttonSubmit").addEventListener("click", function () {
  let newItem = document.getElementById("textBoxNewItem").value;
  createLiElement(newItem);
});

document.getElementById("itemList").addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("buttonDelete")) {
    event.target.closest("li").remove();
  }
});

function isNullOrEmpty(str) {
  return str == null || str.trim() == "";
}

function createLiElement(elementName) {
  console.log(elementName);
  if (isNullOrEmpty(elementName)) {
    console.log("Element is empty");
    return;
  }

  let ul = document.getElementsByTagName("ul")[0];
  const li = document.createElement("li");

  li.innerHTML = `<p>${elementName}</p> <button class="buttonDelete">x</button>`;
  ul.append(li);
}
