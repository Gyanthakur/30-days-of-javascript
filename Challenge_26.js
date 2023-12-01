function calculateTotal(numbers) {
	const filteredNumbers = numbers.filter((number) => number % 2 !== 0);

	const squaredNumbers = filteredNumbers.map((number) => number * number);

	const total = squaredNumbers.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);

	return total;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = calculateTotal(numbers);

console.log(total);
