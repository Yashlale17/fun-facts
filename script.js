const facts = [
    "I am 20 years old and have a deep passion for exploring mountainous regions.",
    "I have visited several mountain ranges and each trip fuels my love for nature.",
    "I enjoy hiking and often spend weekends trekking through mountain trails.",
    "The serenity and beauty of mountains inspire me to capture breathtaking photographs.",
    "I dream of climbing some of the world's highest peaks and experiencing their majestic views."
];

document.getElementById('generate-fact').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});
