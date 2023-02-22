const buttons = document.querySelectorAll('.button')
const image = document.querySelector('.images')
const id = document.querySelector(".id")
const getInfo = async() => {
    const infoTech = await fetch('../data.json')
    const TechJson = await infoTech.json()
    const technology = TechJson.technology

    buttons.forEach((value, index) => {
        value.addEventListener('click', () => {
            insertInfo(index)
            getImage(index)
            id.innerText = `0${index + 1}`
        })
    })
    const insertInfo = (index) => {
        const InfoRequest = technology[index]
        for (let data in InfoRequest) {
            document.querySelector(`.${data}`) ? document.querySelector(`.${data}`).innerText = InfoRequest[data] : undefined
        }
    }
    const getImage = (index) => {
        const ImageRequest = technology[index].images
        image.setAttribute('src', `.${ImageRequest.portrait}`)

    }

    insertInfo(0)
    getImage(0)
}
getInfo()