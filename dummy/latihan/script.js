const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
  
//alert logic  
/* Logika milik saya
const alertPlaceholder = document.getElementById('myAlert')
const myAlertModal = document.getElementById('alert-modal')

const appendAlert = (message, type,element) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    '  <h3>Important!</h3>',
    `  <div>${message}</div>`,
    '  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  element.append(wrapper)
}

function showAlert(type,element) {
  const alertTrigger = document.getElementById('liveAlertBtn')
    
    appendAlert('File have been send to my email',type,element)
}

//show alert 2 logic
const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')

const btnModal1 = document.getElementById('btn-modal-1')
const btnModal2 = document.getElementById('btn-modal-2')


btn2.style.display = 'none';
btnModal2.style.display = 'none';

function myFunction1(a,b) {
  a.style.display = 'none';
  b.style.display = 'block';
}
function myFunction2(a,b,target) {
  a.style.display = 'block';
  b.style.display = 'none';
  showAlert('success',target);//show alert bisa di pindah kedalam setTimeout 
}

function myFunctionSpinner1() {
  myFunction1(btn1,btn2);
  setTimeout(() => {
    myFunction2(btn1,btn2,alertPlaceholder)
  }, 2000)
}
function myFunctionSpinner2() {
  myFunction1(btnModal1,btnModal2);
  setTimeout(() => {
    myFunction2(btnModal1,btnModal2,myAlertModal)
  }, 3000)
}

*/

//logika milik AI
const alertPlaceholder = document.getElementById('myAlert')
const myAlertModal = document.getElementById('alert-modal')

const appendAlert = (message, type, element) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = `
    <div class="alert alert-${type} alert-dismissible" role="alert">
      <h3>Important!</h3>
      <div>${message}</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `
  element.append(wrapper)
}

function showAlert(type, element) {
  appendAlert('File have been sent to my email', type, element)
}

const toggleElements = (hideElement, showElement) => {
  hideElement.style.display = 'none'
  showElement.style.display = 'block'
}

function handleSpinner(hideElement, showElement, alertElement, delay) {
  toggleElements(hideElement, showElement)
  setTimeout(() => {
    toggleElements(showElement, hideElement)
    console.log('debug')
    showAlert('success', alertElement)
  }, delay)
}

// Initial setup
const btn2 = document.getElementById('btn-2')
const btnModal2 = document.getElementById('btn-modal-2')

btnModal2.style.display = 'none'
btn2.style.display = 'none'

// Event handlers
const btn1 = document.getElementById('btn-1')
const btnModal1 = document.getElementById('btn-modal-1')

function myFunctionSpinner1 () {
  handleSpinner(btn1, btn2,alertPlaceholder, 2000)
}

function myFunctionSpinner2 () {
  handleSpinner(btnModal1, btnModal2, myAlertModal, 3000)
}
/*
function yang ada di dalam setTimeout akan dijalankan secara normal.
hanya saja akan menunggu selama delay yang telah ditentukan 

function debug() {
  console.log('hello');
  setTimeout(() => {
    console.log('hallo')
    console.log('bandung')
  },5000)
}
*/