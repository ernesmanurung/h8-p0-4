function angkaPrima(angka){
    var cek = 0;

    for(var i = 1; i <= angka; i++){
      
        if(angka%i === 0 ){
          cek += 1;
        } 
      
    }
    
    if(cek === 2){
        return true;
    } else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false