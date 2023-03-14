// Sections Constructors

export const sectionModel = (section) => `<li class="relative" id="${section.name.toLowerCase()}">
                        <button id="navButton${section.name}"
                            class="inline-flex items-center overflow-hidden rounded-md bg-zinc-900">
                            <a href="#" class="px-4 py-2 text-sm leading-none text-white">
                                ${section.name}
                            </a>

                            <div class="h-full p-2 text-gray-600  hover:text-gray-50">
                                <span class="sr-only">Menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                        </button>

                        <div hidden id="navMenu${section.name}" hidden
                            class="absolute right-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                            role="menu">
                            <div class="p-2" id="navSubMenu${section.name}">
                            </div>
                        </div>
                    </li>`

export const subsectionModel = (subsection, node) => {

    const link = document.createElement('a')
    link.className = "block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
    link.innerHTML = subsection.name
    link.href = subsection.link
    node.append(link)
}