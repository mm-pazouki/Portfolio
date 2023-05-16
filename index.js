// Add event listener to the icon with class "fa" for click event
document.querySelector('i.fa').addEventListener('click', () => {
  // Get the menu element with ID "mobile-menu"
  const menu = document.querySelector('#mobile-menu');
  // Display the menu by setting its CSS "display" property to "flex"
  menu.style.display = 'flex';

  // Create a close button as a list item element
  const closeButton = document.createElement('li');
  // Create a span element for the close button
  const closeButtonSpan = document.createElement('span');
  // Add the class "closeMenu" to the close button span
  closeButtonSpan.classList.add('closeMenu');
  // Append the close button span to the close button
  closeButton.appendChild(closeButtonSpan);
  // Insert the close button as the first child of the menu
  menu.insertBefore(closeButton, menu.firstChild);

  // Add event listener to the close button for click event
  closeButton.addEventListener('click', () => {
    // Hide the menu by setting its CSS "display" property to "none"
    menu.style.display = 'none';
    // Remove the close button from the DOM
    closeButton.remove();
  });

  // Get all the list items within the menu
  const items = document.querySelectorAll('#mobile-menu li');
  // Convert the NodeList of items to an array
  const itemsArr = Array.from(items);
  
  // Add event listeners to each list item for click event
  for (let i = 0; i < itemsArr.length; i += 1) {
    itemsArr[i].addEventListener('click', () => {
      // Hide the menu by setting its CSS "display" property to "none"
      menu.style.display = 'none';
      // Remove the close button from the DOM
      closeButton.remove();
    });
  }
});
