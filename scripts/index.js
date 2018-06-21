function numberOfBooks (numBooks){
    console.log("in numberofbooks: " + numBooks);

    var title = document.querySelector('#bookTitle').textContent;
    
    var subtotal = document.querySelector('#subtotalPrice').textContent;

    console.log("SubTotal: " + subtotal);
    
    finalPrice = numBooks * Number( subtotal );
    console.log("finalPrice: " + finalPrice);

    sessionStorage.setItem(title, '' + numBooks + "," + finalPrice);

    document.querySelector('#totalPrice').textContent = finalPrice;
    return numBooks;
  };

    var books = document.querySelector('select');

  books.addEventListener('change', (e) => {
      numberOfBooks(e.target.value);
  });