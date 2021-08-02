import { getOrders, getInteriors, getWheelOptions, getTechnologyPackages, getPaintColors } from "./database.js"

const buildOrderListItem = (orderObject) => {

    const interiors = getInteriors()
    const foundINterior = interiors.find(
        (interior) => {
            return interior.id === orderObject.interiorId
        }
    )
    const totalCost = foundInterior.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    const wheels = getWheelOptions()
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === orderObject.wheelId
        }
    )
  /*  const totalCost = foundWheel.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })*/
    return `<li>
        Order #${orderObject.id} was placed on ${orderObject.timestamp} and costs ${costString}
    </li>`
}

export const Orders = () => {

    /*
    Can you explain why the state variable has to be inside
    the component function for Orders, but not the others?
    */
    const orders = getOrders()





    let html = "<ul>"

    const listItems = orders.map(orderObj => buildOrderListItem(orderObj))

    html += listItems.join("")

    html += "</ul>"

    return html
}