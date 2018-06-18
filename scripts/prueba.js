(function () {
    'use strict';
  
    function Link () {
    this.Link = document.querySelector('#input').value;
    //this.Email = document.querySelector('#email').value;
    //this.Phone = document.querySelector('#phone').value;
    //this.Desc = document.querySelector('#message').value;
    } // event bubbling means that from where the event happens, its parents (all through to the root) will know about the event
    // capturing: first it will bubble up to a certain point, and then the direct parent will know where the event came from
  
    function convertUrl (string) {
      //var stringArray = string.slice(7);
      var stringArray = Array.from(string);
      for (var i = 1; i < string.length; i+=1){
        var previousChar = ' ';
        var currentChar = '';
        
        previousChar = stringArray[i-1];
        currentChar = stringArray[i];
       
        
        if ((currentChar === '/') & (previousChar === '/')) {
          //console.log(i, currentChar, previousChar);
          stringArray = Array.from(string.slice(i+1));
          stringArray = stringArray.join('');
          //console.log(stringArray);
          break;
        }
      }
      if (typeof stringArray === typeof []){
        stringArray = stringArray.join('');
      }
      //console.log(stringArray);
      stringArray = stringArray.replace('/', ' ');
      //console.log(stringArray);
      stringArray = stringArray.split(' ');
     // console.log(stringArray[0]);
      stringArray[1] = '' + Math.floor(10000000+Math.random() * 90000000);
      var outputUrl = stringArray.join('/');
      return outputUrl;
    }
    var submitButton = document.querySelector('button[type="submit"]');
    var formElement = document.querySelector('form');
     // var formElement1 = document.forms[0];
  
    formElement.addEventListener('submit', ()=> {
      var l = new Link();
      alert('The URL you input is, ' + l.Link + '.\nYour URL will be converted shortly.');
      // want to do something along the lines of
      document.querySelector('#output').innerHTML = 'Your converted URL is below.\n' + l.Link; //(this does not already output)
    })
  
    submitButton.addEventListener('click', (evt) => {
       evt.preventDefault();
      var l = new Link(); // right now p is fetching the entire element which has tags, content, and attributes
      console.log(l.Link);  // the content that we truly care about will be in the property=value of content so we will isolate that
      document.querySelector('#output').innerHTML = 'Your converted URL is as follows: ' + convertUrl(l.Link); //(this does not already output)
    })
  }());