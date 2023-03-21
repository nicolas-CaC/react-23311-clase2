// Array con objetos del menu

export const sections = [
    {
        name: 'Home',
        page: 'index.html',
        video: '/src/video/MarvelTheme.mp4',
        button: 'navButtonHome',
        tag: 'navMenuHome',
        isOpen: false,
        onOver: false
    },
    {
        name: 'Movies',
        video: '/src/video/MarvelMovies.mp4',
        button: 'navButtonMovies',
        tag: 'navMenuMovies',
        isOpen: false,
        onOver: false,
        subsections: [
            {
                name: 'Iron Man',
                link: 'https://www.marvel.com/movies/iron-man'
            },
            {
                name: 'Captain America',
                link: 'capamerica'
            },
            {
                name: 'Deadpool',
                link: 'deadpool'
            },
            {
                name: 'Venom',
                link: 'venom'
            },
        ]
    },
    {
        name: 'Series',
        video: '/src/video/MarvelSeries.mp4',
        button: 'navButtonSeries',
        tag: 'navMenuSeries',
        isOpen: false,
        onOver: false,
        subsections: [
            {
                name: 'Wandavision',
                link: 'wandavision'
            },
            {
                name: 'Moonknight',
                link: 'moonknight'
            },
            {
                name: 'She Hulk',
                link: 'shehulk'
            },

        ]
    },
    {
        name: 'Comics',
        button: 'navButtonComics',
        tag: 'navMenuComics',
        isOpen: false,
        onOver: false,
        subsections: [
            {
                name: 'Wolverine',
                link: 'wolverine'
            },
            {
                name: 'Sentry',
                link: 'sentry'
            },
            {
                name: 'Fantastic Four',
                link: 'f4'
            },
        ]
    },
    {
        name: 'Contact',
        page: '/pages/contact.html',
        button: 'navButtonContact',
        tag: 'navMenuContact',
        isOpen: false,
        onOver: false
    },
]