//function to controll if the cart is empty
function emptyCart() {
    $(".cart-items").attr("id", "emptyCart");
    $("<h1>").text("Opps! Looks like your cart is empty").addClass("cart-empty-h1").appendTo($(".cart-items"));
    $("<p>").html("You're only a few clicks away from a cozy evening!<br>Go back to our products page and fill your cart with some delicious candy!").addClass("cart-empty-p").appendTo($(".cart-items"));
    $("<a>").attr("href", "./products.html").text("Products Page").addClass("cart-empty-btn").appendTo($(".cart-items"));
    $("<img>").attr("src", "./../assets/empty-cart.svg").addClass("cart-empty-svg").appendTo($(".cart-items"));
}

$(function() {

    $("input").attr("required", true);
    $(".checkout-container").hide()
    let listOfPrices = [];
    let sessionStorageCheck = sessionStorage.getItem(["cart"]);

    //function to live-update individual prices on user input
    function updatePrice(element, originalPrice, qty, currentIndex) {
        let newPrice = qty * originalPrice;
        if (qty <= 0) {
            return element.html(originalPrice + "SEK")
        } else {
            listOfPrices[currentIndex] = newPrice;
            return element.html(newPrice + "SEK")
        }
    }

    //function to live-update total price on user input
    function updateTotalPrice(totalPriceElement, newPrice, innerText) {
        return totalPriceElement.html(`<p>${innerText}</p><p>${newPrice} SEK</p>`)
    }

    /* ---------------------------------------------------- */
    // in case you have items in your carts
    if (sessionStorageCheck || sessionStorageCheck === "") {
        let objectsFromSessionStorage = JSON.parse(sessionStorage["cart"]);

        const wrapper = $("<div>");
        wrapper.addClass("wrapper").appendTo($(".cart-items"));

        $.each(objectsFromSessionStorage, (i, value) => {
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
                        let removedItemIndex = objectsFromSessionStorage.indexOf(relatedObject);
                        objectsFromSessionStorage.splice(removedItemIndex, 1)
                        listOfPrices.splice(removedItemIndex, 1);

                        parent.addClass("deleted").on("animationend", function() {
                                parent.remove();
                                updateTotalPrice($("#itemsInCart"), getTotalPrice(), "Items in cart:")
                                updateTotalPrice($("#finalPrice"), getTotalPrice(), "Final price:")


                                //if user removes all items from the cart, re-direct to empty page and clear sessionStorage
                                if ($(".wrapper").children().length <= 0) {
                                    $(".price-container").remove();
                                    $(".checkout-container").hide();
                                    emptyCart()
                                    sessionStorage.clear()
                                }
                            })
                            //update sessionStorage
                        sessionStorage.setItem(["cart"], JSON.stringify(objectsFromSessionStorage))
                    }
                })
                //allowing user to change quantity of item in the cart
            let spinnerContainer = $("<p>");
            spinnerContainer.addClass("spinner-container").appendTo(removeIconDiv);
            $("<label>").attr("for", "spinner").html(`<i class="fas fa-sort-amount-up-alt"></i> Quantity: `).appendTo(spinnerContainer);
            let changeAmount = $("<input>");
            changeAmount.attr("name", "value").attr("min", 1).attr("max", 10).attr("value", value.inCart).addClass("amount").appendTo(spinnerContainer).on("spinchange", function(e) {
                let userInputedPrice = parseInt(e.target.value)
                value.inCart = userInputedPrice; //setting the object's inCart value to the value inputed by the user, then changing it from string to number in order to do math operations
                
                let closestContainer = $(this).closest($(".cart-item-container"));

                //update sessionStorage
                sessionStorage.setItem(["cart"], JSON.stringify(cart))
                sessionStorage.setItem(["cart"], JSON.stringify(objectsFromSessionStorage))

                //change current cart item's price, update the array that contains prices of every item inisde the cart
                updatePrice(closestContainer.children("p"), value.price, userInputedPrice, i);

                //change total price on user input
                let container = $(this).closest(".cart-items")
                updateTotalPrice(container.find(".price-inner-div div:first-child"), getTotalPrice(), "Items in cart:")
                updateTotalPrice(container.find(".final-price"), getTotalPrice(), "Final price:")
            })
            var spinner = $(".amount").spinner();

            //unit price
            $("<p>").html(`${value.price * value.inCart}SEK`).addClass("cart-item-p-price").appendTo(cartItemContainer);
            listOfPrices.push(value.price * value.inCart); //adds current price to a list of all prices in cart
        })

        //gets total price of all items inside the listOfPrices array
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
            $("<div>").html(`<p>Items in cart:</p><p>${getTotalPrice()} SEK</p>`).attr("id", "itemsInCart").appendTo($priceInnerDiv);
            $("<div>").html(`<p>Shipping and handling:</p><p class="free">FREE!</p>`).appendTo($priceInnerDiv);
            $("<div>").addClass("final-price").html(`<p>Final price:</p><p>${getTotalPrice()} SEK</p>`).attr("id", "finalPrice").appendTo($priceContainer);
            $("<a>").addClass("to-checkout-btn").html("Go to checkout").appendTo($priceContainer).one("click", function() {
                $priceContainer.addClass("remove-margin-bottom");
                $("footer").addClass("static-position");
                $(".checkout-container").slideDown()
                $("<img>").attr("src", "./../assets/teamwork.svg").appendTo(".form-body")
                $('html, body').animate({
                    scrollTop: $(".checkout-container").offset().top
                }, 500);
            });
        }
        displayTotalPrice()


        //checkout 
        let $checkoutBtn = $(".submit");
        $checkoutBtn.on("click", () => {

            //basic form validation: make sure all the fields are filled with data before allowing user to submit
            const $formInputs = $(".validate");
            if ($formInputs.hasClass("validation-failure")) {
                $formInputs.removeClass("validation-failure");
            }

            let $isFormValid;
            $formInputs.each(function() {
                if ($(this).val() === "") {
                    $isFormValid = false;
                } else {
                    $isFormValid = true;
                }
            })

            if ($isFormValid === false) {
                $formInputs.filter(function() {
                    return $(this).val() === "";
                }).addClass("validation-failure");
                $checkoutBtn.attr("title", "Please make sure to fill out all the remaining form fields");
                $(document).tooltip();

                //allow order to be submitted if all form inputs are filled with data
            } else {
                let loadingContainer = $("<div>");
                loadingContainer.attr("id", "loadingContainer").html("<h1>Please wait while we process your payment!</h1>").appendTo("body")
                $("<img>").attr("src", "./../assets/loading-icon.svg").attr("id", "loadingImg").appendTo(loadingContainer);
                setTimeout(() => {
                    sessionStorage.clear()
                    loadingContainer.remove();
                    window.open("./../html/orderConfirmation.html", "_self");
                }, 5000)
            }
        })

        // in case cart is empty, run the function defined at the top of this page
    } else {
        emptyCart()
    };
});