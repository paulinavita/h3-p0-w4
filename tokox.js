function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    var shoppingRes = []
    for (var i=0; i < listBarang.length ;i++) {
        shoppingCart = {};
        shoppingCart.product = listBarang[i][0]
        var arrBuyer = []
        var counterBarang = listBarang[i][2]
        // var tempProfit = 0
        for (var j = 0; j < shoppers.length ;j++) {
            if (shoppers[j].product === listBarang[i][0]) {
                arrBuyer.push(shoppers[j].name)
                // console.log(listBarang[i][0], 'nilai j adalah', j)
                if (counterBarang - shoppers[j].amount > 0) {
                    counterBarang = counterBarang - shoppers[j].amount
                    shoppingCart.leftOver = counterBarang
                } else if (counterBarang - shoppers[j].amount < 0) {
                    shoppingCart.leftOver = listBarang[i][2]
                } else {
                    counterBarang = counterBarang - shoppers[j].amount
                }
            }
        
        } 
        shoppingCart.shoppers = arrBuyer
        shoppingCart.leftOver = counterBarang
        tempProfit = (listBarang[i][2]-shoppingCart.leftOver) * listBarang[i][1]
        shoppingCart.totalProfit = tempProfit
        
        shoppingRes.push(shoppingCart)
    }
    return shoppingRes

}


  
  // TEST CASES
  console.log(  countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2},  {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},  {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: ['Rani'],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
//   console.log(countProfit([])); //[]