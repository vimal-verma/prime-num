module.exports.primes = max =>
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


  module.exports.primebtw =(a , b) =>
{
    var min=( a>b ? b : a );
    var max=( a>b ? a : b );



    var storea  = [], i, j, primea = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!storea [i]) 
          {
            primea.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                storea[j] = true;
            }
        }
    }
    
    var storeb  = [], i, j, primeb = [];
    for (i = 2; i <= min; ++i) 
    {
        if (!storeb [i]) 
          {
            primeb.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                storeb[j] = true;
            }
        }
    }

    primea.splice(0, primeb.length);

    
    return primea;
    
};


module.exports.primebl =(a , b) =>
{
    var min=( a>b ? b : a );
    var max=( a>b ? a : b );



    var storea  = [], i, j, primea = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!storea [i]) 
          {
            primea.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                storea[j] = true;
            }
        }
    }
    
    var storeb  = [], i, j, primeb = [];
    for (i = 2; i <= min; ++i) 
    {
        if (!storeb [i]) 
          {
            primeb.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                storeb[j] = true;
            }
        }
    }

    primea.splice(0, primeb.length);

    
    return primea.length;
    
};