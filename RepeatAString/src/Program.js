function Program() {}

Program.prototype.myFunc = function(str, num) {
    var news = '';
    if( num < 0){
        return "";
      }
      else{
        for (var i = 0; i < num; i++){
            news = news +str; 
           
        }
        return news; 
      }
      
};