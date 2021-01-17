const $menu = document.querySelector('.menu');
function menu() {
    if ($menu.classList.contains('menu_close')) {
        $menu.classList.remove('menu_close');
    } else {
        $menu.classList.add('menu_close');
    }
}
