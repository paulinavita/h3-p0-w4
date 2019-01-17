function fpb(angka1, angka2) {
    var max = Math.max(angka2,angka1);
    var min = Math.min(angka2,angka1);
    
    for (i = min; i >= 1; i--) {
      if (min%i === 0 && max%i === 0) {
        return i 
      }  
    }
  
  }
  
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1