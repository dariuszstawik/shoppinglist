import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("Halo, tu mówi index.js");

class Item {
    constructor (name, toBuy = true, bought = false, lack = false) {
        this.name = name;
        this.toBuy = toBuy;
        this.bought = bought;
        this.lack = lack;
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
        // let that = this;
        // let savedList = localStorage.getItem('savedList');
        // if (savedList) {
        //     let lista = JSON.parse(savedList);              
        //     for (let i=0; i<lista.length; i++) {
        //         that.list[i] = lista[i];
        //     }
        // }
        this.itemsList = document.querySelector(".shopping-list__items");
        // this.itemsBoughtList = document.querySelector("shopping-list__items--bought");
        // this.itemsLackList = document.querySelector(".shopping-list__items--lack");
    }

    addItemToList(item) {
        this.list.push(item);
        localStorage.setItem('savedList', JSON.stringify(this.list));
        console.log(`wyświetlam wartość this.list: ${this.list}`);
        let newItem = document.createElement("li");
        newItem.innerHTML = item.name;
        console.log(item.name, item.toBuy, item.bought, item.lack);


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

        if (item.bought === true) {
            newItem.style.backgroundColor = "green";
        }

        else if (item.lack === true) {
            newItem.style.backgroundColor = "red";
        }

        // getNewItem() {
        //     return newItem;
        // }

        boughtIcon.addEventListener("click", () => {
            console.log("kliknąłeś, że kupione");
            item.buyItem();
            localStorage.setItem('savedList', JSON.stringify(this.list));
            newItem.style.backgroundColor = "green";
            console.log(item.toBuy);
        })

        // getBoughtIcon() {
        //     return boughtIcon
        // }

        lackIcon.addEventListener("click", () => {
            console.log("kliknąłeś, że nie ma");
            item.lackItem();
            localStorage.setItem('savedList', JSON.stringify(this.list));
            newItem.style.backgroundColor = "red";
            console.log(item.lack);
        })

        deleteIcon.addEventListener("click", () => {
            console.log("kliknąłeś ununięcie produktu");
            newItem.remove();
            boughtIcon.remove();
            lackIcon.remove();
            deleteIcon.remove();
            let index = this.list.indexOf(item);
            this.list.splice(index,1);
            localStorage.setItem('savedList', JSON.stringify(this.list));
        })

    }

    markItemAsBought() {

    }

    resetList() {
        console.log(`wyświetlam wartość this.list w resecie: ${this.list}`);
        this.list.length = 0;
        this.itemsList.textContent = "";
        localStorage.clear();
    }

}

class Main {

    constructor() {
        this.myShoppingList = new ShoppingList();
        

        let savedList = localStorage.getItem('savedList');
        if (savedList) {
            let lista = JSON.parse(savedList);
            console.log(lista);
                
            for (let i=0; i<lista.length; i++) {
                // this.myShoppingList.list[i] = lista[i];
                console.log("uzupełniam listę");
                // let abc = lista[i];
                console.log(lista[i]);
                this.firstItem = new Item(lista[i].name, lista[i].toBuy, lista[i].bought, lista[i].lack);
                this.myShoppingList.addItemToList(this.firstItem);
                // if (lista[i].bought = true) {
                //     this.firstItem.buyItem;
                //     // getNewItem().style.backgroundColor = "green";
                // }
                // else if (lista[i].lack = true) {
                //     this.firstItem.lackItem;
                // }  
            };
        };


        let myForm = document.querySelector(".add-elements__form");
        let myInput = document.querySelector(".add-elements__input");
        let resetBtn = document.querySelector(".reset__btn");


        console.log(`wyświetlam wartość this input: ${this.input}`);

        // let boughtButtons = document.getElementsByClassName('fa-solid fa-check');

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