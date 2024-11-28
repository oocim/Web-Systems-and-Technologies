const socialIcons = document.querySelectorAll('.social-links img');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            icon.style.transform = 'scale(1)';
        }, 200);
    });
});


const profileIcon = document.querySelector('.profile-icon');
const modal = document.createElement('div');
modal.innerHTML = `
    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); display: flex; justify-content: center; align-items: center; z-index: 1000;">
        <img src="assets/profile.jpg" alt="Profile" style="max-width: 90%; max-height: 90%; border-radius: 10px;">
    </div>
`;
modal.style.display = 'none';
document.body.appendChild(modal);

profileIcon.addEventListener('click', () => {
    modal.style.display = 'flex';
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

const githubButton = document.querySelector('.btn');
githubButton.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    ripple.classList.add('ripple');
    this.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});

const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Act as if what you do makes a difference. It does.",
    "The best way to predict the future is to create it.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Doubt kills more dreams than failure ever will.",
    "Dream big and dare to fail.",
    "The only way to do great work is to love what you do.",
    "You are never too old to set another goal or to dream a new dream.",
    "Opportunities don't happen. You create them.",
    "Your time is limited, so don't waste it living someone else's life.",
    "Start where you are. Use what you have. Do what you can.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The way to get started is to quit talking and begin doing.",
    "Perseverance is not a long race; it is many short races one after the other.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "If you want to achieve greatness stop asking for permission.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Don’t let yesterday take up too much of today.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "You don't have to be great to start, but you have to start to be great.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
    "If you want to go fast, go alone. If you want to go far, go together."
];


function displayRandomQuote() {
    const quoteContainer = document.getElementById('quote-container');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteContainer.textContent = randomQuote;
}

window.onload = displayRandomQuote;
