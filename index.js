module.exports.primeupto = max =>
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
};

module.exports.primelength = max =>
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes.length;
};


module.exports.isPrime = num =>{
    if (num == 2) {
      return true;
    }
    else if(num > 2){
      let flag = false;
      for (var i = 2;  i < num; i++) {
  
        if (num % i == 0 ) {
          return false;
        }
        else {
          flag = true;
        }
      }
      if(flag == true){
          return true;
      }
    }
    else {
      return false;
    }
  }