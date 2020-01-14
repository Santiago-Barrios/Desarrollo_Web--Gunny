const ipad = window.matchMedia('screen and (max-width: 767px)');
const menu = document.querySelector('.menu');
const burgerbutton = document.querySelector('#burger-menu');
console.log(menu);
console.log(burgerbutton);

function showHide()
{
    if (menu.classList.contains('is-active'))
    {
            menu.classList.remove('is-active');
    }
    else
    {
        menu.classList.add('is-active');
    }
}

function validation(event)
{
    if(event.matches)
    {
        burgerbutton.addEventListener('click', showHide );
    }
    else
    {
        burgerbutton.removeEventListener('click', showHide );
    }
}
    validation(ipad);
ipad.addListener(validation);
