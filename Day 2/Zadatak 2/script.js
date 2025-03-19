document.getElementById("searchBar").addEventListener("keyup", function () {
  let searchItem = this.value.toLowerCase();

  let items = Array.from(
    document.getElementById("itemList").getElementsByTagName("li")
  );

  if (!isNullOrEmpty(searchItem)) {
    items.forEach((item) => {
      let p = item.getElementsByTagName("p")[0];
      let itemName = p.textContent.toLowerCase();
      if (!itemName.includes(searchItem)) {
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

// Does not work for newly added items
// document.querySelectorAll(".buttonDelete").forEach(function (el) {
//   el.addEventListener("click", function () {
//     this.parentNode.remove();
//   });
// });

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
