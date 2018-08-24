(() => {
  'use strict';

  let index = 0;
  const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple', 'pink', 'white', 'black'];

  const app = {
    flashCards: [],
  };

  document.getElementById('mainButton').addEventListener('click', function() {
    app.updateElements();
  });

  app.updateElements = () => {
    index++;
    if (index === colors.length) {
      index = 0;
    }
    const card = document.querySelector('.card');
    const bgColor = colors[index];
    const lightColors = ['pink', 'white', 'yellow'];
    const textColor = lightColors.includes(bgColor) ? 'gray' : 'white';
    card.textContent = bgColor;
    card.setAttribute('style', `background:${bgColor};color:${textColor}`);
  };

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./serviceWorker.js')
      .then(() => { console.log('Service Worker Registered'); });
  }
  app.updateElements();
})();
