const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;
function showNextTestimonial() {
    testimonials[currentTestimonial].style.display = 'none';
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
}
if (testimonials.length > 0) {
    testimonials[currentTestimonial].style.display = 'block'; 
    setInterval(showNextTestimonial, 5000); 
}
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.3s ease';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});
