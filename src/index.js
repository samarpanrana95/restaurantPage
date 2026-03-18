import "./styles.css"
import { todayMenu, tomorrowMenu, overmorrowMenu } from "./menu";


class Dom {
    constructor () {
        this.setDomEvent()
    }

    changeFocus (target) {
        let navs = document.querySelectorAll('.titles > nav')
        for (let nav of navs) {
            nav.classList.remove('current')
        }
        target.classList.add('current')
    }

    resetContent () {
        let content = document.querySelector('.content')
        let itemDivider = document.querySelector('.item-divider')
        content.replaceChildren(itemDivider)
    }
    
    createDomItem (itemName, itemPrice) {
        let item = document.createElement('div')
        item.classList.add('item')
        let itemNameDom = document.createElement('div')
        itemNameDom.classList.add('item-name')
        itemNameDom.textContent = itemName
        let itemPriceDom = document.createElement('div')
        itemPriceDom.classList.add('item-price')
        itemPriceDom.textContent = '$' + itemPrice

        item.appendChild(itemNameDom)
        item.appendChild(itemPriceDom)
        let parent = document.querySelector('.content')
        parent.appendChild(item)
    }

    renderMenu(dayMenu) {
        this.resetContent()
        for (let key in dayMenu) {
            this.createDomItem(key, dayMenu[key])
        }
    }

    setDomEvent () {
        let titles = document.querySelector('.titles');
        titles.addEventListener("click", (e) => {
            if (e.target.classList.contains('todayMenu')) {
                this.renderMenu(todayMenu)
            } 
            else if (e.target.classList.contains('tomorrowMenu')) {
                this.renderMenu(tomorrowMenu)
            }
            else if (e.target.classList.contains('overmorrowMenu')) {
                this.renderMenu(overmorrowMenu)
            }
            this.changeFocus(e.target)
        })
    }
}

let myDomManager = new Dom()
