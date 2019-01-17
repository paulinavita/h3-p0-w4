function ubahHuruf(kata) {
    alph = 'abcdefhgijklmnopqrstuvwxyz'
  
  var tampung = ''
  
    for (i = 0; i < kata.length ;i++){
       awal = alph.indexOf(kata[i]);
       hasil = (awal + 1);
       akhir = alph[hasil];
       tampung += akhir;
      }
  return tampung     
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  
  // 1. cek huruf indkes 1 di wow = w, save w
  // 2. indekx of alpha yg sm dengan w
  // 3. dapet angkanya ke brp, di + 1
  // 4. balikin lagi ke alfpbet, indekx ke (no.3+1) nya aplh
  // 5. masukin ke hasil