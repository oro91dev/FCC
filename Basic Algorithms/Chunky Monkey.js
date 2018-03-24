function chunkArrayInGroups(arr, size) {
  // Break it up.
  var groups = [];
  while (arr.length > 0 ) {
    groups.push(arr.splice(0, size));    //or slice
   // arr = arr.slice(size); 
  }
  return groups;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);