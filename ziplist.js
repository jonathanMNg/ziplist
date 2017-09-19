const alphabet = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

function ziplist(list1, list2) {
  const zipList = [];
  const maxLength = Math.max(list1.length, list2.length);
  for (let i = 0; i < maxLength; i++) {
    if (list1[i] != null) {
      zipList.push(list1[i]);
    }
    if (list2[i] != null) {
      zipList.push(list2[i]);
    }
  }
  return zipList;
}
function ziplistTheSimPleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(ziplist(alphabet, numbers));
console.log(ziplistTheSimPleWay(alphabet, numbers));
