
let newForm = document.getElementById("add-place-form") as HTMLFormElement
newForm.addEventListener("submit", addPlace) 

function addPlace(ev){

    ev.preventDefault()

    let city = document.getElementById("city") as HTMLInputElement
    let place = document.getElementById("place") as HTMLInputElement
    let image = document.getElementById("img") as HTMLInputElement
    let text = document.getElementById("tell") as HTMLInputElement

    let newDiv:HTMLDivElement = document.createElement("div")
    let newSpan:HTMLSpanElement = document.createElement("span")
    let newH2:HTMLHeadingElement = document.createElement("h2")
    let newImg:HTMLImageElement = document.createElement("img")
    let newText:HTMLParagraphElement = document.createElement("p")

    newH2.innerText=(city + ","+ place)
    newImg.setAttribute("src", image.value)
    newText.innerText = text.value

    newSpan.appendChild(newH2)
    newDiv.appendChild(newSpan)
    newDiv.appendChild(newImg)
    newDiv.appendChild(newText)
    
    newDiv.classList.add("box")

    let newContainer = document.querySelector(".container") as HTMLDivElement
    newContainer.appendChild(newDiv)

    city.value = ""
    place.value = ""
    text.value=""
}