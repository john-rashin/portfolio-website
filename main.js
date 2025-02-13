document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slide-track');
    const slides = Array.from(slider.children);
    const totalSlides = slides.length;

    // Clone slides for seamless effect
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slider.appendChild(clone);
    });

    let scrollAmount = 0;
    const slideWidth = slides[0].offsetWidth + 10; // Adjust for gap

    function scrollSlider() {
        scrollAmount += 1;
        if (scrollAmount >= slideWidth * totalSlides) {
            scrollAmount = 0;
        }
        slider.style.transform = `translateX(-${scrollAmount}px)`;
        requestAnimationFrame(scrollSlider);
    }

    scrollSlider();

    // Typing effect for hero section
    const nameSpan = document.querySelector('.hero_text .name');
    const highlightText = document.querySelector('.hero_text .highlight');
    const nameText = nameSpan.textContent;
    const highlightMessage = highlightText.textContent;
    nameSpan.textContent = '';
    highlightText.textContent = '';
    let charIndex = 0;
    let isTypingName = true;

    function typeEffect() {
        if (isTypingName) {
            if (charIndex < nameText.length) {
                nameSpan.textContent += nameText.charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, 150); // Adjust typing speed here
            } else {
                isTypingName = false;
                charIndex = 0;
                setTimeout(typeEffect, 500); // Pause before typing highlight message
            }
        } else {
            if (charIndex < highlightMessage.length) {
                highlightText.textContent += highlightMessage.charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, 150); // Adjust typing speed here
            } else {
                setTimeout(() => {
                    nameSpan.textContent = ''; // Clear name text
                    highlightText.textContent = ''; // Clear highlight text
                    charIndex = 0;
                    isTypingName = true; // Loop back to typing name
                    setTimeout(typeEffect, 500); // Pause before typing name again
                }, 2000); // Pause before clearing highlight message
            }
        }
    }

    typeEffect();
});
