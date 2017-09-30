function Program() {}

Program.prototype.myFunc = function(str,num) {
    if (str.length > num && num > 3) {
        return str.slice(0, (num - 3)) + '...';
      } else if (str.length > num && num <= 3) {
        return str.slice(0, num) + '...';
      } else {
        return str;
      }
};