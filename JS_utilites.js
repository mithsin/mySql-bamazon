.splice(a,b,c) 
/*a = the position
b = remove how many Array
c = plug in what Array

plug in a array into the exist array for example
arr = [1, 2, 3, 4];
arr.splice(2,0,6); <-- this mean remove "nothing" in array, in #2 position, and the array to be plug in is 6.*/



.call(obj, function argument)
syntax:
functionName.call(obj, arg1, arg2, arg3);
example:
var obj = {num:2}
var addToThis = function(a,b,c){
return.this.num + a + b + c;
}
console.log(addToThis.call(obj, 3,2,1));

.apply(obj1, obj2)
syntax:
functionName.apply(obj[arg1, arg2, arg3]);
example: 
var arr = [3, 2, 1]
var obj = {num:2}
var addToThis = function(a,b,c){
return.this.num + a + b + c;
}
console.log(addToThis.apply(obj, arr));

.bind(obj)
syntax:
var bound = functionName.bind(obj);
bound(arg1, arg2, arg3);
example:
var obj = {num:2};
var addToThis = function(a,b,c){
    return.this.num + a + b + c;
};

var bound = addToThis.bind(obj);
bound(1,2,3);


.concat()

.endsWith()

indexOf():
- return the first matched word location. if there is no match, it will return false. 
syntax: str.indexOf(searchValue[, fromIndex])

lastIndexOf()
- return the last matched word location. if there is no match, it will return false. 
syntax: str.indexOf(searchValue[, fromIndex])

.subStr()
method returns the characters in a string beginning at the specified location through the specified number of characters.
syntax: str.substr(start, [length])

.repeat()
repeat the str count.
syntax: str.repeat(count);








