var bookTitles = ["The Outsider", "The Alchemist"];

window.onload = function ()
{
    for (var x=0; x < bookTitles.length; x++)
    {
        var sessionString = sessionStorage.getItem(bookTitles[x]);
        console.log(sessionString);
        if (sessionString != null)
        {
            var paramArray = sessionString.split(',');
            console.log(paramArray);
            var numbooks = paramArray[0];
            var price = paramArray[1];
            console.log( "Number of books: " + numbooks + ", Price: " + price);
        }
    }
}

