




export const TechnologyPackages = () => {
    let html = "<ul>"

    const listTechnologyPackagesArray = technology.map(
        (technology) => {
            return `<li>
            input type = "radio" name = "technology" value = "${technology.id}" />
                </li>`
        }
    )
    html += listTechnologyPackagesArray.join("")

    html += "</ul>"
    return html
}