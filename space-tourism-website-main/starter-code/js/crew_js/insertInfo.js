class insertInfo {
    constructor(radio, number, img) {
        this.radio = document.querySelectorAll(radio)
        this.number = document.querySelector(number)
        this.image = document.querySelector(img)
    }

    call = () => {
        this.radio.forEach((value, index) => {
            value.addEventListener('click', () => {
                this.bringInfo(index)
                this.number.innerText = index
            })
        })
    }

    setInfo = (value, valores) => {
        if (document.querySelector(`.${value}`)) {
            document.querySelector(`.${value}`).innerText = valores
        }
    }

    setImg = (value) => {
        this.image.setAttribute('src', `.${value}`)
    }

    bringInfo = async(index) => {
        const data = await fetch('../data.json')
        const data_json = await data.json()
        const crew = data_json.crew
        const person = crew[index]
        for (let value in person) {
            this.setInfo(value, person[value])
        }
        this.setImg(person.images.png)

    }


    init = () => {
        if (this.radio) {
            this.call()
            this.bringInfo(0)
        }
    }
}
const setInfo = new insertInfo('.crew', '.number', '.images')
setInfo.init()