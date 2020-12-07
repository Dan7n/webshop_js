$(function() {







    let sessionStorageCheck = sessionStorage.getItem(["cart"]);

    if (sessionStorageCheck || sessionStorageCheck === "") {
        let objectsFromSessionStorage = JSON.parse(sessionStorage["cart"]);
        console.log(objectsFromSessionStorage)
        $.each(objectsFromSessionStorage, (i, value) => {
            //working progress
            let cartItemContainer = $("<div>");
            cartItemContainer.addClass("cart-item-container").appendTo($(".cart-items"));
            $("<img>").attr("src", value.image).addClass("cart-item-image").appendTo(cartItemContainer);
            $("<h4>").text(value.name).addClass("cart-item-h").appendTo(cartItemContainer);
            $("<p>").text(value.description).addClass("cart-item-p").appendTo(cartItemContainer);
            $("<p>").text(`Unit Price: ${value.price} SEK`).addClass("cart-item-p-price").appendTo(cartItemContainer);

            // const priceDiv = $("<div>");
            // priceDiv.addClass("price-div").appendTo(cartItemContainer);

        })

        //this is where the payment form goes
        // createAccordion();
        // $("#accordion").accordion({
        //     collapsible: true
        // });



    } else {
        console.log("empty");
        $("<h1>").text("Opps! Looks like your cart is empty").addClass("cart-empty-h1").appendTo($(".cart-items"));
        $("<p>").html("You're only a few clicks away from a cozy evening!<br>Go back to our products page and fill your cart with some delicious candy!").addClass("cart-empty-p").appendTo($(".cart-items"));
        $("<a>").attr("href", "./products.html").text("Products Page").addClass("cart-empty-btn").appendTo($(".cart-items"));
        $("<img>").attr("src", "./../assets/empty-cart.svg").addClass("cart-empty-svg").appendTo($(".cart-items"));

    };


});

function createAccordion() {
    let accordionDiv = $("<div>");
    accordionDiv.attr("id", "accordion").appendTo($(".cart-items"));
    $("<h3>").text("placeholder").addClass("accordion-h3").appendTo(accordionDiv);
    $("<div>").addClass("accordion-inner-div").appendTo(accordionDiv);
    $("<h3>").text("placeholder2").addClass("accordion-h3").appendTo(accordionDiv);
    $("<div>").addClass("accordion-inner-div").appendTo(accordionDiv);
}