const buttons = document.querySelectorAll('.button')
const image = document.querySelector('.images')
const id = document.querySelector(".id")
const getInfo = async() => {
    const infoTech = await fetch('../data.json')
    const TechJson = await infoTech.json()
    const technology = TechJson.technology
    let num = 0
    buttons.forEach((value, index) => {
        value.addEventListener('click', () => {
            insertInfo(index)
            getImage(index)
            num = index
            id.innerText = `0${index + 1}`
        })
    })

    // função que insere as informações na aplicação

    const insertInfo = (index) => {
        const InfoRequest = technology[index]
        for (let data in InfoRequest) {
            document.querySelector(`.${data}`) ? document.querySelector(`.${data}`).innerText = InfoRequest[data] : undefined
        }
    }

    // função que insere e ajusta a dimensão da imagem na aplicação


    const getImage = (index) => {
        ImageRequest = technology[index].images
        const PageWidth = window.screen.width
        PageWidth <= 1250 ? image.setAttribute("src", `.${ImageRequest.landscape}`) : image.setAttribute('src', `.${ImageRequest.portrait}`)
    }

    window.addEventListener('resize', () => {
        let ImageRequest = technology[num].images
        const PageWidth = window.screen.width
        PageWidth <= 1250 ? image.setAttribute("src", `.${ImageRequest.landscape}`) : image.setAttribute('src', `.${ImageRequest.portrait}`)
    })



    insertInfo(0)
    getImage(0)
}
getInfo()