import { config } from '/config.js';

// Add some interactivity to the eye logo
document.addEventListener('DOMContentLoaded', () => {
    const eyePupil = document.querySelector('.eye-pupil');
    const eyeInner = document.querySelector('.eye-inner');
    
    // Make the eye follow the cursor
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const eyeRect = eyePupil.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        
        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
        const distance = Math.min(5, Math.sqrt(Math.pow(mouseX - eyeCenterX, 2) + Math.pow(mouseY - eyeCenterY, 2)) / 20);
        
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        
        eyePupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // Add a blink animation occasionally
    setInterval(() => {
        eyeInner.style.transform = 'scaleY(0.1)';
        setTimeout(() => {
            eyeInner.style.transform = 'scaleY(1)';
        }, 150);
    }, config.blinkInterval);
});

