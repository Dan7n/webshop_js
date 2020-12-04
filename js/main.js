class Product {
    constructor(name, category, price, image, id, description) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
        this.id = id;
        this.description = description;
    }
}
let id = 0;
let products = [];
$(function () {

    let kettleSaltAndVinegar = new Product("Kettle Brand Potato Chips, Sea Salt and Vinegar Kettle Chips", "Chips", 39, "assets/kettleSaltAndVinegar.jpeg", id++, "Ingredients: Potatoes, Safflower And/Or Sunflower And/Or Canola Oil, Vinegar Powder (Maltodextrin, White Distilled Vinegar), Sea Salt, Maltodextrin, Citric Acid." );
})