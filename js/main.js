const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar__list');
burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  navbar.classList.toggle('active');
});
const cauntry = document.querySelectorAll('.cauntry');

for (let i = 0; i < cauntry.length; i++) {
  cauntry[i].addEventListener('click', function () {
    cauntry[i].classList.toggle('active');
  });
}

$('.one__slides').slick({
  infinite: true,
  slidesToShow: 2,
  responsive: [{
    breakpoint: 480,
    settings: {
      slidesToShow: 1.5
    }
  }, {
    breakpoint: 365,
    settings: {
      slidesToShow: 1
    }
  }]
});
$('.grid-special').slick({
  infinite: true,
  slidesToShow: 2,
  padding: '60px',
  responsive: [{
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
});
$('.aferist__sliders').slick({
  infinite: true,
  slidesToShow: 2,
  padding: '60px',
  responsive: [{
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
});
const accordion = document.querySelectorAll('.accordion__wraper-accor');
const accordionBody = document.querySelectorAll('.accordion__content');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    for (let j = 0; j < accordion.length; j++) {
      accordion[j].classList.remove('active');
      accordionBody[j].classList.remove('active');
    }

    accordion[i].classList.add('active');
    accordionBody[i].classList.add('active');
  });
} //= include components/artist.js


$('.about__content').slick({
  infinite: true,
  slidesToShow: 3,
  speed: 300,
  autoplay: 400,
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 1
    }
  }]
});
const modalVhod = document.querySelectorAll('.modal__vhod');
const modalRegistr = document.querySelectorAll('.modal__registr');
const modal = document.querySelector('.modal__one');
const modaltwo = document.querySelector('.modal__two');
const modalcontent = document.querySelector('.modal__one-content');
const modalcontentTwo = document.querySelector('.modal__one-content-two');
const account = document.querySelector('.account');
const accountReg = document.querySelector('.account-REG');
const close = document.querySelectorAll('.close');
const btnSubmit = document.querySelectorAll('.btn-submit');
account.addEventListener('click', function () {
  modal.style.display = 'none';
  modaltwo.style.display = 'flex';
  setTimeout(() => {
    modalcontentTwo.style.top = 0;
  }, 300);
});
accountReg.addEventListener('click', function () {
  modaltwo.style.display = 'none';
  modal.style.display = 'flex';
  setTimeout(() => {
    modalcontent.style.top = 0;
  }, 300);
});

for (let i = 0; i < btnSubmit.length; i++) {
  btnSubmit[i].addEventListener('click', function () {
    location.reload();
  });
}

for (let i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function () {
    modal.style.display = 'none';
    modaltwo.style.display = 'none';
  });
}

for (let i = 0; i < modalVhod.length; i++) {
  modalVhod[i].addEventListener('click', function () {
    modal.style.display = 'flex';
    setTimeout(() => {
      modalcontent.style.top = 0;
    }, 300);
  });
}

for (let i = 0; i < modalRegistr.length; i++) {
  modalRegistr[i].addEventListener('click', function () {
    modaltwo.style.display = 'flex';
    setTimeout(() => {
      modalcontentTwo.style.top = 0;
    }, 300);
  });
}

window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
window.addEventListener('click', function (event) {
  if (event.target == modaltwo) {
    modaltwo.style.display = 'none';
  }
});