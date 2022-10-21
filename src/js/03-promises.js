import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};

const promiseVar = {
  delay: null,
  step: null,
  amount: null,
};

refs.form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log('start promise generator');
  createLoopPromise(promiseVar.delay, promiseVar.amount, promiseVar.step);
});

refs.delay.addEventListener('input', evt => {
  promiseVar.delay = evt.target.value;
});
refs.step.addEventListener('input', evt => {
  promiseVar.step = evt.target.value;
});
refs.amount.addEventListener('input', evt => {
  promiseVar.amount = evt.target.value;
});

function createLoopPromise(startDelay, position, delay) {
  let delayPromise = Number(startDelay);
  for (let item = 1; item <= position; item++) {
    createPromise(item, delayPromise)
      .then(result => {
        console.log(`✅`, result);
        Notiflix.Notify.success(result);
      })
      .catch(error => {
        console.log(`❌`, error);
        Notiflix.Notify.failure(error);
      });
    delayPromise += Number(delay);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
