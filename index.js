// sidebar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  
  // sidebar responsive
  const navLinks = document.querySelectorAll([
    '.sidebar a[href^="#offer"]',
    '.sidebar a[href^="#menu"]',
    '.sidebar a[href^="#about"]',
    '.sidebar a[href^="#contact"]',
  ]);
  
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hideSidebar();
    });
  });


  // back  to-top button
  const toTop = document.querySelector(".to-top")
  window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })

  // pop up ads/ close ads
// pop up ads/ close ads
const adsOverlay = document.querySelector('.ads-overlay');
const ads = document.querySelector('.ads');
const adsContainer = document.querySelector('.ads-container');
const closeButton = document.querySelector('#close'); // Fix this

let adShown = false; // Add this

const showAd = () => {
  if (window.scrollY > 100 && !adShown) { // Check this
    adsContainer.classList.add('active');
    adsOverlay.classList.add('active');
    ads.classList.add('active');
    adShown = true; // Add this
  }
}

const skipAd = () => {
  ads.classList.remove('active');
  adsContainer.classList.remove('active');
  adsOverlay.classList.remove('active');
}

window.addEventListener('scroll', showAd);

closeButton.addEventListener('click', skipAd); 

