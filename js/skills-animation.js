document.addEventListener('DOMContentLoaded', () => {

    const skills = [
        { name: 'C++', level: '90%' },
        { name: 'Java', level: '85%' },
        { name: 'Lua', level: '80%' },
        { name: 'Python', level: '75%' }
    ];

    const skillsContainer = document.querySelector('.skills-container');

    skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.innerHTML = `
            <span>${skill.name}</span>
            <div class="skill-bar" data-skill="${skill.level}">
                <div class="skill-level"></div>
            </div>
        `;
        skillsContainer.appendChild(skillElement);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target.querySelector('.skill-level');
                const skill = entry.target.dataset.skill;
                skillLevel.style.width = skill;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill-bar').forEach(bar => {
        observer.observe(bar);
    });
});