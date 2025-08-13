// Animated SVG blobs
function animateBlobs() {
    const blob1 = document.getElementById('blob1');
    const blob2 = document.getElementById('blob2');
    const blob3 = document.getElementById('blob3');
    let t = 0;
    function animate() {
        t += 0.016;
        if (blob1) {
            blob1.setAttribute('cx', 300 + Math.sin(t) * 40);
            blob1.setAttribute('cy', 350 + Math.cos(t/2) * 30);
            blob1.setAttribute('rx', 220 + Math.sin(t/1.5) * 18);
            blob1.setAttribute('ry', 180 + Math.cos(t/1.2) * 14);
        }
        if (blob2) {
            blob2.setAttribute('cx', 700 + Math.cos(t/1.3) * 38);
            blob2.setAttribute('cy', 600 + Math.sin(t/1.7) * 28);
            blob2.setAttribute('rx', 200 + Math.cos(t/1.1) * 16);
            blob2.setAttribute('ry', 160 + Math.sin(t/1.4) * 12);
        }
        if (blob3) {
            blob3.setAttribute('cx', 500 + Math.sin(t/1.8) * 32);
            blob3.setAttribute('cy', 800 + Math.cos(t/1.6) * 22);
            blob3.setAttribute('rx', 180 + Math.cos(t/1.3) * 14);
            blob3.setAttribute('ry', 140 + Math.sin(t/1.5) * 10);
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 80) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    animateBlobs();
    // Add .reveal to sections and project cards
    document.querySelectorAll('.about-section, .projects-section, .project-card').forEach(el => {
        el.classList.add('reveal');
    });
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // Modal açma
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeModal = document.querySelector('.close-modal');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            modalImg.src = card.getAttribute('data-img');
            modalTitle.textContent = card.getAttribute('data-title');
            modalDesc.textContent = card.getAttribute('data-desc');
            modal.classList.add('active');
        });
    });

    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
    });
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // ESC key closes modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
        }
    });
});