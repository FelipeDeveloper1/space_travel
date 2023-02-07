const allplanets = document.querySelectorAll('.planet')
const image = document.querySelector('.img')
const number = document.querySelector('.number')
const insertValue = async() => {
    const getvalue = await fetch("../data.json")
    const value = await getvalue.json()
    const destinations = value.destinations
    allplanets.forEach((value, index) => {
        value.addEventListener('click', () => {
            search(index)
            insertImg(index)
            number.innerText = index
        })
    })
    const insertImg = (num) => {
        let imgPlanet = destinations[num]
        image.setAttribute('src', `.${imgPlanet.images.png}`)
    }
    const search = (num) => {
        let thePlanet = destinations[num]
        for (info in thePlanet) {
            if (document.querySelector(`.${info}`)) {
                document.querySelector(`.${info}`).innerText = thePlanet[info]
            }
        }
    }
    search(0)
    insertImg(0)

}
insertValue()