console.log("Closures - functions in javascripts are also closures!");
console.log("This means that a function has access to variables that are defined outside the function");

var me = 'Thomas';

function greetMe(){
    console.log('Hello '+me);
}
//Even if i change me here greetMe() will refer to the variable at time of calling greetMe(), not a copy at the time its defined.
me = 'Bruce Wane';
greetMe();

//Why is this useful practical example 
/*
function sendRequest(){
    var requestID = '123';
    $.ajax({
        url:'/myurl',
        success:function(response){
            alert('Request '+requestID + 'returned');
        }
    });
}

*/


//Another cool closure trick

function add(x){
    return function(y){
        return x+y;
    }
}

var test=add(14);

console.log(test(2));


