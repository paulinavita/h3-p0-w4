function cariModus(arr) {

    var temp = []
    var counter = 0
    for (i=0; i < arr.length ;i++) {
        var check = true
        for (j=0 ; j < temp.length ; j++) {
            if (arr[i] === temp[j][0]) {
                check = false
            } 
        }
        if (check === true)
        temp.push(counter ++)
    }
    console.log(temp)
}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
