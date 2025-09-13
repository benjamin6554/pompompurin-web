document.addEventListener("DOMContentLoaded", () => {
    const talkBtn = document.getElementById("talkBtn");
    const talkText = document.getElementById("talkText");

    // Frases random de Pompompurin 🐶
    const frases = [
        "¡Hola! Soy Pompompurin 🐾",
        "¿Quieres un poco de pudín? 🍮",
        "Hoy me siento muy feliz 🌟",
        "¡Vamos a jugar juntos! 🎮",
        "Me gusta dormir mucho... 😴",
        "Eres mi mejor amigo 💛",
        "¿Sabías que siempre uso mi gorrito marrón? 🎩",
        "Me encanta pasear con mis amigos 🐕",
        "¡Sonríe siempre, la vida es dulce! 😊",
        "¿Jugamos a las escondidas? 🙈",
        "Tengo hambre… ¿me invitas algo rico? 🍪",
        "¡Qué lindo día para ser feliz! 🌞",
        "Eres genial, gracias por visitarme 💕",
        "¡Amo a todos mis amigos! 🌸",
        "Un abrazo de Pompompurin para ti 🤗"
    ];

    talkBtn.addEventListener("click", () => {
        // Seleccionar una frase al azar
        const randomFrase = frases[Math.floor(Math.random() * frases.length)];
        talkText.textContent = randomFrase;
    });
});
