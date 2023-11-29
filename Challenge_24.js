function debounce(func, delay) {
	let timer;
	return function (...args) {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			func(...args);
		}, delay);
	};
}

const debouncedFunction = debounce(() => {
	console.log("Function called!");
}, 1000);

debouncedFunction();

debouncedFunction();

setTimeout(() => {
	console.log("Function called!");
}, 1100);
