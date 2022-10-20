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
  // evt.currentTarget.reset();
  // console.log(promiseVar);
});
refs.delay.addEventListener('input', evt => {
  // console.log(evt.target.value);
  promiseVar.delay = evt.target.value;
});
refs.step.addEventListener('input', evt => {
  // console.log(evt.target.value);
  promiseVar.step = evt.target.value;
});
refs.amount.addEventListener('input', evt => {
  // console.log(evt.target.value);
  promiseVar.amount = evt.target.value;
});

function createLoopPromise(startDelay, position, delay) {
  let delayPromise = Number(startDelay);
  console.log(position);
  for (i = 0; i <= position; i++) {
    createPromise(i, delayPromise);
    delayPromise += Number(delay);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}
