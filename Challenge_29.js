function raceWithTimeout(promises, timeout) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => reject(new Error('Timeout')), timeout);
  
      promises.forEach((promise) => {
        promise.then(
          (value) => {
            clearTimeout(timeoutId);
            resolve(value);
          },
          (error) => {
            clearTimeout(timeoutId);
            reject(error);
          }
        );
      });
    });
  }
  const promise1 = Promise.resolve(3);
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 1000);
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Error!')), 500);
  });
  // done 29 challenge
  raceWithTimeout([promise1, promise2, promise3], 700)
    .then((value) => {
      console.log('The first promise to resolve was:', value);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    