// password generator

/*
1 chiedere nome
2 chiedere cognome
3 chiedere colore preferito
4 stampare la password
*/

const firstName = prompt('Inserisci il tuo nome')

const lastName = prompt('Inserisci il tuo cognome')

const preferedColor = prompt('Inserisci il tuo colore preferito')

console.log(firstName)

console.log(lastName)

console.log(preferedColor)

const password = firstName + lastName + preferedColor + '22'

console.log(password)

document.getElementById('__password').innerHTML = password
