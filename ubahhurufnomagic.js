function ubahHuruf(kata) {
    alph = 'abcdefhgijklmnopqrstuvwxyz'
  
  var tampung = ''
  
    for (i = 0; i < kata.length ;i++){ //diloop sepanjang kata biar ga kebalik
        for (j = 0; j <  alph.length ;j++) {
            if (kata[i] === alph[j]) {
                tampung += alph[(j+1)%26]
            }
        } 
        
     }
  return tampung  
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  