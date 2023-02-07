class MobileResponsive {
    constructor(sidebox, items, icon) {
        this.sidebox = document.querySelector(sidebox)
        this.items = document.querySelectorAll(items)
        this.icon = document.querySelector(icon)
        this.active = 'active'
    }
    bringNavBar = () => {
        this.sidebox.classList.toggle(this.active)
    }
    bringItems = () => {
        this.items.forEach((items, index) => {
            items.style.animation ? items.style.animation = "" : items.style.animation = `bringItems ${index / 0.8}s ease forwards 0.3s`
        })
    }
    clicker = () => {
        this.icon.addEventListener('click', () => {
            this.bringNavBar()
            this.bringItems()
        })
    }
    init = () => {
        if (this.icon) {
            this.clicker()
        }
    }
}

const mobile = new MobileResponsive('.ul_nav', '.items', '.icon_responsive')
mobile.init()