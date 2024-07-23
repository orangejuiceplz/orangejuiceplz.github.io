document.addEventListener('DOMContentLoaded', (event) => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main section');

  // navigation and section display
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
  themeToggle.textContent = 'toggle theme';
  themeToggle.id = 'theme-toggle';
  document.body.appendChild(themeToggle);

  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    themeToggle.textContent = document.documentElement.classList.contains('dark-mode') 
      ? 'switch to light mode' 
      : 'switch to dark mode';
  });

  // update profile views
  const profileViews = document.getElementById('profile-views');
  fetch('https://api.github.com/users/orangejuiceplz')
      .then(response => response.json())
      .then(data => {
          profileViews.textContent = data.followers;
      })
      .catch(error => {
          profileViews.textContent = 'unavailable';
      });

  // update commit activity
  const updateCommitActivity = (repoName, elementId) => {
      const element = document.getElementById(elementId);
      fetch(`https://api.github.com/repos/orangejuiceplz/${repoName}/stats/participation`)
          .then(response => response.json())
          .then(data => {
              const totalCommits = data.all.reduce((a, b) => a + b, 0);
              element.textContent = totalCommits;
          })
          .catch(error => {
              element.textContent = 'unavailable';
          });
  };

  updateCommitActivity('System-Monitor', 'system-monitor-commits');
  updateCommitActivity('smartCalc', 'smartcalc-commits');
  updateCommitActivity('Secure-Performance-Fixes', 'secure-performance-fixes-commits');

  // scroll animations
  const scrollElements = document.querySelectorAll('.fade-in, .slide-in');
  const skillBars = document.querySelectorAll('.skill-bar');

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

  const animateSkillBars = () => {
    skillBars.forEach((bar) => {
      if (elementInView(bar, 100)) {
        bar.style.width = bar.dataset.skill;
      }
    });
  }

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
    animateSkillBars();
  });

  // initial check
  handleScrollAnimation();
  animateSkillBars();

  // contact form submissions
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('message sent (this is a demo)');
    contactForm.reset();
  });

  // blog post loader
  const blogSection = document.getElementById('blog');
  const blogGrid = blogSection.querySelector('.blog-grid');
  const loadMoreButton = document.createElement('button');
  loadMoreButton.textContent = 'load more posts';
  loadMoreButton.style.marginTop = '20px';
  blogSection.appendChild(loadMoreButton);

  let postCount = 1;

  loadMoreButton.addEventListener('click', () => {
    const newPost = document.createElement('article');
    newPost.className = 'card fade-in';
    newPost.innerHTML = `
      <h3>blog post ${++postCount}</h3>
      <p>blog content ${postCount}.</p>
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
});