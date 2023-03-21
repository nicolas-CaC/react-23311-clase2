import { videoBanner } from '../DOM/DOM.js'
import { sections } from '../navbarButtons/navBarButtons.js'

let actualVideo = sections[0].video

export const changeVideo = () => {

    const change = (video) => {
        if (video != actualVideo) {
            videoBanner.src = video
            actualVideo = video
        }
    }

    sections.forEach(section =>
        section.video &&
        section.button.addEventListener
            ('mouseenter',
                () => change(section.video)))
}


let index = 0

export const rotateVideo = () => {

    const pagesWithVideo = sections.filter(section => section.video)

    setInterval(() => {

        index++
        if (index === pagesWithVideo.length)
            index = 0

        videoBanner.src = pagesWithVideo[index].video
    }, 20000)
}