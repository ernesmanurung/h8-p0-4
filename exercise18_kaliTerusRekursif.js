function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var str = String(angka);
    if(str.length == 1){
        return angka;
    } else {
        var output = 1;
        for(var i = 0; i < str.length; i++){
            output = output * str[i];
        }
        return kaliTerusRekursif(output);
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6