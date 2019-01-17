function shoppingTime(memberId, money) {
    saleLists = [ 
        ['sepatu stacattu', 1500000],
        ['baju zoro', 500000],
        ['baju H&N', 250000],
        ['sweater uniklooh', 175000],
        ['casing handphone', 50000]
        ]  

    printLists = {}
    
    if (memberId == '') {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    } else if (memberId == '' && money == '') {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    if (memberId !== '') { 
        printLists.memberId = memberId
    } 
    if (money < saleLists[4][1]) {
        return 'Mohon maaf, uang tidak cukup'
    } else if (money !== '') {
        printLists.money = money
    }

    
    if (money !== 0) {
        printLists.money = money
        var items = [] //array pembantu
        for (i = 0; i < saleLists.length ;i++) {
            if (money >= saleLists[i][1]) {
                items.push(saleLists[i][0])
                money = money - saleLists[i][1]
            }
            printLists.listPurchased = items
            printLists.changeMoney = money
        }
    }
    return printLists
 
}
    
    


    

  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
//   console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
//   console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
//   console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja