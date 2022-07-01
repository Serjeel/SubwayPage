const addToBasket = (target) => {
    /*  const button = document.getElementById("button-" + target.id.split("-")[1]);
      if (button.className !== "item-button-active") {
          Можно попробовать реализовать фильтрацию через display:none, чтобы не мучиться с воссозданием зелёных кнопок
          */

    const item = document.getElementsByClassName("order-items-block")[0];

    const orderItems = document.createElement("div");
    orderItems.className = "order-items";
    orderItems.id = "order-" + (item.childElementCount + 1)

    const orderTitle = document.createElement("p");
    if (target.id.split("-")[1] === "modal") {

        orderTitle.className = "sandwich-title";
        orderTitle.id = "sandwich-" + (document.getElementsByClassName("sandwich-title").length + 1);
        orderTitle.onclick = () => {
            let x = sessionStorage.getItem("storageElements");
            x = JSON.parse(x);
            console.log(x);
            const y = x.find(obj => obj.id === orderTitle.id.split("-")[1] - 0);
            console.log(y.itemId);

            activeSize = y.activeSize;
            activeBread = y.activeBread;
            activeVegetables = y.activeVegetables;
            activeSauces = y.activeSauces;
            activeFillings = y.activeFillings;

            finalSize = y.finalSize;
            finalBread = y.finalBread;
            finalVegetables = y.finalVegetables;
            finalSauces = y.finalSauces;
            finalFillings = y.finalFillings;

            openModal(y.itemId);

            document.getElementById("price-modal").textContent = y.price / y.count;
            document.getElementById("counter-" + y.itemId).value = y.count;
        }

    } else {
        orderTitle.className = "order-title";
    }

    const orderAmount = document.createElement("p");
    orderAmount.className = "order-amount";

    const orderPrice = document.createElement("p");
    orderPrice.className = "order-price";

    const deleteIcon = document.createElement("img");
    deleteIcon.className = "deleteIcon";
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
        document.getElementById("order-" + orderItems.id.split("-")[1]).remove();
        document.getElementById("sum").textContent -= orderPrice.textContent.split(" ")[0];

        for (let i = 0; i < item.childElementCount; i++) {
            document.getElementsByClassName("order-items")[i].id = "order-" + (i + 1);
        }

        x = sessionStorage.getItem("storageElements");
        x = JSON.parse(x);

        const y = x.filter(item => item.id !== 1);
        console.log(y.itemId);

        // реализоать удаление элемента и по мелочи поисправлять
    }


    /*   button.className = "item-button-active";
       button.textContent = "В КОРЗИНЕ";

       const plusIcon = document.getElementById("counter-" + target.id.split("-")[1]).value -= -1;

       itemCounter.onchange = () => { //вместо этого прописать нажатие на иконки plus и minus

       }

   }*/
}

