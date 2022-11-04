const container = document.querySelector(".container")
const coffees = [
{ name: "Expresso", image: "images/coffee1.jpg" },
{ name: "Café au lait", image: "images/coffee2.jpg" },
{ name: "cappuccino", image: "images/coffee3.jpg" },
{ name: "Irish Coffee", image: "images/coffee4.jpg" },
{ name: " Thé", image: "images/coffee5.jpg" },
]


const showCoffees = () => {
    let output = ""
    coffees.forEach(
        ({ name, image }) =>
        (output += `
        <div class="card">
        <img class="card--avatar" src=${image} />
        <h1 class="card--title">${name}</h1>
        </div>
        `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)


if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
    navigator.serviceWorker
    .register("/serviceWorker.js")
    .then(res => console.log("service worker registered"))
    .catch(err => console.log("service worker not registered", err))
    })
}