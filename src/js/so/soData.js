const soData = () => {

    const so = window.navigator
    // console.log(so)
    const themeDark = window.matchMedia('(prefers-color-scheme: dark)')
    // console.log(themeDark)
    return { so, isThemeDark: themeDark.matches }

}



const data = soData()
console.log(data)

console.log(data.isThemeDark ? 'Tiene tema oscuro' : 'Tiene tema claro')