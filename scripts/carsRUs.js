export const carsRUs = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__ paint options">
                <h2>Paint Colors</h2>
                ${Paints()}
            </section>
            <section class="choices__interior options">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices__wheel options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
            <section class="choices__technology packages">
                <h2>Technology Packages</h2>
                ${Technology()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Vehicle Orders</h2>
            <section class="order__button">
                <h2>Styles</h2>
                ${Orders()}
            </section>
        </article>
    `
}