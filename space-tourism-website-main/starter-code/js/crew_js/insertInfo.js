class insertInfo {
    constructor(radio) {
        this.radio = document.querySelectorAll(radio)
    }
    call = () => {
        this.radio.forEach((value, index) => {
            value.addEventListener('click', () => {
                this.bringInfo(index)
            })
        })
    }
    setInfo = (value, valores) => {
        if (document.querySelector(`.${value}`)) {
            document.querySelector(`.${value}`).innerText = valores
        }
    }
    bringInfo = async(index) => {
        const data = await fetch('../data.json')
        const data_json = await data.json()
        const crew = data_json.crew
        const person = crew[index]
        console.log(person)
        for (let value in person) {
            console.log(value)
            this.setInfo(value, person[value])
        }
    }


    init = () => {
        if (this.radio) {
            this.call()
        }
    }
}
const setInfo = new insertInfo('.crew')
setInfo.init()