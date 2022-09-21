var newForm = document.getElementById("add-place-form");
newForm.addEventListener("submit", addPlace);
function addPlace(ev) {
    ev.preventDefault();
    var city = document.getElementById("city");
    var place = document.getElementById("place");
    var image = document.getElementById("img");
    var text = document.getElementById("tell");
    var newDiv = document.createElement("div");
    var newSpan = document.createElement("span");
    var newH2 = document.createElement("h2");
    var newImg = document.createElement("img");
    var newText = document.createElement("p");
    newH2.innerText = (city + "," + place);
    newImg.setAttribute("src", image.value);
    newText.innerText = text.value;
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newText);
    newSpan.appendChild(newH2);
    newDiv.classList.add("box");
    var container = document.querySelector(".container");
    container.appendChild(newDiv);
    city.value = "";
    place.value = "";
    text.value = "";
}
