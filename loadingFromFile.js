let selectedCategory = "sandwiches";

const category1 = document.getElementById("category-1");
const category2 = document.getElementById("category-2");
const category3 = document.getElementById("category-3");
const category4 = document.getElementById("category-4");
const category5 = document.getElementById("category-5");
const category6 = document.getElementById("category-6");
const category7 = document.getElementById("category-7");

category1.onclick = () => {
    if (selectedCategory !== " ") {
        document.getElementsByClassName("items-block")[0].innerHTML = '';
        const activeElement = document.getElementsByClassName("category-active")[0];
        if (activeElement) {
            activeElement.className = "category"
        }
        category1.className = "category-active";
        selectedCategory = " ";
        loadItems();
    }
}
category2.onclick = () => {
    if (selectedCategory !== "shaurma") {
        document.getElementsByClassName("items-block")[0].innerHTML = ''
        const activeElement = document.getElementsByClassName("category-active")[0];
        if (activeElement) {
            activeElement.className = "category"
        }
        category2.className = "category-active";
        selectedCategory = "shaurma"
        loadItems();
    }
}

category3.onclick = () => {
    if (selectedCategory !== "sandwiches") {
        document.getElementsByClassName("items-block")[0].innerHTML = ''
        const activeElement = document.getElementsByClassName("category-active")[0];
        if (activeElement) {
            activeElement.className = "category"
        }
        category3.className = "category-active";
        selectedCategory = "sandwiches"
        loadItems();
    }
}

category4.onclick = () => {
    if (selectedCategory !== "burgers") {
        document.getElementsByClassName("items-block")[0].innerHTML = ''
        const activeElement = document.getElementsByClassName("category-active")[0];
        if (activeElement) {
            activeElement.className = "category"
        }
        category4.className = "category-active";
        selectedCategory = "burgers"
        loadItems();
    }
}

category5.onclick = () => {
    if (selectedCategory !== "chicken") {
        document.getElementsByClassName("items-block")[0].innerHTML = ''
        const activeElement = document.getElementsByClassName("category-active")[0];
        if (activeElement) {
            activeElement.className = "category"
        }
        category5.className = "category-active";
        selectedCategory = "chicken"
        loadItems();
    }
}

category6.onclick = () => {
    if (selectedCategory !== "salads") {
        document.getElementsByClassName("items-block")[0].innerHTML = ''
        const activeElement = document.getElementsByClassName("category-active")[0];
        if (activeElement) {
            activeElement.className = "category"
        }
        category6.className = "category-active";
        selectedCategory = "salads"
        loadItems();
    }
}

category7.onclick = () => {
    if (selectedCategory !== "drinks") {
        document.getElementsByClassName("items-block")[0].innerHTML = ''
        const activeElement = document.getElementsByClassName("category-active")[0];
        if (activeElement) {
            activeElement.className = "category"
        }
        category7.className = "category-active";
        selectedCategory = "drinks"
        loadItems();
    }
}

const loadItems = () => {
    fetch("data.json")
        .then(response => response.json())
        .then(json => {

            const getFiltered = (menu) => {
                return menu.category === selectedCategory;
            }
            const data = json.menu.filter(getFiltered)
            for (let i in data) {
                const mainBlock = document.getElementsByClassName("items-block")[0];
                const item = document.createElement("div");
                item.className = "item";
                item.id = "item-" + (json.menu.findIndex(product => product.name === data[i].name) + 1);

                const logo = document.createElement("img");
                logo.className = "logo";

                if (data[i].market === "doner") {
                    logo.src = "i/Doner_logo.png"
                } else if (data[i].market === "sfc") {
                    logo.src = "i/South_fried_chicken_logo.png"
                } else {
                    logo.src = "i/Subway_logo.png"
                }

                const itemImage = document.createElement("img");
                itemImage.className = "item-image";
                itemImage.src = data[i].image;

                const itemName = document.createElement("p");
                itemName.className = "item-name";
                itemName.id = "item-name-" + (json.menu.findIndex(product => product.name === data[i].name) + 1);
                itemName.textContent = data[i].name;

                const itemComposition = document.createElement("p");
                itemComposition.className = "item-composition";
                itemComposition.textContent = data[i].description;

                const itemPriceBlock = document.createElement("div");
                itemPriceBlock.className = "item-price-block";

                const priceText = document.createElement("p");
                priceText.className = "price-text";
                priceText.textContent = "Цена:";

                const priceValue = document.createElement("p");
                priceValue.className = "price-value";
                priceValue.id = "price-" + (json.menu.findIndex(product => product.name === data[i].name) + 1);
                priceValue.textContent = data[i].price;

                const priceCurrency = document.createElement("p");
                priceCurrency.className = "price-currency";
                priceCurrency.textContent = "руб.";

                const itemAmount = document.createElement("p");
                itemAmount.className = "item-amount";
                itemAmount.textContent = "Количество";

                const amountBlock = document.createElement("div");
                amountBlock.className = "amount-block";

                const minusIcon = document.createElement("img");
                minusIcon.className = "minus-icon";
                minusIcon.id = "minus-" + (json.menu.findIndex(product => product.name === data[i].name) + 1);
                minusIcon.src = "i/minus.svg";
                minusIcon.onclick = () => {
                    minusClick(item);
                }

                const itemCounter = document.createElement("input");
                itemCounter.className = "item-counter";
                itemCounter.type = "text";
                itemCounter.id = "counter-" + (json.menu.findIndex(product => product.name === data[i].name) + 1);
                itemCounter.value = 1;

                const plusIcon = document.createElement("img");
                plusIcon.className = "plus-icon";
                plusIcon.id = "plus-" + (json.menu.findIndex(product => product.name === data[i].name) + 1);
                plusIcon.src = "i/plus.svg";
                plusIcon.onclick = () => {
                    plusClick(item);
                }

                const itemButton = document.createElement("button");
                itemButton.className = "item-button";
                itemButton.id = "button-" + (json.menu.findIndex(product => product.name === data[i].name) + 1);
                itemButton.textContent = "В КОРЗИНУ";
                itemButton.onclick = () => {
                    if (selectedCategory === "sandwiches") {
                        const id = itemButton.id.split("-")[1];
                        openModal(id);
                        loadIngredients();
                    } else {
                        addToBasket(itemButton);
                    }
                }

                mainBlock.appendChild(item);

                item.appendChild(logo);
                item.appendChild(itemImage);
                item.appendChild(itemName);
                item.appendChild(itemComposition);

                item.appendChild(itemPriceBlock);
                itemPriceBlock.appendChild(priceText);
                itemPriceBlock.appendChild(priceValue);
                itemPriceBlock.appendChild(priceCurrency);

                item.appendChild(itemAmount);

                item.appendChild(amountBlock);
                amountBlock.appendChild(minusIcon);
                amountBlock.appendChild(itemCounter);
                amountBlock.appendChild(plusIcon);

                item.appendChild(itemButton);
            }
        });
}

let selectedTab;

const reset = () => {
    activeSize = "1x"
    activeBread = "white-italian";
    activeVegetables = [];
    activeSauces = [];
    activeFillings = [];

    finalSize = "15 См";
    finalBread = "Белый итальянский";
    finalVegetables = ["Нет"];
    finalSauces = ["Нет"];
    finalFillings = ["Нет"];
}

const arrowForwardClick = () => {
    switch (selectedTab) {
        case "sizes": document.getElementById("tab-2").click();
            break;

        case "breads": document.getElementById("tab-3").click();
            break;

        case "vegetables": document.getElementById("tab-4").click();
            break;

        case "sauces": document.getElementById("tab-5").click();
            break;

        case "fillings": document.getElementById("tab-6").click();
            break;
    }
}

const arrowBackClick = () => {
    switch (selectedTab) {
        case "ready": document.getElementById("tab-5").click();
            break;

        case "fillings": document.getElementById("tab-4").click();
            break;

        case "sauces": document.getElementById("tab-3").click();
            break;

        case "vegetables": document.getElementById("tab-2").click();
            break;

        case "breads": document.getElementById("tab-1").click();
            break;
    }
}

const openModal = (id) => {
    const modalWindow = document.getElementsByClassName("modal-window")[0];
    const closeIcon = document.getElementsByClassName("close-icon")[0];
    modalWindow.style.display = "flex";
    closeIcon.onclick = () => {
        selectedTab = null;
        tab1.className = "tab";
        tab2.className = "tab";
        tab3.className = "tab";
        tab4.className = "tab";
        tab5.className = "tab";
        tab6.className = "tab";
        modalWindow.style.display = "none";
        modalOrderBlock.innerHTML = '';
        reset();
    }

    const tab1 = document.getElementById("tab-1");
    const tab2 = document.getElementById("tab-2");
    const tab3 = document.getElementById("tab-3");
    const tab4 = document.getElementById("tab-4");
    const tab5 = document.getElementById("tab-5");
    const tab6 = document.getElementById("tab-6");
    const tabContentBlock = document.getElementsByClassName("tab-content-block")[0];
    const modalOrderBlock = document.getElementsByClassName("modal-order-block")[0];

    document.getElementById("price-modal").textContent = document.getElementById("price-" + id).textContent;

    const priceMultiplier = () => {
        const counter = document.getElementById("counter-modal");
        const totalPrice = document.getElementById("price-modal");
        totalPrice.textContent /= counter.value;
    }

    const arrowsBlock = document.getElementsByClassName("arrows-block")[0];

    tab1.onclick = () => {
        if (selectedTab === "ready") {
            priceMultiplier();
        }
        if (selectedTab !== "sizes") {
            modalOrderBlock.innerHTML = '';

            const activeTab = document.getElementsByClassName("tab-active")[0];
            if (activeTab) {
                activeTab.className = "tab"
            }
            tab1.className = "tab-active";
            selectedTab = "sizes";
            loadIngredients();

            arrowsBlock.innerHTML = '';

            const arrowForward = document.createElement("button");
            arrowForward.className = "arrow";
            arrowForward.id = "arrow-forward";
            arrowForward.textContent = "Вперёд ᐳ";
            arrowForward.onclick = () => {
                arrowForwardClick();
            }

            arrowsBlock.style.justifyContent = "end"

            arrowsBlock.appendChild(arrowForward);
        }
    }

    tab1.click();

    const createArrowsMiddle = () => {
        arrowsBlock.innerHTML = '';

        const arrowForward = document.createElement("button");
        arrowForward.className = "arrow";
        arrowForward.id = "arrow-forward";
        arrowForward.textContent = "Вперёд ᐳ";
        arrowForward.onclick = () => {
            arrowForwardClick();
        }

        const arrowBack = document.createElement("button");
        arrowBack.className = "arrow";
        arrowBack.id = "arrow-back";
        arrowBack.textContent = "ᐸ Назад";
        arrowBack.onclick = () => {
            arrowBackClick();
        }

        arrowsBlock.style.justifyContent = "space-between"

        arrowsBlock.appendChild(arrowBack);
        arrowsBlock.appendChild(arrowForward);
    }

    tab2.onclick = () => {
        if (selectedTab === "ready") {
            priceMultiplier();
        }
        if (selectedTab !== "breads") {
            modalOrderBlock.innerHTML = '';

            const activeTab = document.getElementsByClassName("tab-active")[0];
            if (activeTab) {
                activeTab.className = "tab";
            }
            tab2.className = "tab-active";
            selectedTab = "breads";
            loadIngredients();
            createArrowsMiddle();
        }
    }

    tab3.onclick = () => {
        if (selectedTab === "ready") {
            priceMultiplier();
        }
        if (selectedTab !== "vegetables") {
            modalOrderBlock.innerHTML = '';

            const activeTab = document.getElementsByClassName("tab-active")[0];
            if (activeTab) {
                activeTab.className = "tab";
            }
            tab3.className = "tab-active";
            selectedTab = "vegetables";
            loadIngredients();
            createArrowsMiddle();
        }
    }

    tab4.onclick = () => {
        if (selectedTab === "ready") {
            priceMultiplier();
        }
        if (selectedTab !== "sauces") {
            modalOrderBlock.innerHTML = '';

            const activeTab = document.getElementsByClassName("tab-active")[0];
            if (activeTab) {
                activeTab.className = "tab"
            }
            tab4.className = "tab-active";
            selectedTab = "sauces";
            loadIngredients();
            createArrowsMiddle();
        }
    }

    tab5.onclick = () => {
        if (selectedTab === "ready") {
            priceMultiplier();
        }
        if (selectedTab !== "fillings") {
            modalOrderBlock.innerHTML = '';

            const activeTab = document.getElementsByClassName("tab-active")[0];
            if (activeTab) {
                activeTab.className = "tab";
            }
            tab5.className = "tab-active";
            selectedTab = "fillings";
            loadIngredients();
            createArrowsMiddle();
        }
    }

    tab6.onclick = () => {
        const counter = document.getElementById("counter-" + id);
        const totalPrice = document.getElementById("price-modal");
        totalPrice.textContent *= counter.value;

        if (selectedTab !== "ready") {
            tabContentBlock.innerHTML = '';

            const activeTab = document.getElementsByClassName("tab-active")[0];
            if (activeTab) {
                activeTab.className = "tab";
            }
            tab6.className = "tab-active";
            selectedTab = "ready";

            arrowsBlock.innerHTML = '';

            const imageBlock = document.createElement("div");
            imageBlock.className = "image-block";

            const resultImage = document.createElement("img");
            resultImage.className = "result-image";
            resultImage.src = "i/result_sandwich.jpg";

            const finalOrderBlock = document.createElement("div");
            finalOrderBlock.className = "final-order-block";

            const finalOrderReady = document.createElement("p");
            finalOrderReady.className = "final-order-ready";
            finalOrderReady.textContent = "Ваш сендвич готов!";

            const finalOrderSize = document.createElement("div");
            finalOrderSize.className = "final-order-size";

            const finalOrderSizeText = document.createElement("p");
            finalOrderSizeText.className = "final-order-size-text";
            finalOrderSizeText.textContent = "Размер:";

            const finalOrderSizeValue = document.createElement("p");
            finalOrderSizeValue.className = "final-order-size-value";
            finalOrderSizeValue.textContent = finalSize;

            const finalOrderBread = document.createElement("div");
            finalOrderBread.className = "final-order-bread";

            const finalOrderBreadText = document.createElement("p");
            finalOrderBreadText.className = "final-order-bread-text";
            finalOrderBreadText.textContent = "Хлеб:";

            const finalOrderBreadValue = document.createElement("p");
            finalOrderBreadValue.className = "final-order-bread-value";
            finalOrderBreadValue.textContent = finalBread;

            const finalOrderVegetables = document.createElement("div");
            finalOrderVegetables.className = "final-order-vegetables";

            const finalOrderVegetablesText = document.createElement("p");
            finalOrderVegetablesText.className = "final-order-vegetables-text";
            finalOrderVegetablesText.textContent = "Овощи:";

            const finalOrderVegetablesValue = document.createElement("p");
            finalOrderVegetablesValue.className = "final-order-vegetables-value";
            finalOrderVegetablesValue.textContent = finalVegetables;

            const finalOrderSauces = document.createElement("div");
            finalOrderSauces.className = "final-order-sauces";

            const finalOrderSaucesText = document.createElement("p");
            finalOrderSaucesText.className = "final-order-sauces-text";
            finalOrderSaucesText.textContent = "Соусы:";

            const finalOrderSaucesValue = document.createElement("p");
            finalOrderSaucesValue.className = "final-order-sauces-value";
            finalOrderSaucesValue.textContent = finalSauces;
            const finalOrderFilling = document.createElement("div");
            finalOrderFilling.className = "final-order-filling";

            const finalOrderFillingText = document.createElement("p");
            finalOrderFillingText.className = "final-order-filling-text";
            finalOrderFillingText.textContent = "Начинка:";

            const finalOrderFillingValue = document.createElement("p");
            finalOrderFillingValue.className = "final-order-filling-value";
            finalOrderFillingValue.textContent = finalFillings;

            const finalOrderTitle = document.createElement("p");
            finalOrderTitle.className = "final-order-title";
            finalOrderTitle.id = "item-name-modal";
            finalOrderTitle.textContent = document.getElementById("item-name-" + id).textContent;

            ///////////////////////////////////////////////////////////////////////////////////////////////////////
            const modalFooter = document.getElementsByClassName("modal-footer")[0];
            modalFooter.id = "item-modal";

            const itemAmount = document.createElement("p");
            itemAmount.className = "item-amount";
            itemAmount.textContent = "Количество";

            const amountBlock = document.createElement("div");
            amountBlock.className = "amount-block";

            const minusIcon = document.createElement("img");
            minusIcon.className = "minus-icon";
            // minusIcon.id = "minus-" + (json.menu.findIndex(product => product.name === data[i].name) + 1);
            minusIcon.src = "i/minus.svg";
            minusIcon.onclick = () => {
                minusClick(modalFooter);
            }

            const itemCounter = document.createElement("input");
            itemCounter.className = "item-counter";
            itemCounter.type = "text";
            itemCounter.id = "counter-modal";
            itemCounter.value = document.getElementById("counter-" + id).value;

            const plusIcon = document.createElement("img");
            plusIcon.className = "plus-icon";
            // plusIcon.id = "plus-" + (json.menu.findIndex(product => product.name === data[i].name) + 1);
            plusIcon.src = "i/plus.svg";
            plusIcon.onclick = () => {
                plusClick(modalFooter);
            }

            const itemButton = document.createElement("button");
            itemButton.className = "item-button";
            //itemButton.id = "button-" + (json.menu.findIndex(product => product.name === data[i].name) + 1);
            itemButton.textContent = "В КОРЗИНУ";
            itemButton.onclick = () => {
                addToBasket(modalFooter);

                const obj =
                    {
                        id: document.getElementsByClassName("sandwich-title").length,
                        itemId: id,
                        name: finalOrderTitle.textContent,
                        count: itemCounter.value,
                        price: totalPrice.textContent,

                        activeSize,
                        activeBread,
                        activeVegetables,
                        activeSauces,
                        activeFillings,

                        finalSize,
                        finalBread,
                        finalVegetables,
                        finalSauces,
                        finalFillings,
                        // перебрать добавленную инфу, а потом сделать id, отталкиваясь от последнего номера.
                    }

                    storageElements.push(obj)
                
                sessionStorage.setItem("storageElements", JSON.stringify(storageElements));
                console.log(sessionStorage.getItem("storageElements"));

                closeIcon.click();
            }

            modalOrderBlock.appendChild(itemAmount);

            modalOrderBlock.appendChild(amountBlock);
            amountBlock.appendChild(minusIcon);
            amountBlock.appendChild(itemCounter);
            amountBlock.appendChild(plusIcon);

            modalOrderBlock.appendChild(itemButton);

            modalFooter.appendChild(modalOrderBlock);

            tabContentBlock.appendChild(imageBlock);
            imageBlock.appendChild(resultImage);

            tabContentBlock.appendChild(finalOrderBlock);
            finalOrderBlock.appendChild(finalOrderReady);

            finalOrderBlock.appendChild(finalOrderSize);
            finalOrderSize.appendChild(finalOrderSizeText);
            finalOrderSize.appendChild(finalOrderSizeValue);

            finalOrderBlock.appendChild(finalOrderBread);
            finalOrderBread.appendChild(finalOrderBreadText);
            finalOrderBread.appendChild(finalOrderBreadValue);

            finalOrderBlock.appendChild(finalOrderVegetables);
            finalOrderVegetables.appendChild(finalOrderVegetablesText);
            finalOrderVegetables.appendChild(finalOrderVegetablesValue);

            finalOrderBlock.appendChild(finalOrderSauces);
            finalOrderSauces.appendChild(finalOrderSaucesText);
            finalOrderSauces.appendChild(finalOrderSaucesValue);

            finalOrderBlock.appendChild(finalOrderFilling);
            finalOrderFilling.appendChild(finalOrderFillingText);
            finalOrderFilling.appendChild(finalOrderFillingValue);

            finalOrderBlock.appendChild(finalOrderTitle);
        }
    }
}

const storageElements = [];

let activeSize = "1x"
let activeBread = "white-italian";
let activeVegetables = [];
let activeSauces = [];
let activeFillings = [];

let finalSize = "15 См";
let finalBread = "Белый итальянский";
let finalVegetables = ["Нет"];
let finalSauces = ["Нет"];
let finalFillings = ["Нет"];

const loadIngredients = () => {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            document.getElementsByClassName("tab-content-block")[0].innerHTML = '';
            for (let key in data[selectedTab]) {
                const tabContent = document.getElementsByClassName("tab-content-block")[0];
                const item = document.createElement("div");

                if (activeSize === key || activeBread === key) {
                    item.className = "modal-item-active"
                } else if (activeVegetables.includes(key) || activeSauces.includes(key) || activeFillings.includes(key)) {
                    item.className = "modal-item-active"
                } else {
                    item.className = "modal-item"
                }

                item.id = key;

                const itemImage = document.createElement("img");
                itemImage.className = "item-image";
                itemImage.src = data[selectedTab][key]["image"];

                const itemName = document.createElement("p");
                itemName.className = "item-name";
                itemName.id = "name-" + key;
                itemName.textContent = data[selectedTab][key]["name"];

                const itemPriceBlock = document.createElement("div");
                itemPriceBlock.className = "item-price-block";

                const priceText = document.createElement("p");
                priceText.className = "price-text";
                priceText.textContent = "Цена:";

                const priceValue = document.createElement("p");
                priceValue.className = "price-value";
                priceValue.id = "price-" + key; // Привязал к id цены название ключа продукта
                priceValue.textContent = data[selectedTab][key]["price"];

                const priceCurrency = document.createElement("p");
                priceCurrency.className = "price-currency";
                priceCurrency.textContent = "руб.";

                item.onclick = () => {
                    const totalPrice = document.getElementById("price-modal");
                    const itemActive = document.getElementsByClassName("modal-item-active")[0];
                    const previousElement = document.getElementsByClassName("modal-item-active")[0];

                    if (selectedTab === "sizes" || selectedTab === "breads") {
                        if (itemActive) {
                            itemActive.className = "modal-item";
                        }
                        item.className = "modal-item-active";
                        if (selectedTab === "sizes") {
                            activeSize = key;
                            finalSize = document.getElementById('name-' + key).textContent;
                        }
                        if (selectedTab === "breads") {
                            activeBread = key;
                            finalBread = document.getElementById('name-' + key).textContent;
                        }

                        if (previousElement) {
                            const previousElementPrice = document.getElementById("price-" + previousElement.id);
                            totalPrice.textContent -= previousElementPrice.textContent;
                            totalPrice.textContent -= -priceValue.textContent;
                        }

                    } else {
                        if (item.className === "modal-item-active") {
                            item.className = "modal-item";

                            if (selectedTab === "vegetables") {
                                const i = activeVegetables.indexOf(key);
                                activeVegetables.splice(i, 1);
                                totalPrice.textContent -= priceValue.textContent;
                                finalVegetables.splice(i, 1);
                                if (finalVegetables.length === 0) {
                                    finalVegetables.push("Нет");
                                }
                            }
                            if (selectedTab === "sauces") {
                                const i = activeSauces.indexOf(key);
                                activeSauces.splice(i, 1);
                                totalPrice.textContent -= priceValue.textContent;
                                finalSauces.splice(i, 1);

                                if (finalSauces.length === 0) {
                                    finalSauces.push("Нет");
                                }
                            }
                            if (selectedTab === "fillings") {
                                const i = activeFillings.indexOf(key);
                                activeFillings.splice(i, 1);
                                totalPrice.textContent -= priceValue.textContent;
                                finalFillings.splice(i, 1);

                                if (finalFillings.length === 0) {
                                    finalFillings.push("Нет");
                                }
                            }
                        } else {
                            item.className = "modal-item-active";

                            if (selectedTab === "vegetables") {
                                activeVegetables.push(key);
                                totalPrice.textContent -= -priceValue.textContent;

                                if (finalVegetables.includes("Нет")) {
                                    finalVegetables = [];
                                }

                                finalVegetables.push(" " + document.getElementById('name-' + key).textContent);
                            }
                            if (selectedTab === "sauces") {
                                activeSauces.push(key);
                                totalPrice.textContent -= -priceValue.textContent;

                                if (finalSauces.includes("Нет")) {
                                    finalSauces = [];
                                }

                                finalSauces.push(" " + document.getElementById('name-' + key).textContent);
                            }
                            if (selectedTab === "fillings") {
                                activeFillings.push(key);
                                totalPrice.textContent -= -priceValue.textContent;

                                if (finalFillings.includes("Нет")) {
                                    finalFillings = [];
                                }

                                finalFillings.push(" " + document.getElementById('name-' + key).textContent);
                            }
                        }
                    }
                }

                tabContent.appendChild(item);
                item.appendChild(itemImage);
                item.appendChild(itemName);
                item.appendChild(itemPriceBlock);
                itemPriceBlock.appendChild(priceText);
                itemPriceBlock.appendChild(priceValue);
                itemPriceBlock.appendChild(priceCurrency);
            }
        });
}


window.onload = () => {
    category3.className = "category-active";
    loadItems();
};
