import { header } from "../DOM/DOM.js"

let firstPopupOnScreen
const text = 'No olvides suscribirte a nuestro sitio!'

export const firstPopup = () => {

    if (!firstPopupOnScreen) {

        const container = document.createElement('div')
        container.className = 'fixed w-full h-screen flex justify-center items-center'

        const popup = document.createElement('div')
        popup.className = 'z-10 opacity-0 flex w-2/3 px-12 h-3/4 bg-black/50 text-white text-center text-shadow-white text-md md:text-3xl font-marvel antialiased rounded-xl justify-center items-center shadow-[1px_4px_35px_rgba(0,0,0,50%)] backdrop-blur-[10px]'
        popup.innerText = text
        popup.id = 'firstPopup'

        container.append(popup)
        header.parentNode.insertBefore(container, header)

        firstPopupOnScreen = true
    }
}