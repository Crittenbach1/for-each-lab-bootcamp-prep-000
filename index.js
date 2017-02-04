function iterativeLog(array) {
    array.forEach(element => {
      console.log(`${array.indexOf(element)}: ${element}`) }) }

function iterate(callback) {
   var cat = ["cat1", "cat2", "cat3"];
   cat.forEach(callback);
  return cat;
}

function doToArray(array, callback) {
    array.forEach(callback) }
