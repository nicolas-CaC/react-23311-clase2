import { sections } from "./navBarButtons.js"
import { closeMenu, leaveMenu, showMenu, stayMenu } from "./navBarButtonsFn.js"

const addEvents = (section) => {
    section.button.addEventListener('mouseenter', () => showMenu(section))
    section.button.addEventListener('mouseleave', () => closeMenu(section))
    section.tag.addEventListener('mouseenter', () => stayMenu(section))
    section.tag.addEventListener('mouseleave', () => leaveMenu(section))
}


const addLink = (section) =>
    section.button.children[0].href = section.page



export const navbarMenuEvents = () => {

    const sectionsWithMenu = sections
        .filter(section => section.subsections)

    const sectionsWithoutMenu = sections
        .filter(section => !section.subsections)

    sectionsWithMenu.forEach(section => addEvents(section))
    sectionsWithoutMenu.forEach(section => addLink(section))
}
