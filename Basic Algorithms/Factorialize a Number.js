function factorialize(num) {
  var facNum = 1;
  
  for(i=1; i <=num; i++){
    facNum *= i;
  }
  
  return facNum;
}

factorialize(5);