var a = prompt('przypisz a'),
	b = 0,
	value = (a*a) + (2 * a * b) - (b*b);

console.log('wynik to: ' + value);

if (value > 0) {
	console.log('Wynik dodatni')
} else if (value < 0) {
	console.log('Wynik ujemny')
} 

switch (value) {
	case 0:
	alert('value wynosi 0')
}