import { PaintColors } from "./PaintColors.js"
import { Interiors } from "./InteriorOptions.js"
import { TechnologyPackages } from "./TechnologyPackages.js"
import { WheelOptions } from "./WheelOptions.js"
import { Orders } from "./orders.js"





export const carsRUs = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="options__paint colors options">
                <h2>Paint Colors</h2>
                ${PaintColors()}
            </section>
            <section class="options__interiors options">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class="options__wheel options">
                <h2>Wheels</h2>
                ${WheelOptions()}
            </section>
            <section class="options__technology packages options">
                <h2>Technology Packages</h2>
                ${TechnologyPackages()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Vehicle Orders</h2>
            <section class="order__button">
                <h2>Orders</h2>
                ${Orders()}
            </section>
        </article>
    `
}