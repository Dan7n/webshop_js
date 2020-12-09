"use strict";$((function(){window.addEventListener("storage",(function(){console.log("stuff is happening")})),$(".checkout-container").hide();var t=[],a=sessionStorage.getItem(["cart"]);function e(){console.log("empty"),$(".cart-items").attr("id","emptyCart"),$("<h1>").text("Opps! Looks like your cart is empty").addClass("cart-empty-h1").appendTo($(".cart-items")),$("<p>").html("You're only a few clicks away from a cozy evening!<br>Go back to our products page and fill your cart with some delicious candy!").addClass("cart-empty-p").appendTo($(".cart-items")),$("<a>").attr("href","./products.html").text("Products Page").addClass("cart-empty-btn").appendTo($(".cart-items")),$("<img>").attr("src","./../assets/empty-cart.svg").addClass("cart-empty-svg").appendTo($(".cart-items"))}if(a||""===a){var n=function(){return t.reduce((function(t,a){return t+a}),0)},i=JSON.parse(sessionStorage.cart),o=$("<div>");o.addClass("wrapper").appendTo($(".cart-items")),$.each(i,(function(a,r){var s=$("<div>");s.addClass("cart-item-container").attr("id",r.id).appendTo(o),$("<img>").attr("src",r.image).addClass("cart-item-image").appendTo(s);var p=$("<div>");p.addClass("inner-div").appendTo(s),$("<h4>").text(r.name).addClass("cart-item-h").appendTo(p),$("<p>").text(r.description).addClass("cart-item-p").appendTo(p);var c=$("<div>");c.addClass("remove-icon-div").appendTo(p);var d=$("<a>");d.html("<i class='fas fa-dumpster'></i> Remove").addClass("remove-icon").appendTo(c).on("click",(function(){var a=d.parents(".cart-item-container"),o=r;a.attr("id")==o.id&&(i.splice(o,1),t.splice(o,1),a.addClass("deleted").on("animationend",(function(){a.remove(),$(".wrapper").children().length>=0&&($(".price-container").remove(),e(),sessionStorage.clear())})),sessionStorage.setItem(["cart"],JSON.stringify(i)),console.log(n()))})),$("<label>").attr("for","quantity").text("Quantity").appendTo(c),$("<input>").attr("type","text").attr("name","quantity").attr("min","1").attr("max","6").addClass("amount").appendTo(c).on("keyup",(function(t){var a=parseInt(t.target.value);r.inCart=a,r.price=r.price*a,console.log(r),sessionStorage.setItem(["cart"],JSON.stringify(cart)),sessionStorage.setItem(["cart"],JSON.stringify(i)),console.log(i)})),$("<p>").html("".concat(r.price,"SEK")).addClass("cart-item-p-price").appendTo(s),t.push(r.price)})),function(){var t=$("<div>");t.addClass("price-container").appendTo($(".cart-items"));var a=$("<div>");$("<h2>").text("Total price").appendTo(t),a.addClass("price-inner-div").appendTo(t),$("<div>").html("<p>Items in cart:</p><p>".concat(n()," SEK</p>")).appendTo(a),$("<div>").html('<p>Shipping and handling:</p><p class="free">FREE!</p>').appendTo(a),$("<div>").addClass("final-price").html("<p>Final price:</p><p>".concat(n()," SEK</p>")).appendTo(t),$("<a>").addClass("to-checkout-btn").html("Go to checkout").appendTo(t).one("click",(function(){$(".checkout-container").slideDown(),$("<img>").attr("src","./../assets/teamwork.svg").appendTo(".form-body")}))}(),$(".submit").on("click",(function(){setTimeout((function(){console.log("payment went through")}),4e3)}))}else e()}));