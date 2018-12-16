/*function binarySearch(item, list, left, right) {
  var mid;
  if(right >= left) {
    mid = Math.floor(left + (right - left) / 2);
    if (item[mid] === item) 
      return mid;
    
    if (item[mid] < item) {
      return binarySearch(item, list, mid + 1, right);
    }
    else {
      return binarySearch(item, list, left, mid - 1);
    }
    return -1;
  }
}*/

function binarySearch(item, list, left, right) {
  var mid;
  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    if (list[mid] === item) 
      return mid;

    if (list[mid] < item) {
      left = mid + 1;
    }
    else {
      right = mid - 1;
    }
  }
  return -1;
}





var list = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
var item = 23;
console.log(binarySearch(item, list, 0, list.length - 1));
