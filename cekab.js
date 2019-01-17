function checkAB(str) {
  
  // for (i = 0; i < str.length ;i++) {
  //   if (str[i] === 'a' && str[i+4] === 'b') {
  //     return true
  //   } else if (str[i] === 'b' && str[i+4] === 'a') {
  //     return true
  //   }
  // }
  //  return false
  // }

  var arrA = []
  var arrB = []
  for (i = 0; i < str.length ;i++) {
    if (str[i] === 'a') {
    arrA.push(i)
    } else if (str[i] === 'b') {
      arrB.push(i)
    }
  }
  
  for (j =0; j < arrA.length ;j++ ){
    for (k = 0; k < arrB.length; k++) {
      if (Math.abs(arrA[j] - arrB[k] === 4) || Math.abs(arrB[k] - arrA[j] === 4)) {
        return true
      }
    }
  }
  return false
}



// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false