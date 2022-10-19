const date = new Date();
const day = date.getDay();
const message = document.querySelector('#welcome');

if (day == 1 || day == 2) {
    message.textContent = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
}
else {
    message.remove();
}