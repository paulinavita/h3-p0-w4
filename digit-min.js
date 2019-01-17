function digitPerkalianMinimum(angka) {
    var temp = []
    for (var i = 0; i <= angka ;i++) {
        for (var j = angka; j >= 0 ;j--) {
            if (i * j == angka ) {
                temp.push(String(i) + String(j))
            }
        }
    }
// find min length
var min = temp[0].length
    for (var k = 0; k < temp.length ;k++) {
        if (temp[k].length < min) {
            min = temp[k].length
        }
    }
    return min
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2