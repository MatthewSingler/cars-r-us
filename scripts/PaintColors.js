import { getPaintColors, setPaint } from "./databse"

const paints = getPaintColors

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            setPaint(parseInt(event.target.value))
            window.alert(`User chose paint color ${event.target.value}`)
        }
    }
)

export const PaintColors = () => {
    let html = "<ul>"

    const listPaintColorsArray = paints.map(
        (paints) => {
            return `<li>
            input type = "radio" name = "paint" value = "${paints.id}" />
                </li>`
        }
    )
    html += listPaintColorsArray.join("")

    html += "</ul>"
    return html
}