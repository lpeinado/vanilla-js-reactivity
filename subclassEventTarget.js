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

  const Pizzas = new PizzaStore();
  Pizzas.addEventListener("pizzaAdded", (e) => console.log('Added Pizza:', e.detail.pizza));
  Pizzas.addPizza("supreme");
  Pizzas.addPizza("Margherita");
  Pizzas.addPizza("Tuna and onion");
  Pizzas.addPizza("Veggie");