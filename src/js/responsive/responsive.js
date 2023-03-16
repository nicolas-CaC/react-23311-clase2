import { visibilityPopup } from "../popup/visibility.js"
import { navbarResponsive } from "../navbar/navbar.js"

export const responsiveActions = () => {

    const sizes = document.getElementsByTagName('body')[0].getBoundingClientRect()
    const navWidth = sizes.width
    const scroll = -(sizes.y)

    visibilityPopup(scroll)
    navbarResponsive(navWidth)
}

window.addEventListener('resize', responsiveActions)
window.addEventListener('scroll', responsiveActions)