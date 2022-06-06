const main = document.querySelector('.main');
const lorem = document.createElement('h5');

lorem.textContent ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";




lorem.style.color = 'black',
lorem.style.border = '1px solid red',
lorem.style.borderRadius = '5px',
lorem.style.width = '40%',
lorem.style.margin = 'auto'
lorem.style.padding = '1%';

const ul = document.createElement('ul');

const intocode = document.createElement('a')
const google = document.createElement('a')
const instagram = document.createElement('a')

intocode.textContent = ('Intocode')
intocode.href = 'https://intocode.ru'

google.textContent = ('Google')
google.href = 'https://www.google.ru/'

instagram.textContent = ('Instagram')
instagram.href = 'https://www.instagram.com/'

ul.append(intocode, google, instagram)
ul.style.margin = 'auto'
ul.style.width = '40%'
ul.style.justifyContent = 'space-between'
ul.style.display = 'flex'
ul.style.padding = '0'
ul.style.marginTop = '1%'


main.append(lorem, ul)