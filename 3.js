let = number = prompt('Enter a number: ');
number = Number(number);
if (number === 0) {
    console.log('Zero');
} else if (number < 0) {
    console.log('Negative');
} else if (number > 0) {
    console.log('Positive');
}