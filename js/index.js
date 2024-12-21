const observeElements = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const options = {
      threshold: 0.5 
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll-delay');
          observer.unobserve(entry.target); 
        }
      });
    }, options);
  
    elements.forEach(element => observer.observe(element));
  };
  
  document.addEventListener('DOMContentLoaded', observeElements);
  

const backToTopButton = document.getElementById('backToTop');

window.onscroll = function () {
  if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};


window.onload = function(){
    document.getElementById("myVideo").play()
  }