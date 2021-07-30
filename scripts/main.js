import { carsRUs } from "./carsRUs.js";
const mainContainer = document.querySelector("#container")
 
const renderAllHTML = () => {
    mainContainer.innerHTML = carsRUs
}

renderAllHTML()

