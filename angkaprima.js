function angkaPrima(angka) {
    
    

    for (i =2; i < angka ;i++) {
        if (angka%i == 0) {
            return false
        } 
    }
    return true //dia ngereturn true nya di akhir karena kalo udah selesai bgt loop baru bs blg dia true, gak bisa masuk ke kondisi else
}


  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false



// console.log(hasil)
// console.log(Number.isInteger(hasil[0]), '==> 1st')
// console.log(Number.isInteger(hasil[angka]), '==> last')
//     if (Number.isInteger(arr[j] == true)) {
    //         res = false
    //     }
    //     else {
    //         res = true
    //     }
