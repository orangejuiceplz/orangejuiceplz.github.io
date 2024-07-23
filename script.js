// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section');
  
    // nav and section display
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        // update active section
        sections.forEach(section => {
          section.classList.remove('active');
          if (section.id === targetId) {
            section.classList.add('active');
          }
        });
  
        // upd active nav link , whatever that is 
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
      });
    });
  
    // theme toggler
    const themeToggle = document.createElement('button');
    themeToggle.textContent = 'Toggle Theme';
    themeToggle.id = 'theme-toggle';
    document.body.appendChild(themeToggle);
  
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark-mode');
    });
  
    // blog post loader
    const blogSection = document.getElementById('blog');
    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'load more posts';
    loadMoreButton.style.marginTop = '20px';
    blogSection.appendChild(loadMoreButton);
  
    let postCount = 1;
  
    loadMoreButton.addEventListener('click', () => {
      const newPost = document.createElement('article');
      newPost.innerHTML = `
        <h3>blog post ${++postCount}</h3>
        <p>(blog content) ${postCount}.</p>
      `;
      newPost.style.animation = 'fadeIn 0.5s ease-in';
      blogSection.insertBefore(newPost, loadMoreButton);
    });
  });