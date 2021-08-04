import { getWheelOptions, setWheelOptions } from "./database.js"

const wheels = getWheelOptions()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheelOptions(parseInt(event.target.value))
        }
    }
)




export const WheelOptions = () => {
    let html = "<ul>"

    const listWheelOptionsArray = wheels.map(
        (wheels) => {
            return `<li>
            <input type = "radio" name = "wheel" value = "${wheels.id}" />
                </li>`
        }
    )
    html += listWheelOptionsArray.join("")

    html += "</ul>"
    return html
}