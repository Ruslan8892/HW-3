let degree = prompt('Enter the degree of angle: ');
degree = Number(degree);
if (degree > 0 && degree < 90) {
    console.log('Acute angle');
} else if (degree > 90 && degree < 180) {
    console.log('Obtuse angle');
} 