let month = prompt('Enter number of month: ');
month = Number(month);
if (month === 12 || month === 1 || month === 2) {
    console.log('Winter');
} else if (month === 3 || month === 4 || month === 5) {
    console.log('Spring');
} else if (month === 6 || month === 7 || month === 8) {
    console.log('Summer');
} else if (month === 9 || month === 10 || month === 11) {
    console.log('Autumn');
}