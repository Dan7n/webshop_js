let products = [];



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
$(function() {

    let kettleSaltAndVinegar = new Product("Kettle Brand Potato Chips, Sea Salt and Vinegar Kettle Chips", "Chips", 39, "assets/kettleSaltAndVinegar.jpeg", id++, "Ingredients: Potatoes, Safflower And/Or Sunflower And/Or Canola Oil, Vinegar Powder (Maltodextrin, White Distilled Vinegar), Sea Salt, Maltodextrin, Citric Acid.");

    //products => chocolate catagory
    let chocolate_1 = new Product("Reese's, Holiday Assorted Trees Gusset Bag", "Chocolate", 46, "assets/products/cat_chocolate/reeses.jpeg", id++, "The delicious combination of milk chocolate and peanut butter or white crème and peanut butter");
    let chocolate_2 = new Product("M&M'S Peanut Chocolate Candy, 38-Ounce Party Size Bag", "Chocolate", 99, "assets/products/cat_chocolate/m&ms.jpeg", id++, "Made with roasted peanuts and real milk chocolate, M&M'S Peanut Chocolate Candy is a favorite party candy");
    let chocolate_3 = new Product("Minis Size Chocolate Candy Bars Variety Mix", "Chocolate", 119, "assets/products/cat_chocolate/m&ms.jpeg", id++, "These mini-sized bars of chocolate are fantastic for sharing with friends and family");
    let chocolate_4 = new Product("DOVE PROMISES Dark Chocolate Candy Bag", "Chocolate", 43, "assets/products/cat_chocolate/dove.jpeg", id++, "Made with real dark chocolate for a delicious afternoon snack");
    let chocolate_5 = new Product("Hershey's, Milk Chocolate Candy Bars", "Chocolate", 52, "assets/products/cat_chocolate/hersheys.png", id++, "Milk Chocolate [Cane Sugar, Milk, Chocolate, Cocoa Butter, Milk Fat, Lecithin (Soy), Natural Flavor].");
    let chocolate_6 = new Product("Kisses Milk Chocolate Candy, Holiday Candy Bag", "Chocolate", 99, "assets/products/cat_chocolate/kisses.jpeg", id++, "Milk Chocolate [Cane Sugar, Milk, Chocolate, Cocoa Butter, Milk Fat, Lecithin (Soy), Natural Flavor].");

    //products => soda catagory
    let soda_1 = new Product("(2 pack) Pepsi Soda", "Soda", 99, "assets/products/cat_soda/pepsi.jpeg", id++, "Ingredients: CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CARAMEL COLOR, SUGAR, PHOSPHORIC ACID, CAFFEINE, CITRIC ACID, NATURAL FLAVOR.");
    let soda_2 = new Product("(2 Pack) Sprite Lemon Lime Soda Soft Drinks", "Soda", 109, "assets/products/cat_soda/sprite.jpeg", id++, "Ingredients: CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, NATURAL FLAVORS, SODIUM CITRATE, SODIUM BENZOATE (TO PROTECT TASTE).");
    let soda_3 = new Product("(24 Cans) 7UP", "Soda", 109, "assets/products/cat_soda/7up.jpeg", id++, "Ingredients: FILTERED CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, POTASSIUM CITRATE, NATURAL FLAVORS, CALCIUM DISODIUM EDTA (TO PROTECT FLAVOR)");
    let soda_4 = new Product("(2 pack) Mtn Dew Frost Bite", "Soda", 89, "assets/products/cat_soda/mountain-dew.jpeg", id++, "Introducing MTN DEW FROST, the taste that chills!");
    let soda_5 = new Product("(2 Pack) Coke Zero Sugar Diet Soda Soft Drink", "Soda", 123, "assets/products/cat_soda/cola-zero.jpeg", id++, "Coca-Cola Zero Sugar has more real Coca-Cola flavor, still without any sugar");
    let soda_6 = new Product("Dr Pepper & Cream Soda", "Soda", 69, "assets/products/cat_soda/dr-pepper.jpeg", id++, "The 23 signature flavors of Dr Pepper & Cream Soda are blended to create one satisfyingly unique beverage. Other sodas can try, but only Dr Pepper can crush your craving for flavor");
})