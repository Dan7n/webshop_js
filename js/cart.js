$(function() {

    window.addEventListener("storage", () => {
        console.log("stuff is happening")
    })


    $(".checkout-container").hide()
    let listOfPrices = [];
    let sessionStorageCheck = sessionStorage.getItem(["cart"]);

    function emptyCart() {
        console.log("empty");
        $(".cart-items").attr("id", "emptyCart");
        $("<h1>").text("Opps! Looks like your cart is empty").addClass("cart-empty-h1").appendTo($(".cart-items"));
        $("<p>").html("You're only a few clicks away from a cozy evening!<br>Go back to our products page and fill your cart with some delicious candy!").addClass("cart-empty-p").appendTo($(".cart-items"));
        $("<a>").attr("href", "./products.html").text("Products Page").addClass("cart-empty-btn").appendTo($(".cart-items"));
        $("<img>").attr("src", "./../assets/empty-cart.svg").addClass("cart-empty-svg").appendTo($(".cart-items"));
    }


    // in case you have items in your carts
    if (sessionStorageCheck || sessionStorageCheck === "") {
        let objectsFromSessionStorage = JSON.parse(sessionStorage["cart"]);

        const wrapper = $("<div>");
        wrapper.addClass("wrapper").appendTo($(".cart-items"));

        // console.log(objectsFromSessionStorage)
        $.each(objectsFromSessionStorage, (i, value) => {
            //individual cart item divs

            let cartItemContainer = $("<div>");
            cartItemContainer.addClass("cart-item-container").attr("id", value.id).appendTo(wrapper);
            $("<img>").attr("src", value.image).addClass("cart-item-image").appendTo(cartItemContainer);
            let innerDiv = $("<div>");
            innerDiv.addClass("inner-div").appendTo(cartItemContainer);
            $("<h4>").text(value.name).addClass("cart-item-h").appendTo(innerDiv);
            $("<p>").text(value.description).addClass("cart-item-p").appendTo(innerDiv);
            let removeIconDiv = $("<div>");
            removeIconDiv.addClass("remove-icon-div").appendTo(innerDiv);
            let removeBtn = $("<a>");
            removeBtn.html("<i class='fas fa-dumpster'></i> Remove").addClass("remove-icon").appendTo(removeIconDiv).on("click", () => {
                    let parent = removeBtn.parents(".cart-item-container")
                    let relatedObject = value;

                    //remove item from cart, remove object from array, update sessionStorage
                    if (parent.attr("id") == relatedObject.id) {
                        objectsFromSessionStorage.splice(relatedObject, 1)
                        listOfPrices.splice(relatedObject, 1);

                        parent.addClass("deleted").on("animationend", () => {
                                parent.remove();

                                //if user removes all items from the cart, re-direct to empty page and clear sessionStorage

                                if ($(".wrapper").children().length >= 0) {
                                    $(".price-container").remove();
                                    emptyCart()
                                    sessionStorage.clear()
                                }
                            })
                            //update sessionStorage
                        sessionStorage.setItem(["cart"], JSON.stringify(objectsFromSessionStorage))
                        console.log(getTotalPrice())

                    }
                })
                //allowing user to change quantity of item in the cart
            $("<label>").attr("for", "quantity").text("Quantity").appendTo(removeIconDiv);
            let changeAmount = $("<input>");
            changeAmount.attr("type", "text").attr("name", "quantity").attr("min", "1").attr("max", "6").addClass("amount").appendTo(removeIconDiv).on("keyup", (e) => {
                let userInputedPrice = parseInt(e.target.value)
                value.inCart = userInputedPrice; //setting the object's inCart value to the value inputed by the user, then changing it from string to number in order to do math operations
                value.price = value.price * userInputedPrice;
                console.log(value)

                sessionStorage.setItem(["cart"], JSON.stringify(cart))
                sessionStorage.setItem(["cart"], JSON.stringify(objectsFromSessionStorage))
                console.log(objectsFromSessionStorage)

            })

            //unit price
            $("<p>").html(`${value.price}SEK`).addClass("cart-item-p-price").appendTo(cartItemContainer);
            listOfPrices.push(value.price) //adds current price to a list of all prices in cart

        })


        function getTotalPrice() {

            let finalPrice = listOfPrices.reduce((accumulator, currentPrice) => {
                return accumulator + currentPrice;
            }, 0);
            return finalPrice;
        };

        //total price container
        function displayTotalPrice() {
            let $priceContainer = $("<div>");
            $priceContainer.addClass("price-container").appendTo($(".cart-items"));
            let $priceInnerDiv = $("<div>");
            $("<h2>").text("Total price").appendTo($priceContainer);
            $priceInnerDiv.addClass("price-inner-div").appendTo($priceContainer);
            $("<div>").html(`<p>Items in cart:</p><p>${getTotalPrice()} SEK</p>`).appendTo($priceInnerDiv);
            $("<div>").html(`<p>Shipping and handling:</p><p class="free">FREE!</p>`).appendTo($priceInnerDiv);
            $("<div>").addClass("final-price").html(`<p>Final price:</p><p>${getTotalPrice()} SEK</p>`).appendTo($priceContainer);
            $("<a>").addClass("to-checkout-btn").html("Go to checkout").appendTo($priceContainer).one("click", () => {
                $(".checkout-container").slideDown()
                $("<img>").attr("src", "./../assets/teamwork.svg").appendTo(".form-body")
            });
        }
        displayTotalPrice()

        //add gif animation of page loading, and open another page saying that the payment went through
        //checkout 
        let $checkoutBtn = $(".submit");
        $checkoutBtn.on("click", () => {
            setTimeout(() => {
                console.log("payment went through")
            }, 4000)
        })


        // in case cart is empty
    } else {
        emptyCart()
    };

});