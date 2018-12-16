function insertionSort(list, len) {

  if (len <= 1) {
    return list;
  }

  insertionSort(list, len -1);

  key = list[len - 1];
  j = len - 2;

  /* Shift array elements up one index */
  while(j >= 0 && list[j] > key) {
    list[j+1] = list[j];
    j--;
  }

  list[j+1] = key;

  return list;
}

var list = [12, 11, 13, 5, 6];
console.log('unsorted Array: ', list);
console.log('Sorted Array: ',insertionSort(list, list.length));
