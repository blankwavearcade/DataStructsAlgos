function bubbleSort(list, len) {
  if (len === 1) {
    return list;
  }

  for(var i = 0; i < len - 1; i++ ){
    if(list[i] > list[i+1]) {
      tmp = list[i];
      list[i] = list[i+1];
      list[i+1] = tmp;
    }
  }
  return bubbleSort(list, len-1);
}

var a = [8, 3, 2, 4, 6,1];

console.log('Unsorted List: ', a);
console.log('Sorted list: ', bubbleSort(a, a.length));
