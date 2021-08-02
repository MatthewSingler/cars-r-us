import { getInteriors, setInteriors } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInteriors(parseInt(event.target.value))
            window.alert(`User chose interior ${event.target.name}`)
        }
    }
)

export const Interiors = () => {
    let html = "<ul>"

    const listInteriorsArray = interiors.map(
        (interior) => {
            return `<li>
           <input type = "radio" name = "interior" value = "${interior.id}" />
                </li>`
        }
    )
    html += listInteriorsArray.join("")
    
    html += "</ul>"
    return html
}