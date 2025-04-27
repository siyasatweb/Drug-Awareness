// Function to show pop-ups
function showPopUp(type) {
  const popUp = document.getElementById(`popUp-${type}`);
  popUp.style.display = 'block';
}

// Function to close pop-ups
function closePopUp(type) {
  const popUp = document.getElementById(`popUp-${type}`);
  popUp.style.display = 'none';
}

// Function to show hotline pop-up
function showHotline() {
  const hotlinePopUp = document.getElementById('hotline-popup');
  hotlinePopUp.style.display = 'block';
}

// Function to close hotline pop-up
function closeHotline() {
  const hotlinePopUp = document.getElementById('hotline-popup');
  hotlinePopUp.style.display = 'none';
}

// Smooth Scroll to Section
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
