document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.navB');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.navB[href="#${id}"]`);
  
        if (entry.isIntersecting) {
        //   console.log(id);
          links.forEach((link) => link.classList.remove('active'));
          link.classList.add('active');
          updateLinePosition();
        }
      });
    }, {
      threshold: 0.6 // Adjust this to determine when the section is considered "in view"
    });
  
    sections.forEach((section) => observer.observe(section));
  });

function updateLinePosition() {
    const activeLink = document.querySelector('.navB.active');
    const line = document.querySelector('.line');

    if (activeLink) {
        const rect = activeLink.getBoundingClientRect();
        // console.log(rect.top);
        line.style.top = `${rect.top + 25}px`;
    }
}

// function updateVlinePosition() {
//     const navBox = document.querySelector('.navBox');
//     const scrollBottom = window.scrollY + window.innerHeight
//     const vline = document.querySelector('.vline');
//     const pageHeight = document.documentElement.scrollHeight;
//     const navBoxHeight = navBox.getBoundingClientRect().height;
//     // console.log(scrollBottom/pageHeight);
//     vline.style.height = `${scrollBottom/pageHeight * navBoxHeight}px`;
// }

// window.addEventListener('scroll', updateVlinePosition);