import { getPaintColors, setPaintColors } from "./database.js"

const colors = getPaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setPaintColors(parseInt(event.target.value))
            window.alert(`User chose paint color ${event.target.value}`)
        }
    }
)

export const PaintColors = () => {
    let html = "<ul>"

    const listPaintColorsArray = colors.map(
        (color) => {
            return `<li>
            <input type = "radio" name = "color" value = "${color.id}" />
                </li>`
        }
    )
    html += listPaintColorsArray.join("")

    html += "</ul>"
    return html
}