function Stack() {
  var that = this;
  var stack = [],
      top = -1,
      stackLength = stack.length;
  this.peek = function() {
    return that.isEmpty ? 'Stack underflow' : that.stack[that.stackLength - 1];
  };
  this.pop = function() {
    if (top != -1) { 
      var tmp = stack[stack.length - 1];
      stack.splice(top);
      --top;
      return tmp;
    }
    console.error('Stack underflow');
  };
  this.push = function(item) {
    
    stack[++top] = item; 
    return stack[top];
  };
  this.isEmpty = function() { 
    return top < 0 ? true : false;
  }
}
