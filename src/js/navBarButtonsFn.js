// Funciones auxiliares

const show = (menu, stay = true) => {
    menu.tag.hidden = false
    // Operador ternario
    stay
        ? menu.onOver = true
        : menu.isOpen = true
}

const hide = (menu) => {
    menu.tag.hidden = true
    menu.isOpen = false
}



// Menu

export const stayMenu = (menu) =>
    menu.isOpen && show(menu)


export const leaveMenu = (menu) => {
    menu.onOver = false
    setTimeout(() =>
        menu.isOpen && hide(menu), 100);
}



// Buttons

export const showMenu = (menu) =>
    !menu.isOpen && show(menu, false)


export const closeMenu = (menu) => {
    setTimeout(() =>
        // Cortocircuito
        menu.isOpen
        && !menu.onOver
        && hide(menu), 100);
}