
const database = {
    paintColors: [
        { id: 1, name: "silver", price: 300 },
        { id: 2, name: "midnight blue", price: 400 },
        { id: 3, name: "firebrick red", price: 600 },
        { id: 1, name: "spring green", price: 200 }
    ],

    interiors: [
        { id: 1, name: "beige fabric", price: 400 },
        { id: 2, name: "charcoal fabric", price: 300 },
        { id: 3, name: "white leather", price: 1100 },
        { id: 1, name: "black leather", price: 1600 }
    ],

    technologyPackages: [
        { id: 1, name: "basic package", price: 2000 },
        { id: 2, name: "navigation package", price: 3100 },
        { id: 3, name: "visibility package", price: 4000.99 },
        { id: 1, name: "ultra package", price: 6525.75 }
    ],

    wheelOptions: [
        { id: 1, name: "17-inch pair radial", price: 2515.99 },
        { id: 2, name: "17-inch pair radial black", price: 2700 },
        { id: 3, name: "18-inch spoke pair silver", price: 3200 },
        { id: 1, name: "18-inch spoke pair black", price: 4150.75 }
    ],

    customOrders: [
        {
            id: 1,
            paintColorsId: ,
            interiorsId: ,
            technologyPackagesId: ,
            wheelOptionsId: 
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
    return database.technologyPackages.map(tech => ({ ...tech }))
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

export const setInterior = (id) => {
    database.orderBuilder.interiorsId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelOptionsId = id
}

export const setPaint = (id) => {
    database.orderBuilder.paintColorsId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyPackagesId = id
}