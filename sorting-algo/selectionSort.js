function selectionSort(list) { 
  var len = list.length,
  min = 0,
  tmp;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i+1; j < len; j++) {
      if (list[j] <= list[min]) {
        min = j;
      }
    }
    list = swap(list, min, i);
  }
  return list;
}

function swap(list, min, i) {
  var tmp = list[min];
  list[min] = list[i];
  list[i] = tmp;
  return list;
}

var list = [64, 25, 12, 22, 11];
console.log('Unsorted List: ', list);
console.log('Sorted List: ', selectionSort(list));
