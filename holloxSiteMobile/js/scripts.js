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
  document.getElementById('home02').innerHTML = "<a href='#home'>Início</a>";
  document.getElementById('tecnology01').innerHTML = "Tecnologia";
  document.getElementById('tecnology02').innerHTML = "<a href='#tecnology'>Tecnologia</a>";
  document.getElementById('aplications01').innerHTML = "Aplicações";
  document.getElementById('aplications02').innerHTML = "<a href='#aplications'>Aplicações</a>";
  document.getElementById('parceiros01').innerHTML = "Parceiros"; 
  document.getElementById('parceiros02').innerHTML = "<a href='#parceiros'>Parceiros</a>"; 
  document.getElementById('contato01').innerHTML = "Contato";
  document.getElementById('contato02').innerHTML = "<a href='#contato'>Contato</a>";
  document.getElementById('segmentos').innerHTML = "Nossos Segmentos";
  document.getElementById('industrial').innerHTML = "Industrial";
  document.getElementById('engProduto').innerHTML = "Engenharia de Produto";
  document.getElementById('engCivil').innerHTML = "Engenharia Civil";
  document.getElementById('arquitetura').innerHTML = "Arquitetura";
  document.getElementById('Aplicacoes').innerHTML = "ESCANEIE O QRCODE PARA VISUALIZAR EM SEU AMBIENTE"; 
  document.getElementById('AplicacoesSub').innerHTML = "É necessário o uso de um celular.</br></br>";
  document.getElementById('Parceiros').innerHTML = "Parceiros</br></br>";
  document.getElementById('faleConosco').innerHTML = "Fale com a Gente</br></br>";  

  document.getElementById('Pg01').innerHTML = "</br></br></br></br>Explicar um projeto não é fácil mas <span style='color:cadetblue;'>nós</span> podemos <span style='color:cadetblue;'>te ajudar</span> com isso...  </br></br><a type='button' class='btn btn-outline-light btn-lg' href='#tecnology' id='liveToastBtn'>Saiba mais »</a></br></br></br></br></br>";
  document.getElementById('Pg0201').innerHTML = "Com soluções em AR/MR, <span class='text-muted'>é possível </span>"; 
  document.getElementById('Pg0202').innerHTML = "visualizar e interagir com objetos digitais em qualquer lugar, na palma de sua mão.";
  document.getElementById('Pg0301').innerHTML = "Soluções Industriais desenvolvidas <span class='text-muted'>pela hollox,</span>";
  document.getElementById('Pg0302').innerHTML = "facilita o trabalho de várias formas, trazemos informações dos seus projetos em tempo real, integrando e controlando sua empresa.";
  document.getElementById('Pg0401').innerHTML = "A hollox traz agilidade nos processos e <span class='text-muted'>ganho na produtividade</span>";
  document.getElementById('Pg0402').innerHTML = "Aumentando a qualidade e reduzindo o custo em viagens e em horas de máquinas paradas.";   
}

//mudando idoma para ingles
function changeLanguage_EUA()
{  
  document.getElementById('home01').innerHTML = "Home";
  document.getElementById('home02').innerHTML = "<a href='#home'>Home</a>";  
  document.getElementById('tecnology01').innerHTML = "Tecnology";
  document.getElementById('tecnology02').innerHTML = "<a href='#tecnology'>Tecnology</a>";
  document.getElementById('aplications01').innerHTML = "Aplications";
  document.getElementById('aplications02').innerHTML = "<a href='#aplications'>Aplications</a>";
  document.getElementById('parceiros01').innerHTML = "Partners";
  document.getElementById('parceiros02').innerHTML = "<a href='#parceiros'>Partners</a>";  
  document.getElementById('contato01').innerHTML = "Contact";
  document.getElementById('contato02').innerHTML = "<a href='#contato'>Contact</a>";
  document.getElementById('segmentos').innerHTML = "Segments";
  document.getElementById('industrial').innerHTML = "Industry";
  document.getElementById('engProduto').innerHTML = "Product Engineering";
  document.getElementById('engCivil').innerHTML = "Civil Engineering";
  document.getElementById('arquitetura').innerHTML = "Architecture"; 
  document.getElementById('Aplicacoes').innerHTML = "Scan a QRCODE to get started now"; 
  document.getElementById('AplicacoesSub').innerHTML = "Place interactive digital objects in a real environment.</br></br>";
  document.getElementById('Parceiros').innerHTML = "Partners</br></br>";
  document.getElementById('faleConosco').innerHTML = "Contact Us</br></br>"; 

  document.getElementById('Pg01').innerHTML = "</br></br></br></br>Explaining your project was never quite <span style='color:cadetblue;'>as</span> easy <span style='color:cadetblue;'>as now...</span></br></br><a type='button' class='btn btn-outline-light btn-lg' href='#tecnology' id='liveToastBtn'>Know More »</a></br></br></br></br></br>";
  document.getElementById('Pg0201').innerHTML = "Mixed Reality applications make <span class='text-muted'> it possible </span>";  
  document.getElementById('Pg0202').innerHTML = "where the user can place interactive digital objects in the desired location in a real environment.";
  document.getElementById('Pg0301').innerHTML = "MR/AR industrial applications ease <span class='text-muted'>the work in a variety of ways.</span>";   
  document.getElementById('Pg0302').innerHTML = "Our custom AR applications can automatically bring essential real time information or objects to user’s field of sight.";
  document.getElementById('Pg0401').innerHTML = "The user can work hands-free and still has <span class='text-muted'> access to real-time data and experts.</span>";
  document.getElementById('Pg0402').innerHTML = "Improves its quality and saves remarkably traveling and downtime costs.";  
}



//mudando idoma para portugues
function changeLanguage_BR_Mobile()
{  
  document.getElementById('home01').innerHTML = "Inicio";
  document.getElementById('home02').innerHTML = "<a href='#home'>Início</a>";
  document.getElementById('tecnology01').innerHTML = "Tecnologia";
  document.getElementById('tecnology02').innerHTML = "<a href='#tecnology'>Tecnologia</a>";
  document.getElementById('aplications01').innerHTML = "Aplicações";
  document.getElementById('aplications02').innerHTML = "<a href='#aplications'>Aplicações</a>";
  document.getElementById('parceiros01').innerHTML = "Parceiros"; 
  document.getElementById('parceiros02').innerHTML = "<a href='#parceiros'>Parceiros</a>"; 
  document.getElementById('contato01').innerHTML = "Contato";
  document.getElementById('contato02').innerHTML = "<a href='#contato'>Contato</a>";
  document.getElementById('segmentos').innerHTML = "Nossos Segmentos";
  document.getElementById('industrial').innerHTML = "Industrial";
  document.getElementById('engProduto').innerHTML = "Engenharia de Produto";
  document.getElementById('engCivil').innerHTML = "Engenharia Civil";
  document.getElementById('arquitetura').innerHTML = "Arquitetura";
  document.getElementById('Aplicacoes').innerHTML = "ESCANEIE O QRCODE PARA VISUALIZAR EM SEU AMBIENTE"; 
  document.getElementById('AplicacoesSub').innerHTML = "É necessário o uso de um celular.</br></br>";
  document.getElementById('Parceiros').innerHTML = "Parceiros</br></br>";
  document.getElementById('faleConosco').innerHTML = "Fale com a Gente</br></br>";  

  document.getElementById('Pg01').innerHTML = "</br></br></br></br>Explicar um projeto não é fácil mas <span style='color:cadetblue;'>nós</span> podemos <span style='color:cadetblue;'>te ajudar</span> com isso...  </br></br><a type='button' class='btn btn-outline-light btn-lg' href='#tecnology' id='liveToastBtn'>Saiba mais »</a></br></br></br></br></br>";
  document.getElementById('Pg0201').innerHTML = "Com soluções em AR/MR, <span class='text-muted'>é possível </span>"; 
  document.getElementById('Pg0202').innerHTML = "visualizar e interagir com objetos digitais em qualquer lugar, na palma de sua mão.";
  document.getElementById('Pg0301').innerHTML = "Soluções Industriais desenvolvidas <span class='text-muted'>pela hollox,</span>";
  document.getElementById('Pg0302').innerHTML = "facilita o trabalho de várias formas, trazemos informações dos seus projetos em tempo real, integrando e controlando sua empresa.";
  document.getElementById('Pg0401').innerHTML = "A hollox traz agilidade nos processos e <span class='text-muted'>ganho na produtividade</span>";
  document.getElementById('Pg0402').innerHTML = "Aumentando a qualidade e reduzindo o custo em viagens e em horas de máquinas paradas.";   
}

//mudando idoma para ingles
function changeLanguage_EUA_Mobile()
{  
  document.getElementById('home01').innerHTML = "Home";
  document.getElementById('home02').innerHTML = "<a href='#home'>Home</a>";  
  document.getElementById('tecnology01').innerHTML = "Tecnology";
  document.getElementById('tecnology02').innerHTML = "<a href='#tecnology'>Tecnology</a>";
  document.getElementById('aplications01').innerHTML = "Aplications";
  document.getElementById('aplications02').innerHTML = "<a href='#aplications'>Aplications</a>";
  document.getElementById('parceiros01').innerHTML = "Partners";
  document.getElementById('parceiros02').innerHTML = "<a href='#parceiros'>Partners</a>";  
  document.getElementById('contato01').innerHTML = "Contact";
  document.getElementById('contato02').innerHTML = "<a href='#contato'>Contact</a>";
  document.getElementById('segmentos').innerHTML = "Segments";
  document.getElementById('industrial').innerHTML = "Industry";
  document.getElementById('engProduto').innerHTML = "Product Engineering";
  document.getElementById('engCivil').innerHTML = "Civil Engineering";
  document.getElementById('arquitetura').innerHTML = "Architecture"; 
  document.getElementById('Aplicacoes').innerHTML = "Scan a QRCODE to get started now"; 
  document.getElementById('AplicacoesSub').innerHTML = "Place interactive digital objects in a real environment.</br></br>";
  document.getElementById('Parceiros').innerHTML = "Partners</br></br>";
  document.getElementById('faleConosco').innerHTML = "Contact Us</br></br>"; 

  document.getElementById('Pg01').innerHTML = "</br></br></br></br>Explaining your project was never quite <span style='color:cadetblue;'>as</span> easy <span style='color:cadetblue;'>as now...</span></br></br><a type='button' class='btn btn-outline-light btn-lg' href='#tecnology' id='liveToastBtn'>Know More »</a></br></br></br></br></br>";
  document.getElementById('Pg0201').innerHTML = "Mixed Reality applications make <span class='text-muted'> it possible </span>";  
  document.getElementById('Pg0202').innerHTML = "where the user can place interactive digital objects in the desired location in a real environment.";
  document.getElementById('Pg0301').innerHTML = "MR/AR industrial applications ease <span class='text-muted'>the work in a variety of ways.</span>";   
  document.getElementById('Pg0302').innerHTML = "Our custom AR applications can automatically bring essential real time information or objects to user’s field of sight.";
  document.getElementById('Pg0401').innerHTML = "The user can work hands-free and still has <span class='text-muted'> access to real-time data and experts.</span>";
  document.getElementById('Pg0402').innerHTML = "Improves its quality and saves remarkably traveling and downtime costs.";  
}

