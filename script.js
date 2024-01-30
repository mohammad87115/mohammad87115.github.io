config = {
    "particles": {
      "number": {
        "value": 250,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 3.0046856855149766,
          "opacity_min": 0.09744926547616141,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 100,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.8,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
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

}, 10)

var i = 0;
var txt = " SextyNine"

var i2 = 0;
var txt2 = "A random guy you may meet on the internet ..."



async function typeWriter() {
    if (i < txt.length) {
        document.getElementById("whoisme").innerHTML = document.getElementById("whoisme").innerText.replace("_", "")
        document.getElementById("whoisme").innerHTML += txt.charAt(i)
        setTimeout(async () => {
            document.getElementById("whoisme").innerHTML += "_"
            i++;

            setTimeout(typeWriter, 100);
    
        },30)
      }
      else {
        document.getElementById("whoisme").innerHTML = document.getElementById("whoisme").innerText.replace("_", "")
        typeWriter2()
      }
}

async function typeWriter2() {
    if (i2 < txt2.length) {
        document.getElementById("whoismed").innerHTML += txt2.charAt(i2)
        i2++;

        setTimeout(typeWriter2, 80);
    
      }
}

function toast() {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
      return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
  }

  
  
setTimeout(async () => {
    document.getElementById("abjagh").className = "toast position-fixed end-0 bottom-0 mx-3 my-3"
}, 60000)

var captchatoken = ""

function onSubmit(token) {
    captchatoken = token
}

async function submit() {
    const mail = document.getElementById("email").value
    const name = document.getElementById("name").value
    const message = document.getElementById("message").value
    const captcha = captchatoken
    if (!mail || !name || !message) {
        document.getElementById("strong").innerHTML = "Error!"
        document.getElementById("alert").className = "alert alert-danger alert-dismissible fade show"
        document.getElementById("alert").style.display = "flex"
        document.getElementById("alert-err").innerHTML = "  Make sure to fill all the values"
        return;
    }
    if (!captcha) {
        document.getElementById("strong").innerHTML = "Error!"
        document.getElementById("alert").className = "alert alert-danger alert-dismissible fade show"
        document.getElementById("alert").style.display = "flex"
        document.getElementById("alert-err").innerHTML = "  Make sure to solve the captcha"
        return;
    }
    const rawResponse = await axios.post('https://contactform-api-sex.onrender.com/sendmsg', {"message":message, "email":mail, "name":name, "captcha": captcha}, { headers: {'Content-Type': 'application/json'}});
    const content = rawResponse.data
    if (content.status !== "ok") {
        document.getElementById("strong").innerHTML = "Error!"
        document.getElementById("alert").className = "alert alert-danger alert-dismissible fade show"
        document.getElementById("alert").style.display = "flex"
        document.getElementById("alert-err").innerHTML = "  There was an error while sending the message"
    } else {
        document.getElementById("strong").innerHTML = "Success!"
        document.getElementById("alert").className = "alert alert-success alert-dismissible fade show"
        document.getElementById("alert").style.display = "flex"
        document.getElementById("alert-err").innerHTML = "  Your message got submited with code " + content.data
    }

}