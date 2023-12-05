function throttle(fn, delay) {
    let lastCallTime = 0;
  
    return function(...args) {
      const now = Date.now();
      const timeSinceLastCall = now - lastCallTime;
  
      if (timeSinceLastCall >= delay) {
        fn(...args);
        lastCallTime = now;
      }
    };
  }
  
  const fn = () => {
    console.log('Function called!');
  };
  
  const throttledFn = throttle(fn, 1000); 
  
  throttledFn();
  throttledFn();
  throttledFn();
  