
function titleCase(str) {
  
  // splitting the words
  var myarr = str.split(" ");
  
  // looping throug the array of strings, give the first character a uppercase and second letter and up
  //slice all the other letters to lowercase
  for(var i=0; i<myarr.length; i++){
    var placeHolder = myarr[i];
    var upLetter = placeHolder.charAt(0).toUpperCase();
    placeHolder= placeHolder.slice(1,placeHolder.length).toLowerCase();
    myarr[i] = upLetter.concat(placeHolder);
  }
  //Joining all the strings to one
  str = myarr.join(' ');
  return str;
}

titleCase("I'm a little tea pot");