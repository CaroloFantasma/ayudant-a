//Alert('Hola')
const btn_hide = document.getElementById('hide');

btn_hide.addEventListener('click', () => {
document.getElementsByClassName('text_hide')[0].classList.add('hide');
})

const btn_show = document.getElementById ('show');

btn_show.addEventListener ('click', () => {
document.getElementsByClassName ('img_show')[0].classList.remove('img_show');
})

const iteracion = () => {
  const name = 'carolina andrea';
  let result = '';

  for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
    result += name[i].toUpperCase();
    // console.log(result);
    
  }
}
iteracion();


