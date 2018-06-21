var a = 0;
var b = 0;
var c = 0;


for (x=0; x<101 ; x+=1){
    if((x%3 === 0 ) && (x % 5 ===0)){
        console.log('FizzBuzz');
        c = c + 1;
        
    }
    else if ( x%5 === 0){
        console.log('Buzz');
        b = b + 1;

    }
    else if (x % 3 === 0){
        console.log('Fizz');
        a = a + 1;
    }
    else {
        console.log(x);
    };
    
}
console.log( 'We have '+ a + ' Fizz');
console.log('We have '+ b + ' Buzz');
console.log('We have '+ c + ' FizzBuzz');