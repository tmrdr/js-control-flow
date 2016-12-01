var thing;
var count;

var counting = function(count, thing) {
  if ((count > 1) || (count <= 0)) {
    return count + " " + thing + "s";
  } else if (count === 1) {
    return count + " " + thing;
  }
};


console.log(counting(-2, "horse"));
