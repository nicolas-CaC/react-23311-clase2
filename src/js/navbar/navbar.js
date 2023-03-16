// Valores

const navbar = document.getElementById('navbar')
const navbarLogo = document.getElementById('navbarLogo')
const navbarMenu = document.getElementById('navbarMenu')
const navbarSearch = document.getElementById('navbarSearch')

let isOpen = false
let existBurgerButton = false




// Funciones

const burgerButtonManager = (...items) => {
    items.forEach(item => !isOpen
        ? item.classList.add('hidden')
        : item.classList.remove('hidden'))
    // 
    isOpen = !isOpen
}

const navbarHandler = () => {
    burgerButtonManager(navbarLogo, navbarMenu, navbarSearch)
}

const createBurgerButton = () => {
    // 
    const burgerButton = `<svg xmlns="http://www.w3.org/2000/svg" class="text-white icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 6l16 0"></path>
                        <path d="M4 12l16 0"></path>
                        <path d="M4 18l16 0"></path>
                    </svg>`

    const navbarButton = document.createElement('button')
    navbarButton.innerHTML = burgerButton
    navbarButton.id = 'burgerButton'
    navbarButton.className = 'flex justify-center  py-3 w-full'
    navbarButton.addEventListener('click', navbarHandler)

    navbarLogo.parentNode.insertBefore(navbarButton, navbarLogo)
    existBurgerButton = true
}



// Responsive


const removeBurgerButton = () => {
    let burgerButton = document.getElementById('burgerButton')
    if (burgerButton) burgerButton.remove()
    existBurgerButton = false
}

export const navbarResponsive = (navWidth) => {

    // Si tiene tamaño de celular
    const isPhone = navWidth < 850


    // Si es celular y no existe el botón burger
    if (isPhone && !existBurgerButton)
        createBurgerButton()


    // Si es celular y no está abierto
    if (isPhone && !isOpen)
        burgerButtonManager
            (navbarLogo, navbarMenu, navbarSearch)


    // Si no es celular y existe el boton burger
    if (!isPhone && existBurgerButton)
        removeBurgerButton()


    // si no es celular tiene que mostrarme el menú
    if (!isPhone) {
        isOpen = true
        burgerButtonManager
            (navbarLogo, navbarMenu, navbarSearch)
    }
}