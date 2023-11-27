function deepEqual(obj1, obj2) {
	if (typeof obj1 !== typeof obj2) {
		return false;
	}

	if (obj1 === null || obj2 === null) {
		return obj1 === obj2;
	}

	if (typeof obj1 !== "object" || typeof obj2 !== "object") {
		return obj1 === obj2;
	}

	if (Array.isArray(obj1)) {
		if (!Array.isArray(obj2)) {
			return false;
		}

		if (obj1.length !== obj2.length) {
			return false;
		}

		for (let i = 0; i < obj1.length; i++) {
			if (!deepEqual(obj1[i], obj2[i])) {
				return false;
			}
		}

		return true;
	} else if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		return false;
	}

	for (const key in obj1) {
		if (!deepEqual(obj1[key], obj2[key])) {
			return false;
		}
	}

	return true;
}
const obj1 = { a: 1, b: { c: 3 } };
const obj2 = { a: 1, b: { c: 3 } };

console.log(deepEqual(obj1, obj2));
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(deepEqual(arr1, arr2));
const obj3 = { a: 1, b: 2 };
const obj4 = { a: 1, c: 3 };

console.log(deepEqual(obj3, obj4));
