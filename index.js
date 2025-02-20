<!DOCTYPE html>
<html>
<head>
<title>stop tryna fw me</title>
<style>
  body {
    margin: 0;
    overflow: hidden;
  }
  #particles-js {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .navbar {
    position: fixed; /* Stays at the top */
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
    padding: 10px;
    z-index: 1; /* Ensure it's above the particles */
    display: flex;
    justify-content: space-between; /* Space links evenly */
    align-items: center; /* Vertically center links */
  }
  .navbar-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  .navbar-links li {
    margin: 0 10px; /* Space list items horizontally */
  }
  .navbar-links a {
    color: white;
    text-decoration: none;
    padding: 5px 10px; /* Add some padding around the links */
    border-radius: 5px; /* Round the link corners */
    transition: background-color 0.3s ease; /* Smooth transition for hover effect */
  }
  .navbar-links a:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Slightly lighter background on hover */
  }
  .material-icons {
    vertical-align: middle; /* Align icons with text */
    margin-right: 5px; /* Space between icon and text */
  }
  h1 {
      position: relative; /* Needed for vertical centering */
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); /* Center the text */
      color: white; /* Make the text white */
      font-size: 3em; /* Adjust font size as needed */
  }
</style>
</head>
<body>

<div id="particles-js"></div>

<nav class="navbar">
  <ul class="navbar-links left">
    <li>
      <a href="/" title="Velara - Play Unblocked Games" aria-label="Velara Home">
        <span class="material-icons"></span> VELARA
      </a>
    </li>
  </ul>
  <ul class="navbar-links right">
    <li>
      <a href="/g" title="Play Unblocked Games Online" aria-label="Games Section">
        <span class="material-icons">videogame_asset</span> GAMES
      </a>
    </li>
    <li>
      <a href="/a" title="Unblocked Apps Collection" aria-label="Apps Section">
        <span class="material-icons">apps</span> APPS
      </a>
    </li>
    <li>
      <a href="/!" title="Search Unblocked Games" aria-label="Search Page">
        <span class="material-icons">search</span> SEARCH
      </a>
    </li>
    <li>
      <a href="/s" title="User Settings &amp; Preferences" aria-label="Settings Page">
        <span class="material-icons">settings</span> SETTINGS
      </a>
    </li>
  </ul>
</nav>

<h1>Your Website Content Here</h1>

<script src="particles.js"></script>
<script>
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 160,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": { // Example particle customization
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": true
      },
      "size": {
        "value": 5,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });
</script>

</body>
</html>
