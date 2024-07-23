// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    // smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // dark mode togglings
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'toggle dark mode';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.top = '10px';
    darkModeToggle.style.right = '10px';
    darkModeToggle.style.zIndex = '1000';
    document.body.appendChild(darkModeToggle);
  
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      if (document.body.classList.contains('dark-mode')) {
        document.documentElement.style.setProperty('--background-color', '#2c3e50');
        document.documentElement.style.setProperty('--text-color', '#ecf0f1');
      } else {
        document.documentElement.style.setProperty('--background-color', '#ecf0f1');
        document.documentElement.style.setProperty('--text-color', '#34495e');
      }
    });
  
    // fade in effect?!!!!
    const sections = document.querySelectorAll('main section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // a blog post loader
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
      newPost.classList.add('fade-in');
      blogSection.insertBefore(newPost, loadMoreButton);
    });
  });