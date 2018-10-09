function fpb(angka1, angka2){
    var hasil = 0;

    for(var i =1; i < angka1; i++){

        if(angka1 % i === 0 && angka2 % i === 0){
            hasil = i;
        }

    }
    return hasil;
}
console.log(fpb(22,33));