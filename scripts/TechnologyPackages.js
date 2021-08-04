import { getTechnologyPackages, setTechnologyPackages } from "./database.js"

const technology = getTechnologyPackages()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnologyPackages(parseInt(event.target.value))
        }
    }
)




export const TechnologyPackages = () => {
    let html = "<ul>"

    const listTechnologyPackagesArray = technology.map(
        (technology) => {
            return `<li>
            <input type = "radio" name = "technology" value = "${technology.id}" />
                </li>`
        }
    )
    html += listTechnologyPackagesArray.join("")

    html += "</ul>"
    return html
}