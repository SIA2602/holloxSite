/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    800,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

//mudando imagem botao AR para portugues
function imgBR()
{
  var img = document.getElementById("dropDownCurrent");
  img.src="assets/img/brazil.svg";
}

//mudando imagem botao AR para portugues
function imgEUA()
{
  var img = document.getElementById("dropDownCurrent");
  img.src="assets/img/eua.svg"
}

//mudando idoma para portugues
function changeLanguage_BR()
{  
  document.getElementById('home01').innerHTML = "Inicio";
  document.getElementById('tecnology01').innerHTML = "Tecnologia";
  document.getElementById('aplications01').innerHTML = "Aplicações";
  document.getElementById('parceiros01').innerHTML = "Parceiros";
  document.getElementById('equipe01').innerHTML = "Equipe";
  document.getElementById('contato01').innerHTML = "Contato";  
}

//mudando idoma para ingles
function changeLanguage_EUA()
{  
  document.getElementById('home01').innerHTML = "Home";  
  document.getElementById('tecnology01').innerHTML = "Tecnology";
  document.getElementById('aplications01').innerHTML = "Aplications";
  document.getElementById('parceiros01').innerHTML = "Partners";
  document.getElementById('equipe01').innerHTML = "Team";
  document.getElementById('contato01').innerHTML = "Contact";
}

