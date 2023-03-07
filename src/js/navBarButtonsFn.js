const navButtonHome = document.getElementById('navButtonHome')
const navMenuHome = document.getElementById('navMenuHome')
let navMenuOpen = false


const showMenu = () => {
    navMenuHome.hidden = false
    navMenuOpen = true
}

const hiddenMenu = () => {
    setTimeout(() => {
        navMenuHome.hidden = true
    }, 500);
}