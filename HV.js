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

burgerbutton.addEventListener('click', showHide );

