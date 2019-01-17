function cariModus(arr) {

    var outputMode = {}
    for (var i = 0; i < arr.length ;i++) {
        if (!outputMode[arr[i]]) {
            outputMode[arr[i]] = 1
        } else {
            outputMode[arr[i]] += 1
        }
    }
    var max = 0
    var number = 0
    for (key in outputMode) {
        if (outputMode[key] > max) {
            max = outputMode[key]
            number = key
        } else if (outputMode[key] === 1) {
            
        }
    }
    // console.log(max)
    console.log(number)
    console.log(outputMode)
   
}
        
    

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
