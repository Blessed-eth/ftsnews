
const hero = document.querySelector('.hero');
const heroTitle = hero.querySelector('h1');

// Y value at which trailer switches to absolute positioning and scrolls up
const threshold = window.innerHeight;

window.addEventListener('scroll', function() {
  // scale up hero section until scale is 20x
  // and fade out hero title
  let scale = 1 + window.scrollY / 25;
  let opacity = 100 - (window.scrollY * 1.5);
  if (scale < 20) {
    hero.style.transform = `scale(${scale})`;
    heroTitle.style.opacity = opacity * .01;
  }
  
  // toggle threshold class at threshold value
  window.scrollY > threshold ?
    document.body.classList.add('past-threshold') :
    document.body.classList.remove('past-threshold');
}); 



  window.addEventListener('load', function() {
// Select the overlay and hero title elements
const overlay = document.getElementById('overlay');
const heroTitle = document.querySelector('.hero .fading');

// Set a timeout to fade out the overlay
setTimeout(() => {
overlay.style.opacity = '0'; // Start fading out
}, 500); // Optional delay before starting fade out

// Remove the overlay from the DOM after fade out
setTimeout(() => {
overlay.style.display = 'none';

// Trigger fade-in animation for the hero title
$(function() {
  var words = $(".fading").text().split(" ");
  $(".fading").text('').show();
  $.each(words, function(i, word) {
    $(".fading").append("<span>" + word + "</span>&nbsp;");
  });

  $(".fading span").each(function(i) {
    var $li = $(this);
    setTimeout(function() {
      $li.addClass("show");
    }, i * 150);
  });
});

heroTitle.style.opacity = '1'; // Fade in the hero title
}, 2500); // 2s for fade out plus optional delay
});


 

const cards1 = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    },
    {
      // threshold: 1,
      rootMargin: "-100px",
    }
  );
  
  cards1.forEach((card) => {
    observer.observe(card);
  });
  
  const cards2 = document.querySelectorAll(".sec2");
  
  const observer2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    },
    { rootMargin: "-100px" }
  );
  
  cards2.forEach((sec2) => {
    observer2.observe(sec2);
  });
  
  
  
  window.addEventListener('load', function() {
    // Select the overlay element
    const overlay = document.getElementById('overlay');
  
    // Set a timeout to fade out the overlay
    setTimeout(() => {
      overlay.style.opacity = '0'; // Start fading out
    }, 500); // Optional delay before starting fade out
  
    // Remove the overlay from the DOM after fade out
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 2500); // 2s for fade out plus optional delay
  });

  document.addEventListener('DOMContentLoaded', function () {
    var html = '';
    var shapeCount = 50;
    var colors = ['#FFD700', '#FFF8DC', '#DB7093', '#C2B7FE', '#95A9FF'];
  
    for (var i = 0; i < shapeCount; i++) {
      var colorIndex = Math.floor(Math.random() * colors.length);
      var size = Math.random() * 50 + 10; // Random size between 10 and 60
      var speed = Math.random() * 20 + 10; // Random speed between 10s and 30s
      var left = Math.random() * 100; // Random left position
      var top = Math.random() * 100; // Random top position
      var rotation = Math.random() * 360; // Random initial rotation
  
      html += `
        <div class="shape-container" style="
          left: ${left}%;
          top: ${top}%;
          animation: shape-animation ${speed}s linear infinite;
        ">
          <div class="random-shape" style="
            font-size: ${size}px;
            color: ${colors[colorIndex]};
            transform: rotate(${rotation}deg);
          "></div>
        </div>
      `;
    }
  
    document.querySelector('.shape').innerHTML += html;
  
    var allShapes = document.querySelectorAll('.shape-container');
    var button = document.querySelector('.button');
  
    button.addEventListener('click', function (event) {
      allShapes.forEach(function (shape) {
        shape.classList.toggle('stop-shape');
      });
  
      if (button.classList.contains('button')) {
        button.textContent = 'Unfreeze shapes';
      } else {
        button.textContent = 'Freeze shapes';
      }
      event.preventDefault();
    });
  });

  // INFINITE SLIDER //

  document.addEventListener("DOMContentLoaded", function () {
    const slideTracks = document.querySelectorAll(".slide-track");

    slideTracks.forEach((slideTrack) => {
      const cards = slideTrack.querySelectorAll(".card");

      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          slideTrack.style.animationPlayState = "paused"; // Pause animation on hover
        });

        card.addEventListener("mouseleave", () => {
          slideTrack.style.animationPlayState = "running"; // Resume animation when not hovered
        });
      });
    });
  });