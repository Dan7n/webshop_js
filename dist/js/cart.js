"use strict";function emptyCart(){$(".cart-items").attr("id","emptyCart"),$("<h1>").text("Opps! Looks like your cart is empty").addClass("cart-empty-h1").appendTo($(".cart-items")),$("<p>").html("You're only a few clicks away from a cozy evening!<br>Go back to our products page and fill your cart with some delicious candy!").addClass("cart-empty-p").appendTo($(".cart-items")),$("<a>").attr("href","./products.html").text("Products Page").addClass("cart-empty-btn").appendTo($(".cart-items")),$("<img>").attr("src","./../assets/empty-cart.svg").addClass("cart-empty-svg").appendTo($(".cart-items"))}$((function(){$("input").attr("required",!0),$(".checkout-container").hide();var a=[],t=sessionStorage.getItem(["cart"]);function e(a,t,e){return a.html("<p>".concat(e,"</p><p>").concat(t," SEK</p>"))}if(t||""===t){var i=function(){return a.reduce((function(a,t){return a+t}),0)},r=JSON.parse(sessionStorage.cart),n=$("<div>");n.addClass("wrapper").appendTo($(".cart-items")),$.each(r,(function(t,s){var o=$("<div>");o.addClass("cart-item-container").attr("id",s.id).appendTo(n),$("<img>").attr("src",s.image).addClass("cart-item-image").appendTo(o);var c=$("<div>");c.addClass("inner-div").appendTo(o),$("<h4>").text(s.name).addClass("cart-item-h").appendTo(c),$("<p>").text(s.description).addClass("cart-item-p").appendTo(c);var d=$("<div>");d.addClass("remove-icon-div").appendTo(c);var p=$("<a>");p.html("<i class='fas fa-dumpster'></i> Remove").addClass("remove-icon").appendTo(d).on("click",(function(){var t=p.parents(".cart-item-container"),e=s;t.attr("id")==e.id&&(r.splice(e,1),a.splice(e,1),t.addClass("deleted").on("animationend",(function(){t.remove(),$(".wrapper").children().length>=0&&($(".price-container").remove(),$(".checkout-container").hide(),emptyCart(),sessionStorage.clear())})),sessionStorage.setItem(["cart"],JSON.stringify(r)))}));var l=$("<p>");l.addClass("spinner-container").appendTo(d),$("<label>").attr("for","spinner").html('<i class="fas fa-sort-amount-up-alt"></i> Quantity: ').appendTo(l),$("<input>").attr("name","value").attr("min",1).attr("max",10).addClass("amount").appendTo(l).on("spinchange",(function(n){var o=parseInt(n.target.value);s.inCart=o;var c,d,p,l,m,u=$(this).closest($(".cart-item-container"));sessionStorage.setItem(["cart"],JSON.stringify(cart)),sessionStorage.setItem(["cart"],JSON.stringify(r)),c=u.children("p"),d=s.price,l=t,m=(p=o)*d,p<=0?c.html(d+"SEK"):(a[l]=m,c.html(m+"SEK"));var v=$(this).closest(".cart-items");e(v.find(".price-inner-div div:first-child"),i(),"Items in cart:"),e(v.find(".final-price"),i(),"Final price:")}));$(".amount").spinner();$("<p>").html("".concat(s.price*s.inCart,"SEK")).addClass("cart-item-p-price").appendTo(o),a.push(s.price)})),function(){var a=$("<div>");a.addClass("price-container").appendTo($(".cart-items"));var t=$("<div>");$("<h2>").text("Total price").appendTo(a),t.addClass("price-inner-div").appendTo(a),$("<div>").html("<p>Items in cart:</p><p>".concat(i()," SEK</p>")).appendTo(t),$("<div>").html('<p>Shipping and handling:</p><p class="free">FREE!</p>').appendTo(t),$("<div>").addClass("final-price").html("<p>Final price:</p><p>".concat(i()," SEK</p>")).appendTo(a),$("<a>").addClass("to-checkout-btn").html("Go to checkout").appendTo(a).one("click",(function(){a.addClass("remove-margin-bottom"),$("footer").addClass("static-position"),$(".checkout-container").slideDown(),$("<img>").attr("src","./../assets/teamwork.svg").appendTo(".form-body")}))}();var s=$(".submit");s.on("click",(function(){var a,t=$(".validate");if(t.hasClass("validation-failure")&&t.removeClass("validation-failure"),t.each((function(){a=""!==$(this).val()})),!1===a)t.filter((function(){return""===$(this).val()})).addClass("validation-failure"),s.attr("title","Please make sure to fill all the remaining form fields"),$(document).tooltip();else{var e=$("<div>");e.attr("id","loadingContainer").html("<h1>Please wait while we process your payment!</h1>").appendTo("body"),$("<img>").attr("src","./../assets/loading-icon.svg").attr("id","loadingImg").appendTo(e),setTimeout((function(){sessionStorage.clear(),e.remove(),window.open("./../html/orderConfirmation.html","_self")}),5e3)}}))}else emptyCart()}));