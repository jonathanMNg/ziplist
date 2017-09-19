const alphabet = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

function ziplist(list1, list2) {
  if (list1.length !== list2.length) {
    console.log("Error: Two lists don't have equal length.");
    return null;
  }
  const zipList = [];
  for (let i = 0; i < list1.length; i++) {
    zipList.push(list1[i]);
    zipList.push(list2[i]);
  }
  return zipList;
}
function ziplistTheSimPleWay(list1, list2) {
  if (list1.length !== list2.length) {
    console.log("Error: Two lists don't have equal length.");
    return null;
  }
  return _.flatten(_.zip(list1, list2));
}
console.log(ziplist(alphabet, numbers));
console.log(ziplistTheSimPleWay(alphabet, numbers));
