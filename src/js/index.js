import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("Halo, tu mówi index.js");

class Item {
    constructor (name) {
        this.name = name;
        this.toBuy = true;
        this.bought = false;
        this.lack = false;
    }

    buyItem() {
        this.toBuy = false;
        this.bought = true;
        this.lack = false;
    }

    lackItem() {
        this.toBuy = false;
        this.bought = false;
        this.lack = true;
    }

    // deleteItem() {

    // }
}

class ShoppingList {
    constructor () {
        this.list = [];
        this.itemsList = document.querySelector(".shopping-list__items");
        // this.itemsBoughtList = document.querySelector("shopping-list__items--bought");
        // this.itemsLackList = document.querySelector(".shopping-list__items--lack");
    }

    addItemToList(item) {
        this.list.push(item);
        console.log(`wyświetlam wartość this.list: ${this.list}`);
        let newItem = document.createElement("li");
        newItem.innerHTML = item.name;
        let boughtIcon = document.createElement("span");
        boughtIcon.className = "fa-solid fa-check";
        let lackIcon = document.createElement("span");
        lackIcon.className = "fa-solid fa-minus";
        let deleteIcon = document.createElement("span");
        deleteIcon.className = "fa-solid fa-xmark";
        this.itemsList.appendChild(newItem);
        this.itemsList.appendChild(boughtIcon);
        this.itemsList.appendChild(lackIcon);
        this.itemsList.appendChild(deleteIcon);

        boughtIcon.addEventListener("click", () => {
            console.log("kliknąłeś, że kupione");
            item.buyItem();
            newItem.style.backgroundColor = "green";
            console.log(item.toBuy);
        })

        lackIcon.addEventListener("click", () => {
            console.log("kliknąłeś, że nie ma");
            item.lackItem();
            newItem.style.backgroundColor = "red";
            console.log(item.lack);
        })

        deleteIcon.addEventListener("click", () => {
            console.log("kliknąłeś ununięcie produktu");
            newItem.remove();
            boughtIcon.remove();
            lackIcon.remove();
            deleteIcon.remove();
        })

    }

    resetList() {
        console.log(`wyświetlam wartość this.list w resecie: ${this.list}`);
        this.list.length = 0;
        this.itemsList.textContent = "";
    }

}

class Main {

    constructor() {
        this.myShoppingList = new ShoppingList();
        // this.firstItem = new Item('makaron');
        let myForm = document.querySelector(".add-elements__form");
        let myInput = document.querySelector(".add-elements__input");
        let resetBtn = document.querySelector(".reset__btn");


        console.log(`wyświetlam wartość this input: ${this.input}`);

        myForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // this.myShoppingList.addItemToList(input.target.value);
            console.log(`wyświetlam wartość myInput.value: ${myInput.value}`);
            console.log(`wyświetlam wartość this w addEventListener: ${this}`);
            this.firstItem = new Item(myInput.value);
            console.log(`wyświetlam wartość this.firstItem: ${this.firstIem}`);
            this.myShoppingList.addItemToList(this.firstItem);
            myInput.value = "";
        });
        resetBtn.addEventListener("click", (e) => {
            this.myShoppingList.resetList();
        });
    }
}

const startApp = new Main();
console.log(`wyświetlam wartość startApp.myShoppingList ${startApp.myShoppingList}`);