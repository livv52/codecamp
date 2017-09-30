function Program() {}

Program.prototype.myFunc = function(str,target) {
    var newstring = str.substring(str.length - target.length);
    if (newstring === target){
      return true;
    }
    else{
      return false;
    }
    
};