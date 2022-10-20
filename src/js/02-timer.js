import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

let intervalID = null;
let time = null;

const refs = {
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop]'),
  fieldDay: document.querySelector('[data-days]'),
  fieldHours: document.querySelector('[data-hours]'),
  fieldMinutes: document.querySelector('[data-minutes]'),
  fieldSeccons: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const nowDate = new Date();
    time = selectedDates[0].getTime() - nowDate.getTime();
    if (time < 0) {
      allertWindow();
      return;
    }
    refs.startButton.removeAttribute('disabled');
    writeText();
    refs.startButton.addEventListener('click', startTimer);
  },
};

refs.startButton.setAttribute('disabled', 'disabled');
refs.stopButton.setAttribute('disabled', 'disabled');

flatpickr('#datetime-picker', options);

function startTimer() {
  console.log('start timer ', time, ' msec');
  intervalID = setInterval(() => {
    time -= 1000;
    writeText();
    if (time < 1000) {
      clearInterval(intervalID);
      refs.stopButton.setAttribute('disabled', 'disabled');
      successWindow();
    }
  }, 1000);
  refs.startButton.setAttribute('disabled', 'disabled');
  refs.stopButton.removeAttribute('disabled');
  refs.stopButton.addEventListener('click', stopTimer);
}

function stopTimer() {
  console.log('stop timer');
  clearInterval(intervalID);
  refs.stopButton.setAttribute('disabled', 'disabled');
  refs.startButton.removeAttribute('disabled');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function writeText() {
  refs.fieldDay.textContent = `${addLeadingZero(convertMs(time).days)}`;
  refs.fieldHours.textContent = `${addLeadingZero(convertMs(time).hours)}`;
  refs.fieldMinutes.textContent = `${addLeadingZero(convertMs(time).minutes)}`;
  refs.fieldSeccons.textContent = `${addLeadingZero(convertMs(time).seconds)}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function allertWindow() {
  Notiflix.Report.failure(
    'Please choose a data in the future',
    '',
    'continue',
    function cb() {
      return;
    },
    {
      width: '360px',
      svgSize: '120px',
    }
  );
}
function successWindow() {
  Notiflix.Report.success(
    'Time is up, continue?',
    '',
    'continue',
    function cb() {
      return;
    },
    {
      width: '360px',
      svgSize: '120px',
    }
  );
}
