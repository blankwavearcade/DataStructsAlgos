function bubbleSort(list) {
  var len = list.length;
  console.log('Original List: ', list);
  for (var i = 0; i < len - 1; i++) {
    var swapped = false;
    for (var j = 0; j < len - i - 1; j++) {
      if (list[j] > list[j+1]) {
        var tmp = list[j];
        list[j] = list[j+1];
        list[j+1] = tmp;
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
    console.log(`Iteration ${i}: `, list);
  }
  return list;
}

var a = [8, 3, 2, 4, 6,1];

console.log('Sorted list: ', bubbleSort(a));
