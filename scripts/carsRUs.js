import { PaintColors } from "./PaintColors.js"
import { InteriorOptions } from "./InteriorOptions.js"
import { TechnologyPackages } from "./TechnologyPackages.js"
import { WheelOptions } from "./WheelOptions.js"






export const carsRUs = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__ paint colors">
                <h2>Paint Colors</h2>
                ${PaintColors()}
            </section>
            <section class="choices__interior options">
                <h2>Interiors</h2>
                ${InteriorOptions()}
            </section>
            <section class="choices__wheel options">
                <h2>Wheels</h2>
                ${WheelOptions()}
            </section>
            <section class="choices__technology packages">
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