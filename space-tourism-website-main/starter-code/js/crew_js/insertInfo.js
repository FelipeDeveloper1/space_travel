class insertInfo {
    constructor(radio, role, name, bio) {
        this.radio = document.querySelectorAll(radio)
    }
    call = () => {
        this.radio.forEach((value, index) => {
            value.addEventListener('click', () => {
                console.log(value, index)
            })
        })
    }


    init = () => {
        if (this.radio) {
            this.call()
        }
    }
}
const setInfo = new insertInfo('.crew')
setInfo.init()