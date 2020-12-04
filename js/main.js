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

    //products => chocolate catagory
    let chocolate_1 = new Product("Reese's, Holiday Assorted Trees Gusset Bag", "Chocolate", 46, "assets/products/cat_chocolate/reeses.jpeg", id++, "The delicious combination of milk chocolate and peanut butter or white crème and peanut butter");
    let chocolate_2 = new Product("M&M'S Peanut Chocolate Candy, 38-Ounce Party Size Bag", "Chocolate", 99, "assets/products/cat_chocolate/m&ms.jpeg", id++, "Made with roasted peanuts and real milk chocolate, M&M'S Peanut Chocolate Candy is a favorite party candy");
    let chocolate_3 = new Product("Minis Size Chocolate Candy Bars Variety Mix", "Chocolate", 119, "assets/products/cat_chocolate/m&ms.jpeg", id++, "These mini-sized bars of chocolate are fantastic for sharing with friends and family");
    let chocolate_4 = new Product("DOVE PROMISES Dark Chocolate Candy Bag", "Chocolate", 43, "assets/products/cat_chocolate/dove.jpeg", id++, "Made with real dark chocolate for a delicious afternoon snack");
    let chocolate_5 = new Product("Hershey's, Milk Chocolate Candy Bars", "Chocolate", 52, "assets/products/cat_chocolate/hersheys.png", id++, "Milk Chocolate [Cane Sugar, Milk, Chocolate, Cocoa Butter, Milk Fat, Lecithin (Soy), Natural Flavor].");
    let chocolate_6 = new Product("Kisses Milk Chocolate Candy, Holiday Candy Bag", "Chocolate", 99, "assets/products/cat_chocolate/kisses.jpeg", id++, "Milk Chocolate [Cane Sugar, Milk, Chocolate, Cocoa Butter, Milk Fat, Lecithin (Soy), Natural Flavor].");
    products.push(chocolate_1, chocolate_2, chocolate_3, chocolate_4, chocolate_5, chocolate_6);

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

    //products => soda catagory
    let soda_1 = new Product("(2 pack) Pepsi Soda", "Soda", 99, "assets/products/cat_soda/pepsi.jpeg", id++, "Ingredients: CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CARAMEL COLOR, SUGAR, PHOSPHORIC ACID, CAFFEINE, CITRIC ACID, NATURAL FLAVOR.");
    let soda_2 = new Product("(2 Pack) Sprite Lemon Lime Soda Soft Drinks", "Soda", 109, "assets/products/cat_soda/sprite.jpeg", id++, "Ingredients: CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, NATURAL FLAVORS, SODIUM CITRATE, SODIUM BENZOATE (TO PROTECT TASTE).");
    let soda_3 = new Product("(24 Cans) 7UP", "Soda", 109, "assets/products/cat_soda/7up.jpeg", id++, "Ingredients: FILTERED CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, POTASSIUM CITRATE, NATURAL FLAVORS, CALCIUM DISODIUM EDTA (TO PROTECT FLAVOR)");
    let soda_4 = new Product("(2 pack) Mtn Dew Frost Bite", "Soda", 89, "assets/products/cat_soda/mountain-dew.jpeg", id++, "Introducing MTN DEW FROST, the taste that chills!");
    let soda_5 = new Product("(2 Pack) Coke Zero Sugar Diet Soda Soft Drink", "Soda", 123, "assets/products/cat_soda/cola-zero.jpeg", id++, "Coca-Cola Zero Sugar has more real Coca-Cola flavor, still without any sugar");
    let soda_6 = new Product("Dr Pepper & Cream Soda", "Soda", 69, "assets/products/cat_soda/dr-pepper.jpeg", id++, "The 23 signature flavors of Dr Pepper & Cream Soda are blended to create one satisfyingly unique beverage. Other sodas can try, but only Dr Pepper can crush your craving for flavor");
    products.push(soda_1, soda_2, soda_3, soda_4, soda_5, soda_6)

})