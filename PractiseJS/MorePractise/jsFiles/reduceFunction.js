const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

const count = fruitBasket.reduce((tally, fruit) => {
    if (!tally[fruit]) {
      tally[fruit] = 1;
    } else {
      tally[fruit] = tally[fruit] + 1;
    }
    return tally;
  }, {});

count;
