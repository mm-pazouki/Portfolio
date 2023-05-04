const hamburger = document.querySelector('#hamburger');
const links = document.querySelectorAll('.nav__desktoplink');
const popUp = document.querySelector('.portfolio__PopUP');
const closePopUp = document.querySelector('#cross__project');
const sections = document.querySelectorAll('header,#headline, #works, #about, #contact, .footer');
const main = document.querySelector('main');

function invisibleToogle() {
  const menu = document.querySelector('.closed__menu');
  const newMenu = document.querySelector('.opened__menu');
  menu.classList.replace('closed__menu', 'opened__menu');
  newMenu.classList.replace('opened__menu', 'closed__menu');

  const invisible = document.querySelectorAll('.mobile__invisible');
  const visible = document.querySelectorAll('.mobile__visible');
  invisible.forEach((tag) => tag.classList.replace('mobile__invisible', 'mobile__visible'));
  visible.forEach((tag) => tag.classList.replace('mobile__visible', 'mobile__invisible'));

  if (document.querySelector('.toolbar') !== null) {
    document.querySelector('.toolbar').classList.replace('toolbar', 'toolbar__open');

    document.querySelector('.corner__geometry').classList.add('toolbar__open__row1');
    document.querySelector('.drop-down').classList.add('toolbar__open__row1');
    document.querySelector('.mobile__photos').classList.add('toolbar__open__row2');
    document.querySelector('.desktop__header').classList.add('toolbar__open__row3');
    document.querySelector('.nav__bottomImage').classList.add('toolbar__open__row4');
  } else {
    document.querySelector('.toolbar__open').classList.replace('toolbar__open', 'toolbar');

    document.querySelector('.corner__geometry').classList.remove('toolbar__open__row1');
    document.querySelector('.drop-down').classList.remove('toolbar__open__row1');
    document.querySelector('.mobile__photos').classList.remove('toolbar__open__row2');
    document.querySelector('.desktop__header').classList.remove('toolbar__open__row3');
    document.querySelector('.nav__bottomImage').classList.remove('toolbar__open__row4');
  }
}

hamburger.addEventListener('click', () => {
  const menu = document.querySelector('.closed__menu');
  const newMenu = document.querySelector('.opened__menu');
  menu.classList.replace('closed__menu', 'opened__menu');
  newMenu.classList.replace('opened__menu', 'closed__menu');

  const invisible = document.querySelectorAll('.mobile__invisible');
  const visible = document.querySelectorAll('.mobile__visible');
  invisible.forEach((tag) => tag.classList.replace('mobile__invisible', 'mobile__visible'));
  visible.forEach((tag) => tag.classList.replace('mobile__visible', 'mobile__invisible'));

  if (document.querySelector('.toolbar') !== null) {
    document.querySelector('.toolbar').classList.replace('toolbar', 'toolbar__open');
    document.querySelector('.corner__geometry').classList.add('toolbar__open__row1');
    document.querySelector('.drop-down').classList.add('toolbar__open__row1');
    document.querySelector('.mobile__photos').classList.add('toolbar__open__row2');
    document.querySelector('.desktop__header').classList.add('toolbar__open__row3');
    document.querySelector('.nav__bottomImage').classList.add('toolbar__open__row4');
  } else {
    document.querySelector('.toolbar__open').classList.replace('toolbar__open', 'toolbar');

    document.querySelector('.corner__geometry').classList.remove('toolbar__open__row1');
    document.querySelector('.drop-down').classList.remove('toolbar__open__row1');
    document.querySelector('.mobile__photos').classList.remove('toolbar__open__row2');
    document.querySelector('.desktop__header').classList.remove('toolbar__open__row3');
    document.querySelector('.nav__bottomImage').classList.remove('toolbar__open__row4');
  }
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    invisibleToogle();
  });
});

const projectsInfo = [{
  name: 'Correspondence',
  stack: ['HTML/CSS', 'JavaScript', 'SQL', 'C#'],
  url: './Contents/Resources/Pictures/Correspondence_img.jpg',
  slide: ['./Contents/Resources/Pictures/Correspondence_img.jpg', './Contents/Resources/Pictures/Correspondence_img.jpg', './Contents/Resources/Pictures/Correspondence_img.jpg', './Contents/Resources/Pictures/Correspondence_img.jpg'],
  descriptionOne: 'Every organization must have effective, specific and continuous administrative communication and supervise and manage many matters in to other departments. On the other hand, foreign organizations follow up and demand many matters through correspondence from the company and its affiliated organizations. At present, this relationship between central organizations and affiliated organizations is disparate or, in other words, independent, with each organization responsible for responding to deficiencies. Therefore, in order to increase the efficiency and ease of external correspondence with this company and its affiliated organizations, this software intends to create an opportunity that, in addition to increasing the monitoring of the response of affiliated organizations to foreign organizations, also improve its quality.',
  live: 'https://www.youtube.com/watch?v=DclqVpauSX0',
  source: 'https://www.youtube.com/watch?v=DclqVpauSX0',
}, {
  name: 'Evaluation',
  stack: ['HTML/CSS', 'Django', 'JavaScript'],
  url: './Contents/Resources/Pictures/Evaluation_img.jpg',
  slide: ['./Contents/Resources/Pictures/Evaluation_img.jpg', './Contents/Resources/Pictures/Evaluation_img.jpg', './Contents/Resources/Pictures/Evaluation_img.jpg', './Contents/Resources/Pictures/Evaluation_img.jpg'],
  descriptionOne: 'Goya is a web application platform under development by our team, purpose of this project is to evaluate employees of organizations and their work environment, enabling us to find suitable positions and standardize their workspace according to ISO/DIS 34000Goya',
  live: 'https://www.youtube.com/watch?v=eglynRFZ0bg',
  source: 'https://www.youtube.com/watch?v=eglynRFZ0bg',
},
];

const projectsButtons = Array.from(document.querySelectorAll('.project__button'));
const maxProjects = projectsButtons.length - 1;
const navigateToRightGalley = document.querySelector('.pop__display__right');
const navigateToRight = document.querySelector('.nav__pop__next');
const navigateToLeftGallery = document.querySelector('.pop__display__left');
const navigateToLeft = document.querySelector('.nav__pop__prev');
const smallImages = Array.from(document.querySelectorAll('.small__image'));
let projectIndex = 0;
let imageIndex = 0;

const loadModel = (i) => {
  const ruby = document.querySelector('.ruby');
  if (i === 0) { ruby.style.display = 'none'; } else { ruby.style.display = 'flex'; }
  const h1 = document.querySelector('.pop__title');
  const pictures = document.querySelectorAll('.small__image');
  const pOne = document.querySelector('.text__pop__one');
  const pTwo = document.querySelector('.text__pop__two');
  const live = document.querySelector('.live__link');
  live.href = projectsInfo[i].live;

  const source = document.querySelector('.source__link');
  source.href = projectsInfo[i].source;
  h1.innerHTML = projectsInfo[i].name;
  for (let j = 0; j < pictures.length; j += 1) {
    pictures[j].src = projectsInfo[i].slide[j];
  }
  pOne.innerHTML = projectsInfo[i].descriptionOne;
  pTwo.innerHTML = projectsInfo[i].descriptionTwo;
  projectIndex = i;
};
const selectImage = (i = 0) => {
  const prvs = document.querySelector('.select__image');
  if (prvs !== null) {
    prvs.classList.remove('select__image');
  }
  smallImages[i].classList.add('select__image');
  const big = document.querySelector('.big__image');
  big.src = smallImages[i].src;
};
projectsButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    popUp.style.display = 'grid';
    sections.forEach((section) => section.classList.add('pop__hide'));
    main.classList.replace('main', 'main__pop');

    loadModel(i);
    selectImage();
  });
});

navigateToLeftGallery.addEventListener('click', () => {
  if (imageIndex > 0) {
    imageIndex -= 1;
    selectImage(imageIndex);
  }
});

navigateToLeft.addEventListener('click', () => {
  if (projectIndex > 0) {
    projectIndex -= 1;
    imageIndex = 0;
    loadModel(projectIndex);
    selectImage();
  }
});

navigateToRightGalley.addEventListener('click', () => {
  if (imageIndex < 3) {
    imageIndex += 1;
    selectImage(imageIndex);
  }
});

navigateToRight.addEventListener('click', () => {
  if (projectIndex < maxProjects) {
    projectIndex += 1;
    imageIndex = 0;
    loadModel(projectIndex);
    selectImage();
  }
});

closePopUp.addEventListener('click', () => {
  sections.forEach((section) => section.classList.remove('pop__hide'));
  main.classList.replace('main__pop', 'main');

  popUp.style.display = 'none';
  imageIndex = 0;
});
