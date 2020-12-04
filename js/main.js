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

    let kettleSaltAndVinegar = new Product("Kettle Brand Potato Chips, Sea Salt and Vinegar Kettle Chips", "Chips", 39, "assets/products/cat_chips/kettleSaltAndVinegar.jpeg", id++, "Ingredients: Potatoes, Safflower And/Or Sunflower And/Or Canola Oil, Vinegar Powder (Maltodextrin, White Distilled Vinegar), Sea Salt, Maltodextrin, Citric Acid." );
    let doritos = new Product("Doritos Nacho Cheese Flavored Tortilla Chips, Party Size", "Chips", 49, "aassets/products/cat_chips/doritos.jpeg", id++, "Ingredients: Corn, Vegetable Oil (Sunflower, Canola, And/Or Corn Oil), Maltodextrin (Made from Corn), Salt, Cheddar Cheese (Milk, Cheese Cultures, Salt, Enzymes), Whey, Monosodium Glutamate, Buttermilk, Romano Cheese (Part-Skim Cow's Milk, Cheese Cultures, Salt, Enzymes), Whey Protein Concentrate, Onion Powder, Corn Flour, Natural and Artificial Flavor, Dextrose, Tomato Powder, Lactose, Spices, Artificial Color (Including Yellow 6, Yellow 5, And Red 40), Lactic Acid, Citric Acid, Sugar, Garlic Powder, Skim Milk, Red and Green Bell Pepper Powder, Disodium Inosinate, and Disodium Guanylate");
    let cheeseBalls = new Product("Utz Cheese Balls", "Chips", 89, "assets/products/cat_chips/cheeseBalls.jpeg", id++, "Ingredients: Corn Meal, Vegetable Oil (Contains one or more of the following: Cottonseed, Corn, Canola, Sunflower, Safflower), Whey, Maltodextrin, Cheddar Cheese (Pasteurized Milk, Cheese Cultures, Salt, Enzymes), Milkfat, Whey Protein Concentrate, Salt, Mono and Diglycerides, Buttermilk Solids, Natural Flavor, Disodium Phosphate, Lactic Acid, Yellow #6, Autolyzed Yeast Extract, Yellow #5, Disodium Inosinate, Disodium Guanylate, Artificial Flavor.");
    let cheetos = new Product("Cheetos Crunchy Flamin' Hot Cheese Flavored Snacks", "Chips", 39, "assets/products/cat_chips/cheetos.jpeg", id++, "Ingredients: ENRICHED CORN MEAL (CORN MEAL, FERROUS SULFATE, NIACIN, THIAMIN MONONITRATE, RIBOFLAVIN, FOLIC ACID), VEGETABLE OIL (CORN, CANOLA, AND/OR SUNFLOWER OIL), FLAMIN' HOT SEASONING (MALTODEXTRIN MADE FROM CORN , SALT, SUGAR, MONOSODIUM GLUTAMATE, YEAST EXTRACT, CITRIC ACID, ARTIFICIAL COLOR RED 40 LAKE, YELLOW 6 LAKE, YELLOW 6, YELLOW 5 , SUNFLOWER OIL, CHEDDAR CHEESE MILK, CHEESE CULTURES, SALT, ENZYMES , ONION POWDER, WHEY, WHEY PROTEIN CONCENTRATE, GARLIC POWDER, NATURAL FLAVOR, BUTTERMILK, SODIUM DIACETATE, DISODIUM INOSINATE, DISODIUM GUANYLATE), AND SALT");
    let lays = new Product("Lay's Classic Potato Chips, Party Size", "Chips", 39, "assets/products/cat_chips/lays.jpeg", id++, "Ingredients: POTATOES, VEGETABLE OIL (SUNFLOWER, CORN AND/OR CANOLA OIL), AND SALT");
    let pringles = new Product("Pringles, Potato Crisps Chips, Sour Cream & Onion Flavored", "Chips", 29, "assets/products/cat_chips/lays.jpeg", id++, "Ingredients: DRIED POTATOES, VEGETABLE OIL (CORN, COTTONSEED, HIGH OLEIC SOYBEAN, AND/OR SUNFLOWER OIL), DEGERMINATED YELLOW CORN FLOUR, CORNSTARCH, RICE FLOUR, MALTODEXTRIN, MONO- AND DIGLYCERIDES.CONTAINS 2% OR LESS OF SALT, WHEY, SOUR CREAM (CREAM, NONFAT MILK, CULTURES), MONOSODIUM GLUTAMATE, ONION POWDER, COCONUT OIL, DEXTROSE, SUGAR, NATURAL FLAVORS, NONFAT MILK, CITRIC ACID, SODIUM CASEINATE, LACTIC ACID, YEAST EXTRACT, DISODIUM INOSINATE, DISODIUM GUANYLATE, BUTTERMILK, MALIC ACID, INVERT SUGAR, CULTURED NONFAT MILK, CREAM, WHEAT STARCH.");
    products.push(kettleSaltAndVinegar, doritos, cheeseBalls, cheetos, lays, pringles);

    let pistachios = new Product("Wonderful Roasted & salted Pistachios", "Nuts", 55, "assets/products/cat_nuts/pistachios.jpeg", id++, "Ingredients: PISTACHIOS, SEA SALT.");
    let cashews = new Product("Great Value Deluxe Cashews", "Nuts", 99, "assets/products/cat_nuts/cashews.jpeg", id++, "Ingredients: CASHEWS, VEGETABLE OIL (PEANUT OIL, COTTONSEED OIL, SOYBEAN OIL AND/OR SUNFLOWER OIL), SEA SALT.");
    let walnuts = new Product("Fisher Chef's Naturals Walnut Halves & Pieces", "Nuts", 59, "assets/products/cat_nuts/walnuts.jpeg", id++, "Ingredients: Walnuts.");
    let vanillaCashews = new Product("Sahale Snacks Naturally Pomegranate Vanilla Flavored Cashews", "Nuts", 39, "assets/products/cat_nuts/vanillaCashews.jpeg", id++, "Ingredients: Cashews, Pomegranate Flavored Dried Apples (Apples, Sugar, Natural Flavor, Citric Acid, Fruit and Vegetable Juice [for Color]), Organic Cane Sugar, Organic Tapioca Syrup, Brown Sugar, Sea Salt, Pomegranate Juice Concentrate, Dried Orange Peel, Dried Pomegranate, Vanilla Extract, Ground Vanilla Beans.");
    let pecans = new Product("Fisher Chef's Naturals Pecan Halves", "Nuts", 129, "assets/products/cat_nuts/pecans.jpeg", id++, "Ingredients: Pecans.");
    let almonds = new Product("Great Value Whole Natural Almonds", "Nuts", 45, "assets/products/cat_nuts/almonds.jpeg", id++, "Ingredients: ALMONDS");
    products.push(pistachios, cashews, walnuts, vanillaCashews, pecans, almonds);
})