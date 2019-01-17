function changeMe(arr) {
    
    if (arr.length === 0) {
        console.log("''")
    }
    
    for (i =0; i < arr.length ;i++) {
        console.log(i+1 +'. ' + arr[i][0] + ' ' + arr[i][1])
        var identity = {}
        identity.firstName = (arr[i][0])
        identity.lastName = (arr[i][1])
        identity.gender = (arr[i][2])
        if (arr[i][3] == undefined || 2019 - arr[i][3]  < 0) {
            identity.age = 'Invalid Birth Year'
        } else {
            identity.age = 2019 - arr[i][3]
        }
        console.log(identity) // sebetulnya nggak ngerti sih kenapa disini?
    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 
//   1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""

      
        