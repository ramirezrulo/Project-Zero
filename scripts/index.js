//event lisener for the quanity of the books and an on click that it will multiply by the subtotal.

/// you create an object // you create a list and pull the cart and it is gonna show the items and price
// cart = [];
// function () =>{
//     cart.push
// }


 
    // var mathForBooks = 0;

    function numberOfBooks (value){
       var a = document.querySelector('.btn').value; // it is not taking the class/value. Can't use "btn btn-default" as a class, shows an error.
        console.log(value);
        //this.quanityBooks =
        // mathForBooks=value;
        // console.log('math number is ' + mathForBooks);
        // getPrice();
    };

    // function getPrice (){
    //     var finalPrice = 0;
    //     finalPrice = 17*mathForBooks;
    //     console.log(finalPrice);
    //     document.querySelector(.fin).innerHTML=finalPrice; 
    //     return finalPrice;
    // };

numberOfBooks();


    var quanityQuantity = document.querySelector('select');
    //var quantityOne = document.querySelector(Option.opOne);
    // var quantityTwo = document.querySelector(Option.Two);
    // var quantityThree = document.querySelector(Option.Three);
    // var quantityFour = document.querySelector(Option.Four);
    // var quantityFive = document.querySelector(Option.Five);
    //console.log(quantityOne);

    document.querySelector('select').addEventListener('change', numberOfBooks(this.value));


    // quantityOne.addEventListener('click', (i) =>{
    // numberOfBooks = 1;
    // console.log(numberOfBooks);
    // });

    // quantityTwo.addEventListener('click', (i) =>{
    // numberOfBooks = 2;
    // console.log(numberOfBooks);
    // });

    //  quantityThree.addEventListener('click', (i) =>{
    // numberOfBooks = 3;
    // console.log(numberOfBooks);
    // });

    // quantityFour.addEventListener('click', (i) =>{
    // numberOfBooks = 4;
    // console.log(numberOfBooks);
    // });

    // quantityFour.addEventListener('click', (i) =>{
    // numberOfBooks = 5;
    // console.log(numberOfBooks);
    // });