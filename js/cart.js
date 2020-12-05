$(function() {


    let localStorageCheck = localStorage.getItem(["cart"]);

    if (localStorageCheck || localStorageCheck === "") {
        let objectsFromLocalStorage = JSON.parse(localStorage["cart"]);
        console.log(objectsFromLocalStorage)
    } else if (localStorage === undefined || localStorage === null) {
        console.log("cart is empty")
    }


    // let dataFromLocalStorage = JSON.parse(localStorage["cart"]);



    // if (dataFromLocalStorage || dataFromLocalStorage === "") {
    //     console.log("cool")
    // } else {
    //     console.log("cart is empty");
    // }





});