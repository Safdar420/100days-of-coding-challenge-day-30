//  Q no 88

function roundToNearestInteger(num:number,):number{
return Math.round(num)
}
console.log(roundToNearestInteger(4.7));
console.log(roundToNearestInteger(4.4));

//  Qno 89

function convertStringToNumber(str:string):number{
return parseFloat(str)
}
console.log(convertStringToNumber("123"));
console.log(convertStringToNumber("456"));

//  Q no 90

function isValueNaN(value:any):boolean{
return isNaN(value)
}
console.log(isValueNaN("Hello"));
console.log(isValueNaN(123));