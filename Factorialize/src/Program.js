function Program() {}

Program.prototype.myFunc = function(num) {
    if (num === 0){
        return 1;
      }
      
      return num * Program.prototype.myFunc(num-1);    
};