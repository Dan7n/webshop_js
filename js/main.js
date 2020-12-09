let products = [];
let cart = [];
const cartPage = $("#cartPage");


class Product {
    constructor(name, category, price, image, id, description, inCart) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
        this.id = id;
        this.description = description;
        this.inCart = inCart;
    }
}

let id = 0;
$(function() {

    $(".logo-svg").on("mouseenter", () => {
        $("svg > path").attr("fill", "#0b325d");
    }).on("mouseleave", () => {
        $("svg > path").attr("fill", "white");
    });

    //products => chocolate catagory
    let chocolate_1 = new Product("Reese's, Holiday Assorted Trees Gusset Bag", "Chocolate", 46, "../assets/products/cat_chocolate/reeses.jpeg", id++, "The delicious combination of milk chocolate and peanut butter or white crème and peanut butter", 0);
    let chocolate_2 = new Product("M&M'S Peanut Chocolate Candy, 38-Ounce Party Size Bag", "Chocolate", 99, "../assets/products/cat_chocolate/m&ms.jpeg", id++, "Made with roasted peanuts and real milk chocolate, M&M'S Peanut Chocolate Candy is a favorite party candy", 0);
    let chocolate_3 = new Product("Minis Size Chocolate Candy Bars Variety Mix", "Chocolate", 119, "../assets/products/cat_chocolate/snack-mix.jpeg", id++, "These mini-sized bars of chocolate are fantastic for sharing with friends and family", 0);
    let chocolate_4 = new Product("DOVE PROMISES Dark Chocolate Candy Bag", "Chocolate", 43, "../assets/products/cat_chocolate/dove.jpeg", id++, "Made with real dark chocolate for a delicious afternoon snack", 0);
    let chocolate_5 = new Product("Hershey's, Milk Chocolate Candy Bars", "Chocolate", 52, "../assets/products/cat_chocolate/hersheys.png", id++, "Milk Chocolate [Cane Sugar, Milk, Chocolate, Cocoa Butter, Milk Fat, Lecithin (Soy), Natural Flavor].", 0);
    let chocolate_6 = new Product("Kisses Milk Chocolate Candy, Holiday Candy Bag", "Chocolate", 99, "../assets/products/cat_chocolate/kisses.jpeg", id++, "Milk Chocolate [Cane Sugar, Milk, Chocolate, Cocoa Butter, Milk Fat, Lecithin (Soy), Natural Flavor].", 0);
    products.push(chocolate_1, chocolate_2, chocolate_3, chocolate_4, chocolate_5, chocolate_6);
    //products => chips catagory
    let kettleSaltAndVinegar = new Product("Kettle Brand Potato Chips, Sea Salt and Vinegar Kettle Chips", "Chips", 39, "../assets/products/cat_chips/kettleSaltAndVinegar.jpeg", id++, "Is it presumptuous to call a chip a harmonic convergence of flavor? You might want to taste this chip before you answer. ", 0);
    let doritos = new Product("Doritos Nacho Cheese Flavored Tortilla Chips, Party Size", "Chips", 49, "../assets/products/cat_chips/doritos.jpeg", id++, "DORITOS isn't just a chip. It's fuel for disruption - our flavors ignite adventure and inspire action. With every crunch, we aim to redefine culture and support those who are boldly themselves. Are you ready? If so, crunch on.", 0);
    let cheeseBalls = new Product("Utz Cheese Balls", "Chips", 89, "../assets/products/cat_chips/cheeseBalls.jpeg", id++, "Have a fun and tasty food ready for the next special occasion or for every day snacking with Utz Cheese Balls. This product contains baked cheddar and is made with real cheese for a delicious taste on every piece. ", 0);
    let cheetos = new Product("Cheetos Crunchy Flamin' Hot Cheese Flavored Snacks", "Chips", 39, "../assets/products/cat_chips/cheetos.jpeg", id++, "Hot, spicy flavor packed into crunchy, cheesy snacks. CHEETOS Crunchy FLAMIN' HOT Cheese Flavored Snacks are full of flavor and made with real cheese. Cheetos snacks are the much-loved cheesy treats that are fun for everyone! You just can't eat a Cheetos snack without licking the signature 'cheetle' off your fingertips.", 0);
    let lays = new Product("Lay's Classic Potato Chips, Party Size", "Chips", 39, "../assets/products/cat_chips/lays.jpeg", id++, "It all starts with farm-grown potatoes, cooked and seasoned to perfection. So every LAY'S potato chip is perfectly crispy and full of fresh potato taste. Happiness in Every Bite. Large bag is perfect for sharing.", 0);
    let pringles = new Product("Pringles, Potato Crisps Chips, Sour Cream & Onion Flavored", "Chips", 29, "../assets/products/cat_chips/lays.jpeg", id++, "Your favorite flavor combo of yummy sour cream and zesty onion is now in your favorite potato crisp. Deliciously seasoned Sour Cream and Onion Flavored Pringles Potato Crisps are flavored from edge to edge for a craveable taste and perfect crunch.", 0);
    products.push(kettleSaltAndVinegar, doritos, cheeseBalls, cheetos, lays, pringles);

    //products => nuts catagory
    let pistachios = new Product("Wonderful Roasted & salted Pistachios", "Nuts", 55, "../assets/products/cat_nuts/pistachios.jpeg", id++, "One 16 Ounce Resealable Pouch of our Roasted & Salted In-Shell Wonderful Pistachios. Wonderful Pistachios are a smart, healthy choice for folks around the world.", 0);
    let cashews = new Product("Great Value Deluxe Cashews", "Nuts", 99, "../assets/products/cat_nuts/cashews.jpeg", id++, "Grab a container of our Great Value Roasted and Salted Cashew Halves and Pieces for a delicious snack that the whole family can enjoy any time of the day.", 0);
    let walnuts = new Product("Fisher Chef's Naturals Walnut Halves & Pieces", "Nuts", 59, "../assets/products/cat_nuts/walnuts.jpeg", id++, "Fisher really goes nuts for fresh ideas in the kitchen, and we know you do too! So when cooking, replace ordinary with surprise. Experiment, improvise. Then enjoy the best part…sharing your delicious discovery with family and friends.", 0);
    let vanillaCashews = new Product("Sahale Snacks Naturally Pomegranate Vanilla Flavored Cashews", "Nuts", 39, "../assets/products/cat_nuts/vanillaCashews.jpeg", id++, "Treat your palate to the rich, sweet and subtly tart flavor of Sahale Snacks Pomegranate Vanilla Flavored Cashews Glazed Mix. This delicious snack is crafted with dry-roasted whole cashews and pomegranate flavored apples and finished with a pinch of rich, fragrant Madagascar vanilla", 0);
    let pecans = new Product("Fisher Chef's Naturals Pecan Halves", "Nuts", 129, "../assets/products/cat_nuts/pecans.jpeg", id++, "FISHER Chef's Naturals Pecan Halves, No Preservatives, Non-GMO, 24 ozFisher really goes nuts for fresh ideas in the kitchen, and we know you do too! So when cooking, replace ordinary with surprise. ", 0);
    let almonds = new Product("Great Value Whole Natural Almonds", "Nuts", 45, "../assets/products/cat_nuts/almonds.jpeg", id++, "Taste the bold flavor and crunch of Great Value Whole Natural Almonds. This 14-ounce bag is the perfect size to keep at your desk at work or in the pantry for a quick snack within easy reach.", 0);
    products.push(pistachios, cashews, walnuts, vanillaCashews, pecans, almonds);

    //products => soda catagory
    let soda_1 = new Product("(2 pack) Pepsi Soda", "Soda", 99, "../assets/products/cat_soda/pepsi.jpeg", id++, "Ingredients: CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CARAMEL COLOR, SUGAR, PHOSPHORIC ACID, CAFFEINE, CITRIC ACID, NATURAL FLAVOR.", 0);
    let soda_2 = new Product("(2 Pack) Sprite Lemon Lime Soda Soft Drinks", "Soda", 109, "../assets/products/cat_soda/sprite.jpeg", id++, "Ingredients: CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, NATURAL FLAVORS, SODIUM CITRATE, SODIUM BENZOATE (TO PROTECT TASTE).", 0);
    let soda_3 = new Product("(24 Cans) 7UP", "Soda", 109, "../assets/products/cat_soda/7up.jpeg", id++, "Ingredients: FILTERED CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, POTASSIUM CITRATE, NATURAL FLAVORS, CALCIUM DISODIUM EDTA (TO PROTECT FLAVOR)", 0);
    let soda_4 = new Product("(2 pack) Mtn Dew Frost Bite", "Soda", 89, "../assets/products/cat_soda/mountain-dew.jpeg", id++, "Introducing MTN DEW FROST, the taste that chills!", 0);
    let soda_5 = new Product("(2 Pack) Coke Zero Sugar Diet Soda Soft Drink", "Soda", 123, "../assets/products/cat_soda/cola-zero.jpeg", id++, "Coca-Cola Zero Sugar has more real Coca-Cola flavor, still without any sugar", 0);
    let soda_6 = new Product("Dr Pepper & Cream Soda", "Soda", 69, "../assets/products/cat_soda/dr-pepper.jpeg", id++, "The 23 signature flavors of Dr Pepper & Cream Soda are blended to create one satisfyingly unique beverage. Other sodas can try, but only Dr Pepper can crush your craving for flavor", 0);
    products.push(soda_1, soda_2, soda_3, soda_4, soda_5, soda_6);

    addProductsHtml();
    pickProductCategory();
    productCart();

})

function addProductsHtml() {
    $.each(products, (i, product) => {
        let productWrapper = $("<div></div>");
        let productImage = $("<img>");
        let productTitle = $("<h3></h3>");
        let productPrice = $("<p><b></b></p>")
        let productButton = $("<button></button>");

        productWrapper.attr("id", product.id);
        productImage.attr("src", product.image).appendTo(productWrapper);
        productTitle.text(product.name).appendTo(productWrapper);
        productPrice.text(product.price + " kr").appendTo(productWrapper);
        productButton.attr("type", "button").text("Add To Cart!").on('click', () => {
            product.inCart++;
            if (product.inCart <= 1) {
                cart.push(product);
            }

            productButton.text("Added to cart!");
            productButton.addClass("addedToCart");
            window.setTimeout(() => {
                productButton.text("Add to cart!");
                productButton.removeClass("addedToCart");
            }, 4000);
            productCart();
        }).appendTo(productWrapper);

        productWrapper.appendTo($("#productContainer"));
    })
}

function pickProductCategory() {
    $("#sodaSortButton").on('click', () => {
        $.each(products, (i, product) => {
            $("#" + i).hide();
            if (product.category === "Soda") {
                $("#" + i).show();
            }
        })
    })

    $("#nutsSortButton").on('click', () => {
        $.each(products, (i, product) => {
            $("#" + i).hide();
            if (product.category === "Nuts") {
                $("#" + i).show();
            }
        })
    })

    $("#chocolateSortButton").on('click', () => {
        $.each(products, (i, product) => {
            $("#" + i).hide();
            if (product.category === "Chocolate") {
                $("#" + i).show();
            }
        })
    })

    $("#chipsSortButton").on('click', () => {
        $.each(products, (i, product) => {
            $("#" + i).hide();
            if (product.category === "Chips") {
                $("#" + i).show();
            }
        })
    })

    $("#allSortButton").on('click', () => {
        $.each(products, (i, product) => {
            $("#" + i).show();
        })
    })
}



function productCart() {
    if (cart.length === 0) {
        $("#cart").html(" ");
        $("<h2></h2>").text("Oops! Looks like your cart is empty").addClass("emptyCartTitle").appendTo($("#cart"));
    } else {
        let sum = 0;
        $("#cart").html(" ");
        $.each(cart, (i, cartProduct) => {
            let price = cartProduct.price * cartProduct.inCart;
            sum += price;

            let cartProductWrapper = $("<div></div>").addClass("cartProductWrapper");
            $("<img>").attr("src", cartProduct.image).appendTo(cartProductWrapper);
            $("<h5></h5>").text(cartProduct.name).appendTo(cartProductWrapper);
            $("<span></span>").text(cartProduct.price + " kr").appendTo(cartProductWrapper);

            let changeAmmountProductInput = $("<input></input>");
            changeAmmountProductInput.attr("type", "number").attr("value", cartProduct.inCart).on('keypress', (event) => {
                if (event.key === 'Enter') {
                    cartProduct.inCart = parseInt(changeAmmountProductInput.val());
                    sum += (cartProduct.price * (cartProduct.inCart - 1));
                    totalPrice.html("Total: " + sum + " kr");

                }
            }).appendTo(cartProductWrapper);
            $("<button></button>").attr("type", "button").html("&#10005;").on('click', () =>  {
                cartProduct.inCart = 0;
                cart.splice(i, 1);
                productCart();
            }).appendTo(cartProductWrapper);

            cartProductWrapper.appendTo($("#cart"));


        })
        let totalPrice = $("<p></p>");
        totalPrice.html("Total: " + sum + " kr").appendTo($("#cart"));

        //note to self: add function to remove items from local storage when removing items from cart
        //saving the array to local storage so that it can be used when the user clicks on the Cart tab
        sessionStorage.setItem(["cart"], JSON.stringify(cart))

    }

    $("#cart").dialog({
        autoOpen: false,
        width: "auto",
        create: function( event, ui ) {
            // Set maxWidth
            $(this).css("maxWidth", "550px");

          },
        position: { my: "left top", at: "left top", of: "#temporaryCart" },
        dialogClass: 'myDialogClass',
        buttons: [
            {
                text:"Go To Checkout!",
                click:function () {
                    window.open("cart.html","_self");
                }
            },
            {
                text: "Close Cart!",

                click: function() {
                $( this ).dialog( "close" );
            }},
            
        ]
    });

    $("#temporaryCart").on('click', () => {
        $("#cart").dialog("open");
    })
}