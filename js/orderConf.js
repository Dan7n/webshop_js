$(function() {


    let randomCharGenerator = Math.floor(Math.random() * 1000000000) + 1;
    $("#confirmationNumber").html(`Your order number is: ${randomCharGenerator}`);

});