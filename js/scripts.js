var a = prompt('przypisz a'),
	b = 2,
	value = (a*a) + (2 * a * b) - (b*b);

console.log('wynik to: ' + value);


if (value > 0 ) {
	console.log('Wynik dodatni')
} else if (value < 0) {
	console.log('Wynik ujemny')
}

switch (value = 0) {
	case 'value = 0':
	console.log('(a * a) + ( 2 * a * b) - (b * b) = 0')
	alert('Wynik ' + value)
}