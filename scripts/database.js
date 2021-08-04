
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
    //this copies the current user choices and stores it in the newOrder variable.
    const newOrder = { ...database.orderBuilder }

    //this is adding a new primary key, or new id property to the new order. we are storing the new id in the variable lastIndex. We subtract 1 because we are adding an order which means we have 1 in there but we want to start at zero. So when we take the customOrders last index and add 1 we will get back to one as out custom order id.
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    //this is generating a time stamp
    newOrder.timestamp = Date.now()

    //this is pushing the new order to the custom order state we have created. That is permanent state.
    database.customOrders.push(newOrder)

    //this is resetting the temporary state for user choices, which is an empty object orderBuilder and is temporary state.
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
