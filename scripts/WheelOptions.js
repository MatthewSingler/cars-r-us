




export const WheelOptions = () => {
    let html = "<ul>"

    const listWheelOptionsArray = wheels.map(
        (wheels) => {
            return `<li>
            input type = "radio" name = "interior" value = "${wheels.id}" />
                </li>`
        }
    )
    html += listWheelOptionsArray.join("")

    html += "</ul>"
    return html
}