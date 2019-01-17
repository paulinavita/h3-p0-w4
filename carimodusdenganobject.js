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
    var objLength = 0
    for (key in outputMode) {
        objLength += 1
        if (outputMode[key] > max) {
            max = outputMode[key]
            number = key
        }
    }
    // console.log(max)
    if ( max === 1) {
        return - 1
    } else if (objLength === 1) {
        return -1
    } else return number
        
        console.log(number)
        console.log('-------')
        // console.log(outputMode)
       
    }

        
    

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
