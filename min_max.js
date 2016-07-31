
// This function gets the minimum and maximum of either several numbers passed in as
// individual arguments or if you pass in an array as the first and only argument.
// If you load min_max.html, you can simply call this function by
// min_max(1,2,3,4,5) or min_max([1,2,3,4,5]). Thanks - Brant Goddard

function min_max() {
  var min, max, first_arg;
  first_arg = arguments[0];
  //Check to see if its an array passed in
  if (typeof(first_arg) == "object") {
    min = Math.min(...first_arg);
    max = Math.max(...first_arg);
    argz = first_arg;
  }
  //if its not an array, get the max/min of all arguments
  else {
    min = Math.min(...arguments);
    max = Math.max(...arguments);
    argz = Array.prototype.join.call(arguments, ",");
  };
  //set a couple of strings to return
  min_res = "The Minimum of " + argz + " is " + min;
  max_res = "The Maximum of " + argz + " is " + max;
  //log the result
  console.log(min_res);
  console.log(max_res);
};
