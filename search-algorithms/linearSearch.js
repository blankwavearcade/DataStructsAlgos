function linearSearch(item, list) {
  var n = list.length;
  for(var i = 0; i < n; i++) {
    if(list[i] === item)
      return i;
  }
}

var list = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
var item = 110;

console.log(linearSearch(item, list));
