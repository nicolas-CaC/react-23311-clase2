import { navbarMenu } from "../DOM/DOM.js"
import { sections } from "../navbarButtons/navBarButtons.js"
import { sectionModel, subsectionModel } from "./navbarModels.js"

const renderSections = (sections) => {

    const createSections = sections.map(section =>
        sectionModel(section)).join('')

    const sectionsNode = document.createElement('ul')
    sectionsNode.className = "mx-auto gap-5 flex items-center justify-between lg:px-8 font-sourceSans"
    sectionsNode.innerHTML = createSections

    navbarMenu.append(sectionsNode)

    sections.forEach(section => {
        section.button = document.getElementById(section.button)
        section.tag = document.getElementById(section.tag)
    })
}

const renderSubsections = (sections) => {

    const createSubsections = sections
        .filter(section => section.subsections)

    createSubsections.forEach(({ name, subsections }) => {

        const subsectionId = `navSubMenu${name}`
        const subsectionNode = document.getElementById(subsectionId)

        subsections.forEach(subsection =>
            subsectionModel(subsection, subsectionNode))

    });

}

export const createNavbarMenu = () => {
    renderSections(sections)
    renderSubsections(sections)
}