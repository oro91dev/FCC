function repeatStringNumTimes(str, num) {
  // repeat after me
  var final = "";
  
  if(num < 0){
    return "";
  }
  else{
    for(var i = 0; i < num; i++){
      final += str;
    }
  }
  return final;
}

repeatStringNumTimes("abc", 3);