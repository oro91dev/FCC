function palindrome(str) {
  // Good luck!
  //change to lowercase no case sensitive
  str = str.toLowerCase();
  
  //for loop to replace special characters to replace special characters
  for(var i=0; i < str.length; i++){
    str = str.replace(',', '');
    str = str.replace('.', '');
    str = str.replace(' ', '');
    str = str.replace('_', '');
    str = str.replace('(','');
    str = str.replace(')','');
    str = str.replace('-','');
    str = str.replace('/','');
  }
  //reverse our string
  var myCode = str.split('').reverse().join('');
  
  //a check if-statement for if the myCode value reversed is identic to str value
  if(myCode==str){
    return true;
  }
  else{
    return false;
  }
  return str;
}



palindrome("0_0 (: /-\ :) 0-0");