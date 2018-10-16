function changeVocals (str) {
    //code di sini
    var alfabet = '';
    var vocals = [
        ['a', 'b'],
        ['e', 'f'],
        ['i', 'j'],
        ['o', 'p'],
        ['u', 'v'],
        ['A', 'B'],
        ['E', 'F'],
        ['I', 'J'],
        ['O', 'P'],
        ['U', 'V'],
    ];
    cek = false
    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < vocals.length; j++){
            if(str[i] === vocals[j][0]){
                alfabet = alfabet + vocals[j][1];
                cek= true;
            }
        }
        if(!cek){
            alfabet = alfabet + str[i];
        } 
        cek = false;
    }
    return alfabet;
  }
  
  function reverseWord (str) {
    //code di sini
    var newAlfabet = '';
    for(var k = str.length -1; k >=0; k--){
        newAlfabet = newAlfabet + str[k];
    }
    return newAlfabet;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var ubah = '';
    for(var l = 0; l < str.length; l++){
        if(str[l] == str[l].toUpperCase()){
        ubah = ubah + str[l].toLowerCase()
        } else {
            ubah = ubah + str[l].toUpperCase();
        }
    }
    return ubah;
  }
  
  function removeSpaces (str) {
    //code di sini
    var hapusSpasi = '';
    for(var m = 0; m < str.length; m++){
        if(str[m] === ' '){
            hapusSpasi = hapusSpasi + '';
        } else {
            hapusSpasi = hapusSpasi + str[m];
        }
    }
    return hapusSpasi;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var alfabets = changeVocals(name);
    var reverse = reverseWord(alfabets);
    var LowUp = setLowerUpperCase(reverse);
    var remove = removeSpaces(LowUp);
    return remove;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'