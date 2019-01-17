function countProfit(shoppers) {

    let listBarang =  [ ['Sepatu Stacattu', 1500000, 10],
                    ['Baju Zoro', 500000, 2],
                    ['Sweater Uniklooh', 175000, 1]
                  ];

    for (var i = 0; i < listBarang.length ;i++) {
        counterBarang = listBarang[i][2]
        for (var j = 0; j < shoppers.length ;j++) {
            if (shoppers[j][1] === listBarang[i][0]) {
                console.log(listBarang[i][0])
                counterBarang = counterBarang - shoppers[j][2]
            }    
        }
    }
    }

console.log(countProfit( [
    ['Windi', 'Sepatu Stacattu', 8], 
    ['Vanessa', 'Sepatu Stacattu', 10],
    ['Rani', 'Sweater Uniklooh', 1],
    ['Devi', 'Baju Zoro', 1], 
    ['Lisa', 'Baju Zoro', 1]
    
    ]))