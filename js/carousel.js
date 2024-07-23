document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.project-carousel');
    const prevButton = document.getElementById('prev-project');
    const nextButton = document.getElementById('next-project');
    let currentIndex = 0;

    function showProject(index) {
        const offset = index * -100;
        // smooth transition effect
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + 3) % 3;
        showProject(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % 3;
        showProject(currentIndex);
    });

    // rotate/5sec
    setInterval(() => {
        currentIndex = (currentIndex + 1) % 3;
        showProject(currentIndex);
    }, 5000);
});