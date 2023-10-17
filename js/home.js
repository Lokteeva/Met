//Telegram
const promptTelegram = document.querySelector('.home__socials-telegram-prompt');
const btnTelegram = document.querySelector('.home__socials-telegram');

btnTelegram.addEventListener('mouseover', function(){
  promptTelegram.classList.remove('hidden');
})

btnTelegram.addEventListener('mouseout', function(){
  promptTelegram.classList.add('hidden');
})
//Whatsapp
const promptWhatsapp = document.querySelector('.home__socials-whatsapp-prompt');
const btnWhatsapp = document.querySelector('.whatsapp__link');

btnWhatsapp.addEventListener('mouseover', function(){
  promptWhatsapp.classList.remove('hidden');
})

btnWhatsapp.addEventListener('mouseout', function(){
  promptWhatsapp.classList.add('hidden');
})
//mail
const promptSms = document.querySelector('.home__socials-sms-prompt');
const btnSms = document.querySelector('.home__socials-sms');

btnSms.addEventListener('mouseover', function(){
  promptSms.classList.remove('hidden');
})

btnSms.addEventListener('mouseout', function(){
  promptSms.classList.add('hidden');
})
//message
const promptMessage = document.querySelector('.home__socials-message-prompt');
const btnMessage = document.querySelector('.home__socials-message');

btnMessage.addEventListener('mouseover', function(){
  promptMessage.classList.remove('hidden');
})

btnMessage.addEventListener('mouseout', function(){
  promptMessage.classList.add('hidden');
})

//Твердомер-Меры твердости
const tverdomer = document.querySelector('.home__tverdomer');
const homeSlide1 = document.querySelector('.homeSlide1');
const mera = document.querySelector('#mera');
const homeSlide2 = document.querySelector('.homeSlide2');

tverdomer.addEventListener('click', function(){
  homeSlide1.classList.add('hidden');
  homeSlide2.classList.remove('hidden');
})

mera.addEventListener('click', function(){
  homeSlide2.classList.add('hidden');
  homeSlide1.classList.remove('hidden');
})

// mobile menu expand
const btnExtend = document.querySelector('.menu--mobile-products-img');
const menuExtend = document.querySelector('.menu--mobile-nav-hidden');

const aExtend = document.querySelector('#productsMenu');


console.log(btnExtend, menuExtend)

btnExtend.addEventListener('click', function(){
  menuExtend.classList.toggle('hidden');
})

aExtend.addEventListener('click', function(){
  menuExtend.classList.toggle('hidden');
})