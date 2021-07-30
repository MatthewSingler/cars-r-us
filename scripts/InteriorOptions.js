import { getInteriors, setInterior } from "database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value))
            window.alert(`User chose interior ${event.target.value}`)
        }
    }
)

export const InteriorOptions = () => {
    let html = "<ul>"

    const listInteriorsArray = interiors.map(
        (interior) => {
            return `<li>`
            input type="radio" name=
        }
    )
}