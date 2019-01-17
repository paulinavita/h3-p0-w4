function urutkanAbjad(str) {
  
    var pecah = []
    for (i = 0; i < str.length ;i++) {
      pecah.push(str[i])
    }
    
    // console.log(pecah)
    for (j = 0; j < pecah.length ;j++) {
      for (k = 0; k < pecah.length ;k++) {
        if (pecah[k] > pecah[j]) {
           temp = pecah[j]
           pecah[j] = pecah[k]
           pecah[k] = temp
        }
      }
    }
    
    var urut = pecah
    // console.log(urut)
    
    var join = ''
    for (l=0; l < urut.length ;l++) {
      join += urut[l]
    }
    return join
    }
    // urut = pecah.sort();
    // akhir = urut.join("")
    // return akhir
    
    
    
    // TEST CASES
    console.log(urutkanAbjad('hello')); // 'ehllo'
    console.log(urutkanAbjad('truncate')); // 'acenrttu'
    console.log(urutkanAbjad('developer')); // 'deeeloprv'
    console.log(urutkanAbjad('software')); // 'aeforstw'
    console.log(urutkanAbjad('aegis')); // 'aegis'
    