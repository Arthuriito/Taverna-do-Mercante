let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
}

window.onscroll = () =>{
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
}

let filterBtn = document.querySelectorAll('.filter-buttons .buttons');
let filterItem = document.querySelectorAll('.products .box-container .box');

filterBtn.forEach(button =>{

  button.onclick = () =>{
    filterBtn.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    let dataFilter = button.getAttribute('data-filter');

    filterItem.forEach(item =>{

      item.classList.remove('active');
      item.classList.add('hide');

      if(item.getAttribute('data-item') == dataFilter || dataFilter == 'all'){
        item.classList.remove('hide');
        item.classList.add('active');
      }

    });

  };

});

var swiper = new Swiper(".home-slider", {
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".featured-slider", {
  centeredSlides: true,
  loop:true,
  spaceBetween:20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".review-slide", {
  loop:true,
  spaceBetween:20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  centeredSlides: true,
  loop:true,
  spaceBetween:20,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".banner-slider", {
  slidesPerView: 3, // Número de slides visíveis
  spaceBetween: 20, // Espaçamento entre os slides
  loop: true, // Permite que o slider volte ao início
  autoplay: {
      delay: 3000, // Tempo em milissegundos entre as transições
      disableOnInteraction: false, // Permite que o autoplay continue após interação
  },
  grabCursor: true,
  breakpoints: {
      0: {
          slidesPerView: 1, // 1 slide em telas pequenas
      },
      768: {
          slidesPerView: 2, // 2 slides em telas médias
      },
      1200: {
          slidesPerView: 3, // 3 slides em telas grandes
      },
  },
});

// Adiciona eventos de mouse para os vídeos
const banners = document.querySelectorAll('.banner');

banners.forEach(banner => {
  const video = banner.querySelector('.banner-video');

  // Quando o mouse entra no banner
  banner.addEventListener('mouseenter', () => {
      video.style.opacity = '1'; // Fade-in
      video.play(); // Começa a tocar o vídeo
      swiper.autoplay.stop(); // Para a rolagem automática
  });

  // Quando o mouse sai do banner
  banner.addEventListener('mouseleave', () => {
      video.style.opacity = '0'; // Fade-out
      video.pause(); // Para o vídeo
      swiper.autoplay.start(); // Retoma a rolagem automática
  });
});

// Alternar tema
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); // Alterna a classe 'dark' no body
    document.querySelector('.header').classList.toggle('dark'); // Alterna a classe 'dark' no cabeçalho

    // Alterna a cor dos links do menu
    const navbarLinks = document.querySelectorAll('.header .navbar a');
    navbarLinks.forEach(link => {
        link.classList.toggle('dark'); // Alterna a classe 'dark' nos links do menu
    });
});