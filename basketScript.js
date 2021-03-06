const addToBasket = (target) => {
    /*  const button = document.getElementById("button-" + target.id.split("-")[1]);
      if (button.className !== "item-button-active") {
          Можно попробовать реализовать фильтрацию через display:none, чтобы не мучиться с воссозданием зелёных кнопок
          */

    const item = document.getElementsByClassName("order-items-block")[0];

    const orderItems = document.createElement("div");
    orderItems.className = "order-items";
    orderItems.id = "order-" + (item.childElementCount + 1)

    const orderAmount = document.createElement("p");
    orderAmount.className = "order-amount";

    const orderPrice = document.createElement("p");
    orderPrice.className = "order-price";

    const orderTitle = document.createElement("p");
    if (target.id.split("-")[1] === "modal") {

        orderTitle.className = "sandwich-title";
        orderTitle.id = "sandwich-" + (document.getElementsByClassName("sandwich-title").length + 1);
        orderAmount.id = "order-amount-" + (document.getElementsByClassName("sandwich-title").length + 1);
        orderPrice.id = "order-price-" + (document.getElementsByClassName("sandwich-title").length + 1);
        orderTitle.onclick = () => {
            storageElements = sessionStorage.getItem("storageElements");
            storageElements = JSON.parse(storageElements);

            const selectedElement = storageElements.find(obj => obj.id === orderTitle.id.split("-")[1] - 0);

            activeSize = selectedElement.activeSize;
            activeBread = selectedElement.activeBread;
            activeVegetables = selectedElement.activeVegetables;
            activeSauces = selectedElement.activeSauces;
            activeFillings = selectedElement.activeFillings;

            finalSize = selectedElement.finalSize;
            finalBread = selectedElement.finalBread;
            finalVegetables = selectedElement.finalVegetables;
            finalSauces = selectedElement.finalSauces;
            finalFillings = selectedElement.finalFillings;

            openModal(selectedElement.itemId, "redacting", selectedElement.id);

            document.getElementById("price-modal").textContent = selectedElement.price / selectedElement.count;
            document.getElementById("counter-" + selectedElement.itemId).value = selectedElement.count;
        }

    } else {
        orderTitle.className = "order-title";
    }

    const deleteIcon = document.createElement("img");
    deleteIcon.className = "delete-icon";
    deleteIcon.id = "delete-" + (item.childElementCount + 1);
    deleteIcon.src = "i/trash.svg";

    const sum = document.getElementById("sum");

    const itemCounter = document.getElementById("counter-" + target.id.split("-")[1]);


    orderTitle.textContent = document.getElementById("item-name-" + target.id.split("-")[1]).textContent
    orderAmount.textContent = itemCounter.value;

    if (target.id.split("-")[1] === "modal") {
        orderPrice.textContent = document.getElementById("price-" + target.id.split("-")[1])
            .textContent + " руб.";
    } else {
        orderPrice.textContent = document.getElementById("price-" + target.id.split("-")[1])
            .textContent * orderAmount.textContent + " руб.";
    }

    orderItems.appendChild(orderTitle);
    orderItems.appendChild(orderAmount);
    orderItems.appendChild(orderPrice);
    orderItems.appendChild(deleteIcon);

    item.appendChild(orderItems);

    sum.textContent -= -orderPrice.textContent.split(' ')[0];

    deleteIcon.onclick = () => {
        const deleteId = deleteIcon.id.split("-")[1] - 0;

        if (document.getElementById("order-" + deleteId).querySelector(".sandwich-title")) {
            const deletedSandwichId = document.getElementById("order-" + deleteId).querySelector(".sandwich-title").id.split("-")[1] - 0;
            let storageElements = JSON.parse(sessionStorage.getItem("storageElements"));
            storageElements = storageElements.filter(item => item.id !== deletedSandwichId);
            for (let i = 0; i < storageElements.length; i++) {
                storageElements[i].id = i + 1;
            }
            sessionStorage.setItem("storageElements", JSON.stringify(storageElements));
        }

        document.getElementById("order-" + orderItems.id.split("-")[1]).remove();
        sum.textContent -= orderPrice.textContent.split(" ")[0];

        for (let i = 0; i < item.childElementCount; i++) {
            document.getElementsByClassName("order-items")[i].id = "order-" + (i + 1);
            document.getElementsByClassName("delete-icon")[i].id = "delete-" + (i + 1);
        }

        const sandwichCount = document.getElementsByClassName("sandwich-title").length;

        for (let i = 0; i < sandwichCount; i++) {
            document.getElementsByClassName("sandwich-title")[i].id = "sandwich-" + (i + 1);
        }
    }


    /*   button.className = "item-button-active";
       button.textContent = "В КОРЗИНЕ";

       const plusIcon = document.getElementById("counter-" + target.id.split("-")[1]).value -= -1;

       itemCounter.onchange = () => { //вместо этого прописать нажатие на иконки plus и minus

       }

   }*/
}