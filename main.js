document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.querySelector(".typing-text");

    if (typingText) {
        const nameText = "Hi, I'm John Rashin Lomoya";
        const highlightText = "Aspiring Software Engineer";
        let charIndex = 0;
        let isDeleting = false;
        let isTypingName = true;

        function typeEffect() {
            if (!isDeleting) {
                if (isTypingName && charIndex < nameText.length) {
                    typingText.textContent += nameText.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeEffect, 150);
                } else if (!isTypingName && charIndex < highlightText.length) {
                    typingText.textContent += highlightText.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeEffect, 150);
                } else {
                    // Pause before deleting
                    setTimeout(() => {
                        isDeleting = true;
                        setTimeout(typeEffect, 500);
                    }, 1000);
                }
            } else {
                // Backspace effect
                if (charIndex > 0) {
                    typingText.textContent = typingText.textContent.slice(0, -1);
                    charIndex--;
                    setTimeout(typeEffect, 100);
                } else {
                    isDeleting = false;
                    isTypingName = !isTypingName; // Switch between name and highlight text
                    setTimeout(typeEffect, 500);
                }
            }
        }

        typeEffect();
    }

    const menuIcon = document.getElementById("menu-icon");
    const navList = document.getElementById("nav-list");

    if (menuIcon && navList) {
        menuIcon.addEventListener("click", function () {
            navList.classList.toggle("show");
        });
    }

    // Image Slider Loop
    const slider = document.querySelector(".slide-track");
    const slides = slider ? Array.from(slider.children) : [];
    const totalSlides = slides.length;

    if (slider && totalSlides > 0) {
        // Clone slides for seamless effect
        slides.forEach((slide) => {
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
    }
});
