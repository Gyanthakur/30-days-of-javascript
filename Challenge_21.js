async function apply(arr, fn) {
	let result = [];
	for (let element of arr) {
		result.push(await fn(element));
	}
	return result;
}
async function double(num) {
	let temp = (await num) * 2;
	return temp;
}
async function main() {
	let arr = [1, 2, 3, 4];
	arr = await apply(arr, double);
	console.log(arr);
}
main();
