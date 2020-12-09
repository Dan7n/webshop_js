"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var products=[],cart=[],cartPage=$("#cartPage"),Product=function t(e,a,o,s,r,c,n){_classCallCheck(this,t),this.name=e,this.category=a,this.price=o,this.image=s,this.id=r,this.description=c,this.inCart=n},id=0;function addProductsHtml(){$.each(products,(function(t,e){var a=$("<div></div>"),o=$("<img>"),s=$("<h3></h3>"),r=$("<p><b></b></p>"),c=$("<button></button>");a.attr("id",e.id),o.attr("src",e.image).appendTo(a),s.text(e.name).appendTo(a),r.text(e.price+" kr").appendTo(a),c.attr("type","button").text("Add To Cart!").on("click",(function(){e.inCart++,e.inCart<=1&&cart.push(e),c.text("Added to cart!"),c.addClass("addedToCart"),window.setTimeout((function(){c.text("Add to cart!"),c.removeClass("addedToCart")}),4e3),productCart()})).appendTo(a),a.appendTo($("#productContainer"))}))}function pickProductCategory(){$("#sodaSortButton").on("click",(function(){$.each(products,(function(t,e){$("#"+t).hide(),"Soda"===e.category&&$("#"+t).show()}))})),$("#nutsSortButton").on("click",(function(){$.each(products,(function(t,e){$("#"+t).hide(),"Nuts"===e.category&&$("#"+t).show()}))})),$("#chocolateSortButton").on("click",(function(){$.each(products,(function(t,e){$("#"+t).hide(),"Chocolate"===e.category&&$("#"+t).show()}))})),$("#chipsSortButton").on("click",(function(){$.each(products,(function(t,e){$("#"+t).hide(),"Chips"===e.category&&$("#"+t).show()}))})),$("#allSortButton").on("click",(function(){$.each(products,(function(t,e){$("#"+t).show()}))}))}function productCart(){if(0===cart.length)$("#cart").html(" "),$("<h2></h2>").text("Your cart is empty!").appendTo($("#cart"));else{var t=0;$("#cart").html(" "),$.each(cart,(function(a,o){var s=o.price*o.inCart;t+=s;var r=$("<div></div>").addClass("cartProductWrapper");$("<img>").attr("src",o.image).appendTo(r),$("<h5></h5>").text(o.name).appendTo(r),$("<span></span>").text(o.price+" kr").appendTo(r);var c=$("<input></input>");c.attr("type","number").attr("value",o.inCart).on("keypress",(function(a){"Enter"===a.key&&(o.inCart=parseInt(c.val()),t+=o.price*(o.inCart-1),e.html("Total: "+t+" kr"))})).appendTo(r),$("<button></button>").attr("type","button").html("&#10005;").on("click",(function(){o.inCart=0,cart.splice(a,1),productCart()})).appendTo(r),r.appendTo($("#cart"))}));var e=$("<p></p>");e.html("Total: "+t+" kr").appendTo($("#cart")),$("<button></button>").attr("type","button").text("Go To Checkout!").on("click",(function(){window.open("cart.html","_self")})).appendTo($("#cart")),sessionStorage.setItem(["cart"],JSON.stringify(cart))}$("#cart").dialog({autoOpen:!1,height:"600",width:"550",position:{my:"left top",at:"left top",of:"#temporaryCart"}}),$("#temporaryCart").on("click",(function(){$("#cart").dialog("open")}))}$((function(){$(".logo-svg").on("mouseenter",(function(){$("svg > path").attr("fill","#0b325d")})).on("mouseleave",(function(){$("svg > path").attr("fill","white")}));var t=new Product("Reese's, Holiday Assorted Trees Gusset Bag","Chocolate",46,"../assets/products/cat_chocolate/reeses.jpeg",id++,"The delicious combination of milk chocolate and peanut butter or white crème and peanut butter",0),e=new Product("M&M'S Peanut Chocolate Candy, 38-Ounce Party Size Bag","Chocolate",99,"../assets/products/cat_chocolate/m&ms.jpeg",id++,"Made with roasted peanuts and real milk chocolate, M&M'S Peanut Chocolate Candy is a favorite party candy",0),a=new Product("Minis Size Chocolate Candy Bars Variety Mix","Chocolate",119,"../assets/products/cat_chocolate/snack-mix.jpeg",id++,"These mini-sized bars of chocolate are fantastic for sharing with friends and family",0),o=new Product("DOVE PROMISES Dark Chocolate Candy Bag","Chocolate",43,"../assets/products/cat_chocolate/dove.jpeg",id++,"Made with real dark chocolate for a delicious afternoon snack",0),s=new Product("Hershey's, Milk Chocolate Candy Bars","Chocolate",52,"../assets/products/cat_chocolate/hersheys.png",id++,"Milk Chocolate [Cane Sugar, Milk, Chocolate, Cocoa Butter, Milk Fat, Lecithin (Soy), Natural Flavor].",0),r=new Product("Kisses Milk Chocolate Candy, Holiday Candy Bag","Chocolate",99,"../assets/products/cat_chocolate/kisses.jpeg",id++,"Milk Chocolate [Cane Sugar, Milk, Chocolate, Cocoa Butter, Milk Fat, Lecithin (Soy), Natural Flavor].",0);products.push(t,e,a,o,s,r);var c=new Product("Kettle Brand Potato Chips, Sea Salt and Vinegar Kettle Chips","Chips",39,"../assets/products/cat_chips/kettleSaltAndVinegar.jpeg",id++,"Is it presumptuous to call a chip a harmonic convergence of flavor? You might want to taste this chip before you answer. ",0),n=new Product("Doritos Nacho Cheese Flavored Tortilla Chips, Party Size","Chips",49,"../assets/products/cat_chips/doritos.jpeg",id++,"DORITOS isn't just a chip. It's fuel for disruption - our flavors ignite adventure and inspire action. With every crunch, we aim to redefine culture and support those who are boldly themselves. Are you ready? If so, crunch on.",0),i=new Product("Utz Cheese Balls","Chips",89,"../assets/products/cat_chips/cheeseBalls.jpeg",id++,"Have a fun and tasty food ready for the next special occasion or for every day snacking with Utz Cheese Balls. This product contains baked cheddar and is made with real cheese for a delicious taste on every piece. ",0),d=new Product("Cheetos Crunchy Flamin' Hot Cheese Flavored Snacks","Chips",39,"../assets/products/cat_chips/cheetos.jpeg",id++,"Hot, spicy flavor packed into crunchy, cheesy snacks. CHEETOS Crunchy FLAMIN' HOT Cheese Flavored Snacks are full of flavor and made with real cheese. Cheetos snacks are the much-loved cheesy treats that are fun for everyone! You just can't eat a Cheetos snack without licking the signature 'cheetle' off your fingertips.",0),u=new Product("Lay's Classic Potato Chips, Party Size","Chips",39,"../assets/products/cat_chips/lays.jpeg",id++,"It all starts with farm-grown potatoes, cooked and seasoned to perfection. So every LAY'S potato chip is perfectly crispy and full of fresh potato taste. Happiness in Every Bite. Large bag is perfect for sharing.",0),l=new Product("Pringles, Potato Crisps Chips, Sour Cream & Onion Flavored","Chips",29,"../assets/products/cat_chips/lays.jpeg",id++,"Your favorite flavor combo of yummy sour cream and zesty onion is now in your favorite potato crisp. Deliciously seasoned Sour Cream and Onion Flavored Pringles Potato Crisps are flavored from edge to edge for a craveable taste and perfect crunch.",0);products.push(c,n,i,d,u,l);var h=new Product("Wonderful Roasted & salted Pistachios","Nuts",55,"../assets/products/cat_nuts/pistachios.jpeg",id++,"One 16 Ounce Resealable Pouch of our Roasted & Salted In-Shell Wonderful Pistachios. Wonderful Pistachios are a smart, healthy choice for folks around the world.",0),p=new Product("Great Value Deluxe Cashews","Nuts",99,"../assets/products/cat_nuts/cashews.jpeg",id++,"Grab a container of our Great Value Roasted and Salted Cashew Halves and Pieces for a delicious snack that the whole family can enjoy any time of the day.",0),C=new Product("Fisher Chef's Naturals Walnut Halves & Pieces","Nuts",59,"../assets/products/cat_nuts/walnuts.jpeg",id++,"Fisher really goes nuts for fresh ideas in the kitchen, and we know you do too! So when cooking, replace ordinary with surprise. Experiment, improvise. Then enjoy the best part…sharing your delicious discovery with family and friends.",0),f=new Product("Sahale Snacks Naturally Pomegranate Vanilla Flavored Cashews","Nuts",39,"../assets/products/cat_nuts/vanillaCashews.jpeg",id++,"Treat your palate to the rich, sweet and subtly tart flavor of Sahale Snacks Pomegranate Vanilla Flavored Cashews Glazed Mix. This delicious snack is crafted with dry-roasted whole cashews and pomegranate flavored apples and finished with a pinch of rich, fragrant Madagascar vanilla",0),y=new Product("Fisher Chef's Naturals Pecan Halves","Nuts",129,"../assets/products/cat_nuts/pecans.jpeg",id++,"FISHER Chef's Naturals Pecan Halves, No Preservatives, Non-GMO, 24 ozFisher really goes nuts for fresh ideas in the kitchen, and we know you do too! So when cooking, replace ordinary with surprise. ",0),g=new Product("Great Value Whole Natural Almonds","Nuts",45,"../assets/products/cat_nuts/almonds.jpeg",id++,"Taste the bold flavor and crunch of Great Value Whole Natural Almonds. This 14-ounce bag is the perfect size to keep at your desk at work or in the pantry for a quick snack within easy reach.",0);products.push(h,p,C,f,y,g);var w=new Product("(2 pack) Pepsi Soda","Soda",99,"../assets/products/cat_soda/pepsi.jpeg",id++,"Ingredients: CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CARAMEL COLOR, SUGAR, PHOSPHORIC ACID, CAFFEINE, CITRIC ACID, NATURAL FLAVOR.",0),S=new Product("(2 Pack) Sprite Lemon Lime Soda Soft Drinks","Soda",109,"../assets/products/cat_soda/sprite.jpeg",id++,"Ingredients: CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, NATURAL FLAVORS, SODIUM CITRATE, SODIUM BENZOATE (TO PROTECT TASTE).",0),v=new Product("(24 Cans) 7UP","Soda",109,"../assets/products/cat_soda/7up.jpeg",id++,"Ingredients: FILTERED CARBONATED WATER, HIGH FRUCTOSE CORN SYRUP, CITRIC ACID, POTASSIUM CITRATE, NATURAL FLAVORS, CALCIUM DISODIUM EDTA (TO PROTECT FLAVOR)",0),m=new Product("(2 pack) Mtn Dew Frost Bite","Soda",89,"../assets/products/cat_soda/mountain-dew.jpeg",id++,"Introducing MTN DEW FROST, the taste that chills!",0),P=new Product("(2 Pack) Coke Zero Sugar Diet Soda Soft Drink","Soda",123,"../assets/products/cat_soda/cola-zero.jpeg",id++,"Coca-Cola Zero Sugar has more real Coca-Cola flavor, still without any sugar",0),k=new Product("Dr Pepper & Cream Soda","Soda",69,"../assets/products/cat_soda/dr-pepper.jpeg",id++,"The 23 signature flavors of Dr Pepper & Cream Soda are blended to create one satisfyingly unique beverage. Other sodas can try, but only Dr Pepper can crush your craving for flavor",0);products.push(w,S,v,m,P,k),addProductsHtml(),pickProductCategory(),productCart()}));