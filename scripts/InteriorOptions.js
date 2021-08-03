import { getInteriors, setInteriors } from "./database.js"

const interiors = getInteriors()

document.addEventListener(  //We are scanning the entire html document here. 
    "change",
    (event) => {  
        const changeEvent = event.target.name  //We want to store the target event in changeEvent
        if (event.target.name === "interior") {  //if the target.name starts with interior, which we defined on line 29, then it will be stored in the variable below that we are declaring. 
           const [ ,interiorId] = changeEvent //are we reasigning the changeEvent variable??? We are storing the id property of interior.

            for (const interior of interiors) {  //We are iterating through the entire interiors array and looking at each interior object.
                if (interior.id === parseInt(interiorsId)) {  //if the interior.id, which comes from the object . notaion is equal to the interiorsId, which comes from where???
                    return interiorId
                }
                
            }
            window.alert(`User chose interior ${interiorId}`)
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