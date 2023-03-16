let opacity = 0
const opacityLevel = 0.0008

export const visibilityPopup = (scroll) => {

    const popup = document.getElementById('firstPopup')

    if (popup) {

        scroll > 300
            ? opacity = scroll * opacityLevel
            : opacity = 0

        popup.style.opacity = opacity
    }

}