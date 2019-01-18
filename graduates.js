/*
1. jika di penampung belum ada key yang sesuai output buat dulu
2. jika sudah ada, masukkan nilainya smp lengkap dulu
3. dicek, jika nilainya diatas 75 berarti itu yang kita push
4. masukkan ke objek final
*/

function graduates (students) {
    
    if (students.length === 0) {
      return {}
    } 

    var outputObj = {}
    for (var i = 0; i < students.length ;i++) {
        if (!outputObj[students[i].class]) {
            outputObj[students[i].class] = [] 
        }
        if (students[i].score > 75) {
            var tempObj = {}
            tempObj.name = students[i].name
            tempObj.score= students[i].score
            outputObj[students[i].class].push(tempObj)
        }
        
    }
    return outputObj
    
}
    


  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}