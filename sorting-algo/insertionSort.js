function insertionSort(list) {
  var len = list.length,
      key;
  for (var i = 1; i < len; i++) {
    key = list[i];
    j = i - 1;

    /* Shift array elements up one index */
    while(j >= 0 && list[j] > key) {
      list[j+1] = list[j];
      j--;
    }

    list[j+1] = key;
  }
  return list;
}

var list = [12, 11, 13, 5, 6];
console.log('unsorted Array: ', list);
console.log('Sorted Array: ',insertionSort(list));
