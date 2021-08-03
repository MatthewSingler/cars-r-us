
const database = {
    paintColors: [
        { id: 1, name: "silver", price: 300 },
        { id: 2, name: "midnight blue", price: 400 },
        { id: 3, name: "firebrick red", price: 600 },
        { id: 4, name: "spring green", price: 200 }
    ],

    interiors: [
        { id: 1, name: "beige fabric", price: 400 },
        { id: 2, name: "charcoal fabric", price: 300 },
        { id: 3, name: "white leather", price: 1100 },
        { id: 4, name: "black leather", price: 1600 }
    ],

    technologyPackages: [
        { id: 1, name: "basic package", price: 2000 },
        { id: 2, name: "navigation package", price: 3100 },
        { id: 3, name: "visibility package", price: 4000.99 },
        { id: 4, name: "ultra package", price: 6525.75 }
    ],

    wheelOptions: [
        { id: 1, name: "17-inch pair radial", price: 2515.99 },
        { id: 2, name: "17-inch pair radial black", price: 2700 },
        { id: 3, name: "18-inch spoke pair silver", price: 3200 },
        { id: 4, name: "18-inch spoke pair black", price: 4150.75 }
    ],

    customOrders: [
        {
            id: 1,
            paintColorsId: 3,
            interiorsId: 2,
            technologyPackagesId: 4,
            wheelOptionsId: 1 
        }
    ],

    orderBuilder: [
        {

        }
    ]
}

export const getWheelOptions = () => {
    return database.wheelOptions.map(wheel => ({ ...wheel }))
}

export const getTechnologyPackages = () => {
    return database.technologyPackages.map(techPackages => ({ ...techPackages }))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))
}

export const getPaintColors = () => {
    return database.paintColors.map(color => ({ ...color }))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}

export const setInteriors = (id) => {
    database.orderBuilder.interiorsId = id
}

export const setWheelOptions = (id) => {
    database.orderBuilder.wheelOptionsId = id
}

export const setPaintColors = (id) => {
    database.orderBuilder.paintColorsId = id
}

export const setTechnologyPackages = (id) => {
    database.orderBuilder.technologyPackagesId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
