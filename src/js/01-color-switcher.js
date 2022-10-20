const refs = {
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop]'),
  container: document.querySelector('body'),
};

let intervalId = null;

// выполнение задание через классы
class ColorSwitcher {
  constructor({ startButton, stopButton, container }, intervalId) {
    this.startButton = startButton;
    this.stopButton = stopButton;
    this.container = container;
    this.intervalId = intervalId;

    this.init();
  }
  init() {
    this.stopButton.setAttribute('disabled', 'disabled');
    this.addListener();
  }
  addListener() {
    this.startButton.addEventListener('click', this.startScript.bind(this));
    this.stopButton.addEventListener('click', this.stopScript.bind(this));
  }
  startScript() {
    console.log('start color-switcher');
    this.startButton.setAttribute('disabled', 'disabled');
    this.stopButton.removeAttribute('disabled');
    this.changeColor();
  }
  stopScript() {
    console.log('stop color-switcher');
    clearInterval(intervalId);
    this.startButton.removeAttribute('disabled');
    this.stopButton.setAttribute('disabled', 'disabled');
  }
  changeColor() {
    intervalId = setInterval(() => {
      const fonColor = this.getRandomHexColor();
      refs.container.style.backgroundColor = `${fonColor}`;
      console.log('color', fonColor);
    }, 1000);
  }
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}

new ColorSwitcher(refs);

// выполнение задания через функции
// refs.stopButton.setAttribute('disabled', 'disabled');

// refs.startButton.addEventListener('click', () => {
//   console.log('start color-switcher');
//   changeColor();
//   refs.startButton.setAttribute('disabled', 'disabled');
//   refs.stopButton.removeAttribute('disabled');
// });

// refs.stopButton.addEventListener('click', () => {
//   console.log('stop color-switcher');
//   clearInterval(intervalId);
//   refs.startButton.removeAttribute('disabled');
//   refs.stopButton.setAttribute('disabled', 'disabled');
// });

// function changeColor() {
//   intervalId = setInterval(() => {
//     const fonColor = getRandomHexColor();
//     refs.container.style.backgroundColor = `${fonColor}`;
//     console.log('color', fonColor);
//   }, 1000);
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
