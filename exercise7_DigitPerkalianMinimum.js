function digitPerkalianMinimum(angka) {
    var output = [];
    var arr = [];
    var string = '';
    var temp = 0;
    
    for (var i = 1; i <= angka; i++) {
      output = angka / i;
      string = output.toString() + i.toString();
      if (output % 1 === 0) {
        arr.push(string);
           
        if (temp === 0) {
          temp = string.length;
        } else {
          if (temp > string.length) {
            temp = string.length;
          }
        }
      }
    }
    return temp;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2


