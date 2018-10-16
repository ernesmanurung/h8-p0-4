function changeMe(arr) {
    var output = {};
    for(var i =0; i < arr.length; i++){
        output.firstName = arr[i][0];
        output.lastName = arr[i][1];
        output.gender = arr[i][2];
        output.age = arr[i][3];
        
        var umur;
        
        if(arr[i][3] < 2018){
            umur = 2018 - arr[i][3];
            output.age = umur;

        } else{
            umur = 'Invalide Birth Year';
        }

        console.log([i+1] +'. ' + arr[i][0] +' ' + arr [i][1] + ':');
        console.log(output);
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe(['Erns']); // ""