function highestScore (students) {
    
    arrNama = []
    arrScore = []
   

    outputObj = {};
    for (var i = 0; i < students.length ;i++) {
       
        //jika tidak ada, kita buat cetakan karena negasi
        //jika tdk ada di output obj yang keynya foxes (dari students ke i)
        // buat object dgn key foxes
        if (!outputObj[students[i].class]) { 
            outputObj[students[i].class] = {
                name:  students[i].name,
                //jangan lupa komaaaa! ini harusnya kan bisa sebaris
                score:  students[i].score
            }
        } else {
            if (students[i].score > outputObj[students[i].class].score) {
                outputObj[students[i].class].score = students[i].score
                outputObj[students[i].class].name = students[i].name
            }

        }
    }
    console.log(outputObj, 'sblm loop 2')
}
    
    // for (var j = 0; j < students.length ;j++) {
    //     for (key in outputObj) {
    //         max = students[0].score
    //         if (students[j].score > max) {
    //             max = students[j].score
    //         }
    //     }
    //     outputObj[[students[j].class]] = {
    //         name: students[j].name,
    //         score: max
    //     }
    // }
    // console.log(outputObj)
    // }
    // //perhatikan ya dimana masukin output objeknya,
    
  
  // TEST CASE
  console.log(highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
//   console.log(highestScore([
//     {
//       name: 'Alexander',
//       score: 100,
//       class: 'foxes'
//     },
//     {
//       name: 'Alisa',
//       score: 76,
//       class: 'wolves'
//     },
//     {
//       name: 'Vladimir',
//       score: 92,
//       class: 'foxes'
//     },
//     {
//       name: 'Albert',
//       score: 71,
//       class: 'wolves'
//     },
//     {
//       name: 'Viktor',
//       score: 80,
//       class: 'tigers'
//     }
//   ]));
  
//   // {
//   //   foxes: { name: 'Alexander', score: 100 },
//   //   wolves: { name: 'Alisa', score: 76 },
//   //   tigers: { name: 'Viktor', score: 80 }
//   // }
  
  
//   console.log(highestScore([])); //{}

// looping outputObj 
        // looping student
         // cr max nya di masing masing group