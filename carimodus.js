function cariModus(arr) {
//sorting awal
temp = ''
    for (i = 0; i < arr.length ;i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        } 
    }


//finding duplicates
    noDuplicates = []
    for (k = 0; k < arr.length; k++) {
        if (arr[k+1] !== arr[k]) {
            noDuplicates.push(arr[k])
        }
    }


// finding num of appearance of the elements

// console.log(arr, '==> hasil sort')
// console.log(noDuplicates, '==> buang duplicate') //ini dibuat biar jd kek dictionarynya gitu
// nanti di push ke sini. bukan ke sini sih klo nilainya sama, dia di push ke temp palsu

temp = []
arrTotal = []

    for (l = 0; l < noDuplicates.length; l++) {
        counter = 0
        for (m = 0; m < arr.length; m++) { 
            if (noDuplicates[l] == arr[m]) {
                counter +=1
            }
    }
    temp.push(counter)
}
console.log(temp, '==> arr temp; check number of appearance')

// finding max


    var max = temp[0]
    var idx = 0
    for (n = 0; n < temp.length; n++) {
        if (temp[n] > max) {
            max = temp[n]
            idx = n //biar ngga usah di minus satu karena ditaruh dlm sini gak kena loop lagi increment
        }
    }
//looping dari yang paling spesifik
if (temp.length == 1) {
    return -1
}
if (temp.length !== 1) {
    for (p = 0; p < temp.length - 1 ;p++) {
    if (temp[p] === temp[p+1]){} return - 1
    else return arr[idx]
    }



 }  

// console.log('==> nilai max muncul di duplicate ke', max)
// console.log(arr[idx], '==> ini jwbannya')





// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

//kalo mulainya dari j = i
// var temp = '';
// // sort the array 
//   for (var i = 0; i < arr.length; i++) {
//     console.log('')
//     console.log('before')
//     console.log(arr)
//     for (var j = i; j < arr.length; j++) {
//       if (arr[j + 1] < arr[i]) {
//         temp = arr [i];
//         arr[i] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     console.log('after')
//     console.log(arr)
//     console.log('----------------')
//   }