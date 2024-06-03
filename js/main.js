const url = 'https://rickandmortyapi.com/api/character'

const procesarFetch = async (link) => {
    try {
        const respuesta = await fetch(link)
        const info = await respuesta.json
        return info
    } catch (error) {
        console.log("Hubo un error")
    }
}
link()


procesarFetch(url)
    .then((info) => {
        info.results.forEach((elemento) => {
            elContainer.innerHTML += `
            <div class="personaje">
                <img src="${elemento.image}" />
                <h2>${elemento.name} <h2/>
            </div>
            `
        })
    })