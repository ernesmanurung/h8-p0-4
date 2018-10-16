function hitungHuruf(kata){
    var str = kata.toLowerCase();
    var arr = kata.split(' ');
    var count = 0;
    var kata;

    for (var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            var countNew = 0;

            for(var k = 0; k < arr[i].length; k++){
                if(arr[i][j] === arr[i][k]){
                    countNew++;
                    if(countNew > count){
                        count = countNew;
                        kata = arr[i];
                    }
                }
            }
        }
    }
    return kata;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau