import { getWheelOptions, setWheelOptions } from "./database.js"

const wheels = getWheelOptions()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheelOptions(parseInt(event.target.value))
            window.alert(`User chose ${event.target.value} wheels`)
        }
    }
)




export const WheelOptions = () => {
    let html = "<ul>"

    const listWheelOptionsArray = wheels.map(
        (wheels) => {
            return `<li>
            <input type = "radio" name = "interior" value = "${wheels.id}" />
                </li>`
        }
    )
    html += listWheelOptionsArray.join("")

    html += "</ul>"
    return html
}