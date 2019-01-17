function convertString(string,num) {

   
    for (var i=0; i < string.length ;i++) {
        var temp = ''
        if (i % (num + 1) === 0) {
            console.log(string[i])
        }
        else if (i == 1) {
            for (var j = 0; j < num;j++)
            temp += string[i+j]
            console.log(temp)
        }
        else if (i == 4) {
            console.log(string[i])
        }
       else if (i == 5) {
        console.log(string[i])
       }
       else if (i == 6) {
            for (var k = 0; k < num; k++)
            temp += string[i+k]
            console.log(temp)
       }
       else if (i == 8) {
             console.log(string[i])
       }
       else if (i == 11) {
            for (var l = 0; l < num; l++)
            temp += string[i+l]
            console.log(temp)
       }
    } 
}





var string = 'boldfox'
var num = 2
convertString(string,num) 