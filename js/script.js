document.addEventListener('DOMContentLoaded', (event) => {
  
  // nav and section display
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main section');

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

          // update active nav link
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
      themeToggle.textContent = document.documentElement.classList.contains('dark-mode') 
          ? 'Switch to Light Mode' 
          : 'Switch to Dark Mode';
  });

  // skill bar anims
  const animateSkillBars = () => {
      const skillBars = document.querySelectorAll('.skill-bar');
      skillBars.forEach((bar) => {
          const level = bar.getAttribute('data-skill');
          const skillLevel = bar.querySelector('.skill-level');
          skillLevel.style.width = level;
      });
  }

  // intersection observer (sersiouly, i don't understand this) for skill bars
  const skillsSection = document.getElementById('skills');
  const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
          animateSkillBars();
          observer.unobserve(skillsSection);
      }
  });
  observer.observe(skillsSection);

  // update profile views
  const profileViews = document.getElementById('profile-views');
  fetch('https://api.github.com/users/orangejuiceplz')
      .then(response => response.json())
      .then(data => {
          profileViews.textContent = data.followers;
      })
      .catch(error => {
          profileViews.textContent = 'Unavailable';
      });

  // update commit activity
  const updateCommitActivity = (repoName, elementId) => {
      const element = document.getElementById(elementId);
      fetch(`https://api.github.com/repos/orangejuiceplz/System-Monitor/stats/participation`)
          .then(response => response.json())
          .then(data => {
              const totalCommits = data.all.reduce((a, b) => a + b, 0);
              element.textContent = totalCommits;
          })
          .catch(error => {
              element.textContent = 'Unavailable';
          });
  };

  updateCommitActivity('System-Monitor', 'system-monitor-commits');
  updateCommitActivity('smartCalc', 'smartcalc-commits');
  updateCommitActivity('Secure-Performance-Fixes', 'secure-performance-fixes-commits');

  // scroll anims
  const scrollElements = document.querySelectorAll('.fade-in, .slide-in');

  const elementInView = (el, percentageScroll = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
          elementTop <= 
          ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
      );
  };

  const displayScrollElement = (element) => {
      element.classList.add('scrolled');
  };

  const hideScrollElement = (element) => {
      element.classList.remove('scrolled');
  };

  const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
          if (elementInView(el, 100)) {
              displayScrollElement(el);
          } else {
              hideScrollElement(el);
          }
      })
  }

  window.addEventListener('scroll', () => {
      handleScrollAnimation();
  });

  // initial check
  handleScrollAnimation();

  // contact form submissions (wip)
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message sent (this is a demo)');
      contactForm.reset();
  });

  // blog post loader
  const blogSection = document.getElementById('blog');
  const blogGrid = blogSection.querySelector('.blog-grid');
  const loadMoreButton = document.createElement('button');
  loadMoreButton.textContent = 'Load More Posts';
  loadMoreButton.style.marginTop = '20px';
  blogSection.appendChild(loadMoreButton);

  let postCount = 1;

  loadMoreButton.addEventListener('click', () => {
      const newPost = document.createElement('article');
      newPost.className = 'card fade-in';
      newPost.innerHTML = `
          <h3>Blog Post ${++postCount}</h3>
          <p>Blog content ${postCount}.</p>
      `;
      blogGrid.appendChild(newPost);
      
      // animate the new post
      setTimeout(() => {
          newPost.classList.add('scrolled');
      }, 10);
  });

  // typing animation for the main heading
  const typingElement = document.querySelector('.typing');
  typingElement.style.width = '0';
  setTimeout(() => {
      typingElement.style.width = '100%';
  }, 500);

  // project carousel functionality
  const carousel = document.querySelector('.project-carousel');
  const prevButton = document.getElementById('prev-project');
  const nextButton = document.getElementById('next-project');
  let currentIndex = 0;

  function showProject(index) {
      const offset = index * -100;
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
});