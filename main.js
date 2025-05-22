document.getElementById("year").innerHTML = new Date().getFullYear()


// FAQs display on Click
const questions = document.querySelectorAll('.unhide');

questions.forEach(question => {

  question.addEventListener('click', ()=>{

    const answer = question.nextElementSibling;

    if (answer.style.display === 'none'){
      answer.style.display = 'block'

    }else {
      answer.style.display = 'none'
    }

  });
});

// links Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{

  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const checkbox = document.getElementById("toggler");

    if (target){

      checkbox.checked = false;

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });
});

// scroll animations
const observer = new IntersectionObserver((entries) =>{
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add('rm-animate');
      observer.unobserve(entry.target);
    }
  });
},{threshold: .2});

const animatingElements = document.querySelectorAll('.animate');
animatingElements.forEach(element =>{
  observer.observe(element);
});


