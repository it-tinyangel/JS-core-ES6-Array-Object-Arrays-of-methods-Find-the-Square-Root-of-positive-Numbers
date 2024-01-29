let arr = [1, -2, 3, 0, 4, -5, 6, -11];
let positiveNumbers, result;

/* Method filter and map */
positiveNumbers = arr.filter(num => num > 0);
result = positiveNumbers.map(num => Math.sqrt(num));

console.log('Method filter and map:', result);

/* Method forEach */
result = [];

arr.forEach(num => (num > 0 ? result.push(Math.sqrt(num)) : false));

console.log('Method forEach:', result);

/* Method filter and forEach */
result = [];

positiveNumbers = arr.filter(num => num > 0);
positiveNumbers.forEach(num => {
	result.push(Math.sqrt(num));
});

console.log('Method filter and forEach:', result);

/* Method map and forEach */
result = arr.map(number => {
	return number > 0 ? Math.sqrt(number) : null;
});

result = result.filter(result => result !== null);

console.log('Method map and forEach:', result);
