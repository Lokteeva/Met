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
