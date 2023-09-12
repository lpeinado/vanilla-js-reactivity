class PizzaStore extends EventTarget {
    constructor() {
      super();
    }
    addPizza(flavor) {
      // fire event directly on the class
      this.dispatchEvent(new CustomEvent("pizzaAdded", {
        detail: {
          pizza: flavor,
        },
      }));
    }
  }


document.addEventListener("DOMContentLoaded", function() {

    const Pizzas = new PizzaStore();
    Pizzas.addEventListener("pizzaAdded", listenToPizzaAdded);
    Pizzas.addPizza("Double cheese");
    Pizzas.addPizza("Margherita");
    Pizzas.addPizza("Tuna and onion");
    Pizzas.addPizza("Veggie");

    function listenToPizzaAdded(e) {
        console.log("Your pizza selection:", e.detail.pizza);
        const pizzaList = document.getElementById("pizza");
        if (pizzaList) {
            document.getElementById("pizza").innerHTML += `<li>${e.detail.pizza}</li>`;
        }
    }
});
