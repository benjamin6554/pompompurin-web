const talkBtn = document.getElementById('talkBtn');
const talkText = document.getElementById('talkText');

const messages = [
    "¡Hola! Soy Pompompurin 🐶",
    "¡Me encanta dormir y comer pudín! 🍮",
    "¡Vamos a divertirnos juntos! 🎉",
    "¡Guau guau! 🐾",
    "¡Eres mi amigo favorito! 💛",
    "¡Hora de abrazos virtuales! 🤗"
];

talkBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    talkText.textContent = messages[randomIndex];
});
