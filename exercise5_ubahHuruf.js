function ubahHuruf(kata) {
  // you can only write your code here!
  var abjad =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var output='';

  for (var i=0; i<kata.length;i++){
    var posisiHuruf= abjad.indexOf(kata[i]);
    var posisiBaru = posisiHuruf + 1 ;
    var hurufBaru = abjad[posisiBaru];
    output = output + hurufBaru;
  }
  return hasil;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu