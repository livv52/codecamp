function Program() {}

Program.prototype.myFunc = function(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    console.log("cele");
    if(reverseStr === lowRegStr){
      return true;
    }
    else{
      return false;
    }
};