// function cargarDatos() {
//     const url = 'https://rickandmortyapi.com/api/character';

//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Error en la red - La respuesta no fue ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('Datos recibidos:', data);
//         })
//         .catch(error => {
//             console.error('Error capturado en .catch():', error);
//         });
// }

// cargarDatos()


const url = "https://rickandmortyapi.com/api/character"

const procesarFetch = async (link) => {
    try {
        const respuesta = await fetch(link)
        const info = await respuesta.json()
        return info
    } catch (error) {
        console.log("Hubo un error",error)
    }
}
procesarFetch(url).then(info => console.log(info));



const elContainer = document.getElementById("container")
procesarFetch(url)
    .then((info) => {
        console.log(info)
        info.results.forEach((elemento) => {
            elContainer.innerHTML += `
            <div class="personaje">
                <img src="${elemento.image}" />
                <h2>${elemento.name} <h2/>
            </div>
            `
        })
    })