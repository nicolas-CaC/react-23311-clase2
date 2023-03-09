import { sections } from "./navBarButtons.js"
import { closeMenu, leaveMenu, showMenu, stayMenu } from "./navBarButtonsFn.js"

const addEvents = (section) => {
    section.button.addEventListener('mouseenter', () => showMenu(section))
    section.button.addEventListener('mouseleave', () => closeMenu(section))
    section.tag.addEventListener('mouseenter', () => stayMenu(section))
    section.tag.addEventListener('mouseleave', () => leaveMenu(section))
}

sections.forEach(section => addEvents(section))

