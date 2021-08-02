import { getTechnologyPackages, setTechnologyPackages } from "./database.js"

const technology = getTechnologyPackages()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnologyPackages(parseInt(event.target.value))
            window.alert(`User chose ${event.target.value} tech package`)
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