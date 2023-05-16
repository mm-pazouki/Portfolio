document.querySelector('i.fa').addEventListener('click', () => {
  const menu = document.querySelector('#mobile-menu');	  const menu = document.querySelector('#mobile-menu');
  menu.style.display = 'flex';	  menu.style.display = 'flex';
  const closeButton = document.createElement('li');	  const closeButton = document.createElement('li');
  const closeButtonSpan = document.createElement('span');	  const closeButtonSpan = document.createElement('span');
  closeButtonSpan.classList.add('closeMenu');	  closeButtonSpan.classList.add('closeMenu');
  closeButton.appendChild(closeButtonSpan);	  closeButton.appendChild(closeButtonSpan);
  menu.insertBefore(closeButton, menu.firstChild);	  menu.insertBefore(closeButton, menu.firstChild);
  closeButton.addEventListener('click', () => {	  closeButton.addEventListener('click', () => {
    menu.style.display = 'none';	    menu.style.display = 'none';
    closeButton.remove();	    closeButton.remove();
  });	  });
  const items = document.querySelectorAll('#mobile-menu li');	  const items = document.querySelectorAll('#mobile-menu li');
  const itemsArr = Array.from(items);	  const itemsArr = Array.from(items);
  for (let i = 0; i < itemsArr.length; i += 1) {	  for (let i = 0; i < itemsArr.length; i += 1) {
    itemsArr[i].addEventListener('click', () => {	    itemsArr[i].addEventListener('click', () => {
      menu.style.display = 'none';	      menu.style.display = 'none';
      closeButton.remove();	      closeButton.remove();
    });	    });
  }	  }
});	});

const button = document.querySelectorAll('.work button');
const buttonArr = Array.from(button);
buttonArr.map((el) => {
  el.addEventListener('click', () => {
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');

    const popup = document.createElement('div');
    popup.classList.add('popup');

    popupContainer.appendChild(popup);

    const popupObj = {};
    popupObj.img = '/images/work1.jpg';
    popupObj.title = 'My Gym Mate';
    popupObj.client = 'Athletico';
    popupObj.role = 'Full Stack Developer';
    popupObj.year = '2018';
    popupObj.tags = [
      'html',
      'css',
      'javaScript',
      'github',
      'ruby',
      'bootstrap',
    ];
    popupObj.paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`;

    const closeButton = document.createElement('span');
    popup.appendChild(closeButton);

    const title = document.createElement('h2');
    title.innerHTML = popupObj.title;
    popup.appendChild(title);

    const client = document.createElement('span');
    client.innerHTML = popupObj.client;
    client.classList.add('span1');
    popup.appendChild(client);

    const role = document.createElement('span');
    role.innerHTML = popupObj.role;
    role.classList.add('span2');
    popup.appendChild(role);

    const year = document.createElement('span');
    year.innerHTML = popupObj.year;
    year.classList.add('span2');
    popup.appendChild(year);

    const img = document.createElement('img');
    img.setAttribute('src', popupObj.img);
    popup.appendChild(img);

    const paragraph = document.createElement('p');
    paragraph.innerHTML = popupObj.paragraph;
    popup.appendChild(paragraph);

    const tags = document.createElement('ul');
    popupObj.tags.map((t) => {
      const tag = document.createElement('li');
      tag.innerHTML = t;
      tags.appendChild(tag);
    });
    popup.appendChild(tags);

    const seeLiveButton = document.createElement('a');
    seeLiveButton.classList.add('button');
    seeLiveButton.classList.add('see-project-button');
    seeLiveButton.innerHTML = 'See Project';
    popup.appendChild(seeLiveButton);

    const seeSourceButton = document.createElement('a');
    seeSourceButton.classList.add('button');
    seeSourceButton.classList.add('see-source-button');
    seeSourceButton.innerHTML = 'See Source';
    popup.appendChild(seeSourceButton);

    document.querySelector('body').appendChild(popupContainer);

    //console.log(popup);
  });
});
