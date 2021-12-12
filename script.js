
const calcBtn = document.querySelector('.calc-btn');
const form = document.querySelector('.form');
const outTip = document.querySelector('.tip__value');
const totalPerPerson = document.querySelector('.total__value')

calcBtn.addEventListener('click', ()=> {
  event.preventDefault();
  const billVAlue = +form.elements.billValue.value;
  const peopleVAlue = +form.elements.peopleValue.value;
  const persentTip = +form.elements.radio.value;
  const warning = document.querySelector('.warning-mesage')
 if (billVAlue && peopleVAlue) {
  warning.style.display = 'none';
  outTip.textContent = (billVAlue * persentTip).toFixed(2);
  totalPerPerson.textContent = ((billVAlue + billVAlue * persentTip) / peopleVAlue).toFixed(2);
 } else {
  warning.style.display = 'flex';
 }
  
})

