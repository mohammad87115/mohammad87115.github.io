
config = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#000100"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000100"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#001000",
        "opacity": 0.3,
        "width": 1.2
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 500,
          "line_linked": {
            "opacity": 0.4
          }
        },
        "bubble": {
          "distance": 800,
          "size": 80,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 150,
          "duration": 0.6
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

setTimeout(async () => {
    particlesJS('particles-js', config, function() {
        console.log('[callback] - particles.js config loaded');
    });
    
}, 50)


var i = 0;
var i2 = 0;
var txt = 'BallsDex Catcher'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
var txt2 = 'A Selfbot made for collecting countryballs'; /* The text */



function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i === txt.length) {return typeWriter2()}

}

function typeWriter2() {
    if (i2 < txt2.length) {
      document.getElementById("name2").innerHTML += txt2.charAt(i2);
      i2++;
      setTimeout(typeWriter2, 120);
    }

  }
  
