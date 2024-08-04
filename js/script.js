/************************   COUNTER    ********************************/
function countdown() {
    const countdownElement = document.getElementById('countdown');
    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    let days = parseInt(daysElement.textContent);
    let hours = parseInt(hoursElement.textContent);
    let minutes = parseInt(minutesElement.textContent);
    let seconds = parseInt(secondsElement.textContent);

    function updateTimer() {
        if (seconds > 0) {
            seconds--;
        } else if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else if (hours > 0) {
            seconds = 59;
            minutes = 59;
            hours--;
        } else if (days > 0) {
            seconds = 59;
            minutes = 59;
            hours = 23;
            days--;
        }

        daysElement.textContent = days;
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }

    setInterval(updateTimer, 1000);
}

countdown();

const learnMoreButton = document.querySelector('.learn-more');
let leftElement;
let countdownContainer;

// Function to handle hover effect for laptop screens
function handleLaptopHover() {
  leftElement.classList.add('move-left');
}

function handleLaptopMouseOut() {
  leftElement.classList.remove('move-left');
}

// Function to handle hover effect for tablet screens
function handleTabletHover() {
  countdownContainer.classList.add('move-left');
}

function handleTabletMouseOut() {
  countdownContainer.classList.remove('move-left');
}

// Function to set up event listeners based on screen width
function setupEventListeners() {
  // Remove any existing event listeners to avoid duplicate listeners
  learnMoreButton.removeEventListener('mouseover', handleLaptopHover);
  learnMoreButton.removeEventListener('mouseout', handleLaptopMouseOut);
  learnMoreButton.removeEventListener('mouseover', handleTabletHover);
  learnMoreButton.removeEventListener('mouseout', handleTabletMouseOut);

  // Get the screen width
  const screenWidth = window.innerWidth;

  // Check if the screen width is for laptop or tablet
  if (screenWidth >= 993) { // laptop
    leftElement = document.querySelector('.left');
    learnMoreButton.addEventListener('mouseover', handleLaptopHover);
    learnMoreButton.addEventListener('mouseout', handleLaptopMouseOut);
  } else { // tablet
    countdownContainer = document.querySelector('.countdown-container');
    learnMoreButton.addEventListener('mouseover', handleTabletHover);
    learnMoreButton.addEventListener('mouseout', handleTabletMouseOut);
  }
}

// Initial setup
setupEventListeners();

// Re-setup event listeners on window resize
window.addEventListener('resize', setupEventListeners);


/************************   MAIN-HEABDER   ********************************/
document.addEventListener("DOMContentLoaded", function() {
    // Toggle navigation menu for main-header
    const navToggle = document.querySelector('.main-header .nav-toggle');
    const navLinks = document.querySelector('.main-header .nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Toggle dropdown menu for all headers
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const dropdownContent = e.target.closest('li').querySelector('.dropdown-content');
            dropdownContent.classList.toggle('active');
            e.target.classList.toggle('active');
        });
    });

    // Collapse navigation menu when a link is clicked
    const allNavLinks = document.querySelectorAll('.main-header .nav-links a');

    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});


/************************   ANIMATION ON BACKGROUND SECTION  ********************************/
setTimeout(function() {
  document.querySelector('.background-image').classList.add('loaded');
}, 300);


/************************ MAIN-HEADER2  ********************************/
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.main-header2');
  const navLinks = header.querySelector('.nav-links');
  const navToggle = header.querySelector('.nav-toggle');
  const threshold = window.innerHeight * 0.15; // 15% of page height

  window.addEventListener('scroll', () => {
      if (window.scrollY > threshold) {
          header.classList.add('show-header');
      } else {
          header.classList.remove('show-header');
          navLinks.classList.remove('active');
      }
  });

  navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          navLinks.classList.remove('active');
      });
  });
});



/************************   UPWARD ARROW ********************************/
document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.getElementById('back-top');

  window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollPosition > (scrollHeight * 0.2 - clientHeight)) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });

  backToTopButton.addEventListener('click', function(event) {
      event.preventDefault();

      window.scrollTo({
          top: 0,
          behavior: 'smooth' // Smooth scroll behavior
      });
  });
});


        const buttons = document.querySelectorAll('.button');
        let activeButtonId = localStorage.getItem('activeButtonId');
        
        // Initialize the active button based on the stored value
        if (activeButtonId) {
          const activeButton = document.getElementById(activeButtonId);
          if (activeButton) {
            activeButton.classList.add('active');
          }
        }
        
        function handleClick(event, url, buttonId) {
          // Remove the active class from all buttons
          buttons.forEach(button => {
            button.classList.remove('active');
          });
        
          // Add the active class to the clicked button (if it's not button1)
          if (buttonId !== 'button1') {
            event.currentTarget.classList.add('active');
            // Store the ID of the active button (only for button2 and button3)
            localStorage.setItem('activeButtonId', buttonId);
          } else {
            // Clear the stored activeButtonId if button1 is clicked
            localStorage.removeItem('activeButtonId');
          }
        
          // Navigate to the new URL
          location.href = url;
        }
