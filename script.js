// Copy CA functionality
function copyCA() {
    const caText = document.getElementById('ca-text-top')?.innerText || document.getElementById('ca-text')?.innerText;

    if (!caText || caText === 'COMING SOON...') {
        // Fun feedback if CA not set
        const box = document.querySelector('.ca-box') || document.querySelector('.top-ca-bar');
        box.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            box.style.animation = '';
        }, 500);
        return;
    }

    navigator.clipboard.writeText(caText).then(() => {
        const hint = document.querySelector('.copy-hint');
        const icon = document.querySelector('.copy-icon');

        if (hint) {
            const originalText = hint.innerText;
            hint.innerText = 'copied! ✓';
            hint.style.color = '#ffd700';
            setTimeout(() => {
                hint.innerText = originalText;
                hint.style.color = '';
            }, 2000);
        }

        if (icon) {
            icon.innerText = '✓';
            setTimeout(() => {
                icon.innerText = '📋';
            }, 2000);
        }
    });
}

// Add shake animation to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Random star positions on load for more organic feel
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.left = Math.random() * 90 + 5 + '%';
        star.style.top = Math.random() * 90 + 5 + '%';
        star.style.fontSize = (Math.random() * 20 + 16) + 'px';
        star.style.animationDelay = Math.random() * 5 + 's';
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const stars = document.querySelectorAll('.star');

    stars.forEach((star, index) => {
        const speed = (index + 1) * 0.1;
        star.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Easter egg - konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join('') === konamiSequence.join('')) {
        document.body.style.animation = 'rainbow 2s linear';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
    }
});

// Rainbow animation
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

console.log('%c$GOYDL', 'font-size: 48px; font-weight: bold; color: #ffd700; text-shadow: 2px 2px 0 #8b6914;');
console.log('%cthe only coin that matters', 'font-size: 16px; color: #888;');
