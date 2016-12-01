var num;

var convertToC =function (num){
  answer = Math.round((num-32)*(5/9));
  return num + " degrees Fahrenheit is " + answer +" degrees Celsius" ;
};

console.log(convertToC(34));
