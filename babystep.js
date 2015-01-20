
var numbers = process.argv.slice(2);
var sum = 0, 
	i = 2,
	output = [];

for( i ; i < process.argv.length; i++){
	sum += Number(process.argv[i]);
}
output[0] = process.argv[0];
output[1] = process.argv[1];
output[2] = sum;

//console.log('sum: ' + sum);

//console.log('numbers: ' + numbers);

console.log(sum);