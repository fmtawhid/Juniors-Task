function contact() {
  alert("Redirecting to contact form...");
}

function notify() {
  alert("You will be notified soon!");
}

particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60 },
    "color": { "value": "#ffffff" },
    "shape": {
      "type": "circle",
      "stroke": { "width": 0, "color": "#000000" }
    },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 100 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});