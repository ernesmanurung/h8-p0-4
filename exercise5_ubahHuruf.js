function ubahHuruf(kata){
  var alfabet = 'abcdefghijklmnopqrstuvwxyz'
  var result = [];

  for(var i = 0; i < kata.length; i+=1){
    result.push(alfabet[alfabet.indexOf(kata[i]) + 1]);
  }
  return result.join('');
}

//   for(var i = 0; i < kata.length; i++){
//     if(kata[i] === "a"){
//       result = result + "b";
//     } else if(kata[i] === "c") {
//       result = result + "d";
//     } else if(kata[i] === "k"){
//       result = result + "l";
//     } else if(kata[i] === "z"){
//       result = result + "a";
//     } else {
//       result = result + kata[i];
//     }
//   }
//   return result;
// }

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu