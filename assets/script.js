
const menu=document.querySelector('.menu'), links=document.querySelector('.navlinks');
if(menu&&links) menu.addEventListener('click',()=>links.classList.toggle('open'));
const WA_NUMBER='996XXXXXXXXX'; // Укажите номер WhatsApp без +, пробелов и скобок
document.querySelectorAll('[data-lead-form]').forEach(form=>{
 form.addEventListener('submit',e=>{
  e.preventDefault();const d=new FormData(form);
  const msg=`Здравствуйте! Меня зовут ${d.get('name')||'не указано'}. Услуга: ${d.get('service')||'Консультация'}. Телефон: ${d.get('phone')||''}. Комментарий: ${d.get('comment')||'нет'}`;
  if(WA_NUMBER==='996XXXXXXXXX'){alert('Перед запуском сайта укажите номер WhatsApp в assets/script.js');return;}
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,'_blank');
 });
});
const area=document.querySelector('#calc-area'), rate=document.querySelector('#calc-rate'), result=document.querySelector('#calc-total');
function calc(){if(!area||!rate||!result)return;const a=Math.max(0,Number(area.value)||0),r=Math.max(0,Number(rate.value)||0);result.textContent=(a*r).toLocaleString('ru-RU')+' сом';}
if(area&&rate){area.addEventListener('input',calc);rate.addEventListener('change',calc);calc();}
