import { getOrders, getInteriors, getWheelOptions, getTechnologyPackages, getPaintColors } from "./database.js"


const buildOrderListItem = (orderObject) => {

    const interiors = getInteriors()
    const wheels = getWheelOptions()
    const techPackages = getTechnologyPackages()
    const colors = getPaintColors()
    
    
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === orderObject.interiorId
        }
    )
    
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === orderObject.wheelId
        }
    )

    const foundTech = techPackages.find(
        (technology) => {
            return technology.id === orderObject.technologyId
        }
    )
    const foundPaint = colors.find(
        (color) => {
            return color.id === orderObject.colorId
        }
    )

    const totalCost = foundInterior.price + foundTech.price + foundPaint.price + foundWheel.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

  
    return `<li>
        Order #${orderObject.id} was placed on ${orderObject.timestamp} and costs ${costString}
    </li>`
}

export const Orders = () => {

    const orders = getOrders()





    let html = "<ul>"

    const listItems = orders.map(orderObj => buildOrderListItem(orderObj))

    html += listItems.join("")

    html += "</ul>"

    return html
}
