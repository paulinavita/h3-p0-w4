function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    // bentuk kosong : [ {[->nama:],[->naik:],[->tuj:],[->bay:]}]
    
    var toShow = []
    var harga = 2000
    for (var i=0; i < arrPenumpang.length ;i++) {
        // console.log(arrPenumpang[i])
        // console.log(arrPenumpang[i][0])
        var jarakTujuan = 0
        var jarakAwal = 0

        angkotList = {}
        angkotList.penumpang = arrPenumpang[i][0]
        angkotList.naikDari = arrPenumpang[i][1]
        angkotList.tujuan = arrPenumpang[i][2]

        for (j = 0; j < rute.length ;j++) {
            // cek buat naik dari
            if (rute[j] === arrPenumpang[i][1]) {
                jarakAwal += j
                // cek buat tujuan
            } else if (rute[j] == arrPenumpang[i][2]) {
                jarakTujuan += j
            }
        }
        var selisih = jarakTujuan - jarakAwal
        angkotList.bayar = selisih * harga
        toShow.push(angkotList)
        }
    return toShow
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //