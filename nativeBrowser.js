const myEvent= new CustomEvent("pizzeriaEvents", {
    detail: {
        pizza: "Margherita",
        price: 5
    }
});

window.addEventListener("pizzeriaEvents", function(e) {
    console.log("Your pizza selection:",  e.detail.pizza, "Price:", e.detail.price);
});
window.dispatchEvent(myEvent);
